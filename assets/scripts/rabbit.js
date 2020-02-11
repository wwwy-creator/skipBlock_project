cc.Class({
    extends: cc.Component,
    
    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        //键盘按下后的跳跃持续时间
        duration: 0,
        //跳跃音乐
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },

    },

    playJumpSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setJumpAction: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        // 不断重复
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    setOneJumpAction: function () {
        // 添加跳跃音乐
        var callback = cc.callFunc(this.playJumpSound, this);
        // 跳跃上升
        var jumpUp = cc.moveBy(this.duration, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.duration, cc.v2(0, -200)).easing(cc.easeCubicActionOut());
        //连贯
        return cc.sequence(callback, jumpUp, jumpDown);
    },

    onKeyDown (event) {
        // set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.s: {
                //停掉原先的动作
                this.node.stopAllActions();
                this.node.setPosition(-360, -184);
                this.timer = 0;
                //开始新动作
                this.node.runAction(this.setOneJumpAction());
                break;
            };
        }
    },
    /**/
    onKeyUp (event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.s: {
                //键盘released，等待onKeyDown动作结束后，恢复原先动作
                this.scheduleOnce(function () {
                    this.node.stopAllActions();
                    this.node.setPosition(-360, -184);
                    this.node.runAction(this.setJumpAction());
                }, (this.duration * 1.6 - this.timer));
                break;
            };
        };
    },

    onLoad: function () {
        //定时器
        this.timer = 0;

        // 初始化跳跃动作
        this.node.runAction(this.setJumpAction());

        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

});

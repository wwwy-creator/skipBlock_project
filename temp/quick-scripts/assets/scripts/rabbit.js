(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/rabbit.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '43f5eCAophH1YeTUoAdGdHG', 'rabbit', __filename);
// scripts/rabbit.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // ������Ծ�߶�
        jumpHeight: 0,
        // ������Ծ����ʱ��
        jumpDuration: 0,
        //���̰��º����Ծ����ʱ��
        duration: 0,
        //��Ծ����
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        }

    },

    playJumpSound: function playJumpSound() {
        // �����������沥������
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setJumpAction: function setJumpAction() {
        // ��Ծ����
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // ������Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // �����ظ�
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    setOneJumpAction: function setOneJumpAction() {
        // ������Ծ����
        var callback = cc.callFunc(this.playJumpSound, this);
        // ��Ծ����
        var jumpUp = cc.moveBy(this.duration, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.duration, cc.v2(0, -200)).easing(cc.easeCubicActionOut());
        //����
        return cc.sequence(callback, jumpUp, jumpDown);
    },

    onKeyDown: function onKeyDown(event) {
        // set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.s:
                {
                    //ͣ��ԭ�ȵĶ���
                    this.node.stopAllActions();
                    this.node.setPosition(-360, -184);
                    this.timer = 0;
                    //��ʼ�¶���
                    this.node.runAction(this.setOneJumpAction());
                    break;
                };
        }
    },

    /**/
    onKeyUp: function onKeyUp(event) {
        // unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.s:
                {
                    //����released���ȴ�onKeyDown���������󣬻ָ�ԭ�ȶ���
                    this.scheduleOnce(function () {
                        this.node.stopAllActions();
                        this.node.setPosition(-360, -184);
                        this.node.runAction(this.setJumpAction());
                    }, this.duration * 1.6 - this.timer);
                    break;
                };
        };
    },


    onLoad: function onLoad() {
        //��ʱ��
        this.timer = 0;

        // ��ʼ����Ծ����
        this.node.runAction(this.setJumpAction());

        // ��ʼ�������������
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy: function onDestroy() {
        // ȡ�������������
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=rabbit.js.map
        
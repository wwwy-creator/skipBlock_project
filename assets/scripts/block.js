cc.Class({
    extends: cc.Component,

    properties: {
        color: {
            default: null,
            type: cc.Label,
        },
        //得分音乐
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
    },


    getRabbitDistance: function () {
        // 根据 rabbit 节点位置判断距离
        var rabbitPos = this.game2.rabbit.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    playScoreSound: function (){
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    
    onPicked: function () {
        //当兔子正确碰撞方块时
        if (this.game2.character.string == this.color.string) {
            // 得分音乐
            this.playScoreSound();
            this.game2.changeColor();
            // 然后销毁当前星星节点
            this.node.destroy();
            //加分
            this.game2.gainScore();
        }
        else {
            cc.director.loadScene("game3");
        }
    },

    update:function(dt){
        var node = this.node;
        if (node.x > -500) {
            node.x -= dt * 150;
        }
        else {
            this.node.destroy();
        };
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getRabbitDistance() < 60) {
            // 调用收集行为
            this.onPicked();
            return;
        }
    
    },

});

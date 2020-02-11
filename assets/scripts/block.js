cc.Class({
    extends: cc.Component,

    properties: {
        color: {
            default: null,
            type: cc.Label,
        },
        //�÷�����
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
    },


    getRabbitDistance: function () {
        // ���� rabbit �ڵ�λ���жϾ���
        var rabbitPos = this.game2.rabbit.getPosition();
        // ��������λ�ü�������֮�����
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    playScoreSound: function (){
        // �����������沥������
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    
    onPicked: function () {
        //��������ȷ��ײ����ʱ
        if (this.game2.character.string == this.color.string) {
            // �÷�����
            this.playScoreSound();
            this.game2.changeColor();
            // Ȼ�����ٵ�ǰ���ǽڵ�
            this.node.destroy();
            //�ӷ�
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
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getRabbitDistance() < 60) {
            // �����ռ���Ϊ
            this.onPicked();
            return;
        }
    
    },

});

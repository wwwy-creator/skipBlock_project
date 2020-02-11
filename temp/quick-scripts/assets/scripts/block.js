(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/block.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '386a59aqJ9AwYuJ6CiYO/Vi', 'block', __filename);
// scripts/block.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        color: {
            default: null,
            type: cc.Label
        },
        //�÷�����
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        }
    },

    getRabbitDistance: function getRabbitDistance() {
        // ���� rabbit �ڵ�λ���жϾ���
        var rabbitPos = this.game2.rabbit.getPosition();
        // ��������λ�ü�������֮�����
        var dist = this.node.position.sub(rabbitPos).mag();
        return dist;
    },

    playScoreSound: function playScoreSound() {
        // �����������沥������
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    onPicked: function onPicked() {
        //��������ȷ��ײ����ʱ
        if (this.game2.character.string == this.color.string) {
            // �÷�����
            this.playScoreSound();
            this.game2.changeColor();
            // Ȼ�����ٵ�ǰ���ǽڵ�
            this.node.destroy();
            //�ӷ�
            this.game2.gainScore();
        } else {
            cc.director.loadScene("game3");
        }
    },

    update: function update(dt) {
        var node = this.node;
        if (node.x > -500) {
            node.x -= dt * 150;
        } else {
            this.node.destroy();
        };
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getRabbitDistance() < 60) {
            // �����ռ���Ϊ
            this.onPicked();
            return;
        }
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
        //# sourceMappingURL=block.js.map
        
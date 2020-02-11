(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8bb57PAOCtOWYKW7QaLQsdE', 'game2', __filename);
// scripts/game2.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        //��������鶼�Ž�����
        block: {
            default: [],
            type: [cc.Prefab]
        },
        //���� �����ʱ����
        timeInterval: 0,
        //���ӽڵ�
        rabbit: {
            default: null,
            type: cc.Node
        },
        //����
        score: {
            default: null,
            type: cc.Label
        },
        //��
        character: {
            default: null,
            type: cc.Label
        }

    },

    createBlock: function createBlock() {
        // �ڳ���������һ���½ڵ�
        var index = Math.floor(Math.random() * 5);
        var newBlock = cc.instantiate(this.block[index]);
        // �������Ľڵ����ӵ� Canvas �ڵ�����
        this.node.addChild(newBlock);
        // �ڷ���������ݴ�game2���������
        newBlock.getComponent('block').game2 = this;
        this.timer = 0;
    },

    changeColor: function changeColor() {
        var textArr = ["red", "yellow", "pink", "green", "blue"];
        // �ڳ������������һ����ɫ
        var index = Math.floor(Math.random() * 5);
        this.character.string = textArr[index];
    },

    gainScore: function gainScore() {
        this.colorscore += 1;
        // ���� score Label ������
        this.score.string = 'Score: ' + this.colorscore;
    },

    onLoad: function onLoad() {
        //��ʱ��
        this.timer = 0;
        //����һ������
        this.createBlock();
        //character��ɫ
        this.changeColor();
        //����һ��ȫ�ֵķ�����������
        this.colorscore = 0;
    },

    update: function update(dt) {
        // ÿ֡���¼�ʱ��
        if (this.timer > this.timeInterval) {
            //����һ������
            this.createBlock();
            return;
        }
        this.timer += dt;
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
        //# sourceMappingURL=game2.js.map
        
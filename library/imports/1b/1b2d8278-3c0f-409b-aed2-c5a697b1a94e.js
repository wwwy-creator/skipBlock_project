"use strict";
cc._RF.push(module, '1b2d8J4PA9Am67SxaaXsalO', 'replay');
// scripts/replay.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        //������ϣ����������
        this.node.on('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    },

    onDestroy: function onDestroy() {
        // ȡ�����������
        this.node.off('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    }
});

cc._RF.pop();
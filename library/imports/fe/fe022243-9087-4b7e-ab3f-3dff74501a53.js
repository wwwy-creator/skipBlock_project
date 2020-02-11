"use strict";
cc._RF.push(module, 'fe022JDkIdLfqs/Pf90UBpT', 'play');
// scripts/play.js

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
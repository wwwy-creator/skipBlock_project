(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/replay.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b2d8J4PA9Am67SxaaXsalO', 'replay', __filename);
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
        //# sourceMappingURL=replay.js.map
        
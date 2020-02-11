(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/play.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fe022JDkIdLfqs/Pf90UBpT', 'play', __filename);
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
        //# sourceMappingURL=play.js.map
        
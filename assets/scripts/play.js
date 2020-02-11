cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {
        //加载完毕，监听鼠标点击
        this.node.on('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    },

    onDestroy () {
        // 取消鼠标点击监听
        this.node.off('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    },

});

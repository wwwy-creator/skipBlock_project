cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad: function () {
        //������ϣ����������
        this.node.on('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    },

    onDestroy () {
        // ȡ�����������
        this.node.off('mousedown', function (event) {
            cc.director.loadScene("game2");
        });
    },

});

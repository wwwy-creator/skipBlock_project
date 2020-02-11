cc.Class({
    extends: cc.Component,

    properties: {
        //��������鶼�Ž�����
        block: {
            default:[],
            type:[cc.Prefab],
        },
        //���� �����ʱ����
        timeInterval:0,
        //���ӽڵ�
        rabbit: {
           default: null,
           type:cc.Node
        },
        //����
        score: {
           default: null,
            type: cc.Label,
        },
        //��
        character:{
            default: null,
            type: cc.Label,
        },

    },
   
    createBlock: function () {
        // �ڳ���������һ���½ڵ�
        var index = Math.floor(Math.random() * 5);
        var newBlock=cc.instantiate(this.block[index]);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.addChild(newBlock);
        // �ڷ���������ݴ�game2���������
        newBlock.getComponent('block').game2 = this;
        this.timer = 0;
    },

    changeColor:function(){
        var textArr = ["red", "yellow", "pink", "green", "blue"];
        // �ڳ������������һ����ɫ
        var index = Math.floor(Math.random() * 5);
        this.character.string = textArr[index];
    },

    gainScore: function () {
        this.colorscore += 1;
        // ���� score Label ������
        this.score.string = 'Score: ' + this.colorscore;
    },

    onLoad: function () {
        //��ʱ��
        this.timer = 0;
        //����һ������
        this.createBlock();
        //character��ɫ
        this.changeColor();
        //����һ��ȫ�ֵķ�����������
      this.colorscore = 0;
    },

    update: function (dt) {
        // ÿ֡���¼�ʱ��
        if (this.timer > this.timeInterval) {
            //����һ������
            this.createBlock();
            return;
        }
        this.timer += dt;
    },

});

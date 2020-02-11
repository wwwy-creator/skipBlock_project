cc.Class({
    extends: cc.Component,

    properties: {
        //将五个方块都放进数组
        block: {
            default:[],
            type:[cc.Prefab],
        },
        //生成 方块的时间间隔
        timeInterval:0,
        //兔子节点
        rabbit: {
           default: null,
           type:cc.Node
        },
        //分数
        score: {
           default: null,
            type: cc.Label,
        },
        //字
        character:{
            default: null,
            type: cc.Label,
        },

    },
   
    createBlock: function () {
        // 在场景中生成一个新节点
        var index = Math.floor(Math.random() * 5);
        var newBlock=cc.instantiate(this.block[index]);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newBlock);
        // 在方块组件上暂存game2对象的引用
        newBlock.getComponent('block').game2 = this;
        this.timer = 0;
    },

    changeColor:function(){
        var textArr = ["red", "yellow", "pink", "green", "blue"];
        // 在场景中随机生成一个颜色
        var index = Math.floor(Math.random() * 5);
        this.character.string = textArr[index];
    },

    gainScore: function () {
        this.colorscore += 1;
        // 更新 score Label 的文字
        this.score.string = 'Score: ' + this.colorscore;
    },

    onLoad: function () {
        //计时器
        this.timer = 0;
        //生成一个方块
        this.createBlock();
        //character颜色
        this.changeColor();
        //定义一个全局的分数计量变量
      this.colorscore = 0;
    },

    update: function (dt) {
        // 每帧更新计时器
        if (this.timer > this.timeInterval) {
            //生成一个方块
            this.createBlock();
            return;
        }
        this.timer += dt;
    },

});

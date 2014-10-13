define(function(require) {
    var Operation = require("Operation");
    var extend = require("extend");
    /*var radius_num = Math.PI;
    var staticMethod = function() {
        console.log("the static method");
    };*/
    /**
     * Class Add
     * @param {[type]} num_1 [description]
     * @param {[type]} num_2 [description]
     */
    function Add(num_1, num_2) {
        Add.superclass.constructor.call(this, num_1, num_2);
    };
    extend(Add, Operation);
    /* 覆盖父类方法*/
    Add.prototype.getResult = function() {
        //return this.getNum1() + this.getNum2();
        return this.getNum1() + this.getNum2();
    };
    /**
     * Class Min
     * @param {[type]} num_1 [description]
     * @param {[type]} num_2 [description]
     */
    function Min(num_1, num_2) {
        Min.superclass.constructor.call(this, num_1, num_2);
    };
    extend(Min, Operation);
    /* 覆盖父类方法*/
    Min.prototype.getResult = function() {
        //return this.getNum1() + this.getNum2();
        return this.getNum1() - this.getNum2();
    };
    /**
     * Class Mul
     * @param {[type]} num_1 [description]
     * @param {[type]} num_2 [description]
     */
    function Mul(num_1, num_2) {
        Mul.superclass.constructor.call(this, num_1, num_2);
    };
    extend(Mul, Operation);
    /* 覆盖父类方法*/
    Mul.prototype.getResult = function() {
        //return this.getNum1() + this.getNum2();
        return this.getNum1() * this.getNum2();
    };
    /**
     * Class Div
     * @param {[type]} num_1 [description]
     * @param {[type]} num_2 [description]
     */
    function Div(num_1, num_2) {
        Div.superclass.constructor.call(this, num_1, num_2);
    };
    extend(Div, Operation);
    /* 覆盖父类方法*/
    Div.prototype.getResult = function() {
        //return this.getNum1() + this.getNum2();
        return this.getNum1() / this.getNum2();
    };    
    /* return class*/
    return {
        "Add":Add,
        "Min":Min,
        "Mul":Mul,
        "Div":Div
    };
});

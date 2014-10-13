define(function(require) {
    /*var radius_num = Math.PI;
    var staticMethod = function() {
        console.log("the static method");
    };*/
    var OperationMethods = require("OperationMethods");
    /* Class OperationSimpleFactory*/
    /* 简单工厂，使用单体就可以了*/
    var OperationSimpleFactory = {};
    OperationSimpleFactory.createOperate = function(operator) {
        var the_operation = null;
        switch (operator) {
            case "+":
                the_operation = new OperationMethods.Add();
                break;
            case "-":
                the_operation = new OperationMethods.Min();
                break;
            case "*":
                the_operation = new OperationMethods.Mul();
                break;
            case "/":
                the_operation = new OperationMethods.Div();
                break;
        }
        return the_operation;
    }

    /* return class*/
    return OperationSimpleFactory;
});

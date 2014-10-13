define(function(require) {
    /**
     * requires below
     */
    /* require jquery*/
    var $ = require("jquery");
    /* require extend*/
    var extend = require("extend");
    /* require Add*/
    //var Add = require("Add");

    var OperationSimpleFactory = require("OperationSimpleFactory");

    var the_operation_add = OperationSimpleFactory.createOperate("/");
    the_operation_add.setNum1(10);
    the_operation_add.setNum2(10);
    console.log(the_operation_add.getResult());
});

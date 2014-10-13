define(function(require) {
    /**
     * requires below
     */
    /* require jquery*/
    var $ = require("jquery");
    /* require extend*/
    var extend = require("extend");
    /* require OperationSimpleFactory*/
    var OperationSimpleFactory = require("OperationSimpleFactory");
    /* 数字键点击追加到Input里面*/
    var $input_result = $(".result");

    var num_1 = 0;
    var num_2 = 0;
    var clear_input = false;
    var operator = "+";
    /* bind event on the num buttons*/
    $(".nums button").each(function(index, ele) {
        $(ele).click(function(event) {
            if (clear_input) {
                $input_result.val("");
            }
            var input_last_val = $input_result.val();
            if (input_last_val.length < 15) {
                $input_result.val(input_last_val + $(this).html());
            }
            clear_input = false;
        });
    });
    /* when click the operator*/
    $(".operators button").click(function() {
        num_1 = $input_result.val();
        operator = $.trim($(this).html());
        $input_result.val("");
    });
    /* when click the equal button*/
    $(".operators .equal").click(function() {
        num_2 = $input_result.val();
        var the_operation = OperationSimpleFactory.createOperate(operator);
        //第一个操作数
        the_operation.setNum1(num_1);
        //第二个操作数
        the_operation.setNum2(num_2);
        $input_result.val(the_operation.getResult());
        clear_input = true;
    });
    /* when click clear button*/
    $(".clear").click(function() {
        $input_result.val("");
    });

});

define(function(require) {
    /*var radius_num = Math.PI;
    var staticMethod = function() {
        console.log("the static method");
    };*/
    /* Class Operation*/
    function Operation(num_1, num_2) {
            var num_1 = num_1;
            var num_2 = num_2;
            //私有方法
            var somePrivateMethod = function() {
                //  
            };
            /* getter and setter*/
            /* 特权方法*/
            this.getNum1 = function() {
                return parseInt(num_1);
            }
            this.setNum1 = function(num) {
                num_1 = num;
            }
            this.getNum2 = function() {
                return parseInt(num_2);
            }
            this.setNum2 = function(num) {
                num_2 = num;
            }
        }
        /* 公有方法*/
    Operation.prototype.getResult = function() {
        //console.log(0);
    };
    /* return class*/
    return Operation;
});

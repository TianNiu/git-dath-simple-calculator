/**
 * require config
 * path:模块(路径)注册
 * shim:为非标准模块添加依赖等
 * @type {Object}
 */
require.config({
        "paths": {
            "jquery": ["http://libs.baidu.com/jquery/1.9.1/jquery.min", "vendor/jquery-1.9.1.min"],
            /* 运算类*/
            "Operation": "main/Operation",
            /* 原生javascript继承方法,摘自JavaScript设计模式*/
            "extend": "helper/extend",
            "OperationMethods": "main/OperationMethods",
            "OperationSimpleFactory": "main/OperationSimpleFactory"
        }
    })
    // Load the main app module to start the app
requirejs(["main"]);

define(function(require) {
    /**
     * 接口类
     * @param {[type]} name    [description]
     * @param {[type]} methods [description]
     */
    var Interface = function(name, methods) {
        if (arguments.length != 2) {
            throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
        }

        this.name = name;
        this.methods = [];
        for (var i = 0, len = methods.length; i < len; i++) {
            if (typeof methods[i] !== 'string') {
                throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
            }
            this.methods.push(methods[i]);
        }
    };

    /**
     * Interface静态方法
     * @param  {[type]} object [description]
     * @return {[type]}        [description]
     */
    Interface.ensureImplements = function(object) {
        if (arguments.length < 2) {
            throw new Error("Function Interface.ensureImplements called with " +
                arguments.length + "arguments, but expected at least 2.");
        }

        for (var i = 1, len = arguments.length; i < len; i++) {
            var interface = arguments[i];
            if (interface.constructor !== Interface) {
                throw new Error("Function Interface.ensureImplements expects arguments " + "two and above to be instances of Interface.");
            }

            for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
                var method = interface.methods[j];
                if (!object[method] || typeof object[method] !== 'function') {
                    throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
                }
            }
        }
    };
    
    /* return Class Interface*/
    return Interface;

});

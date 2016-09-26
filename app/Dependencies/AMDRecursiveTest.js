/**
 * 
 * @author Aleksey
 */
define('AMDRecursiveTest', ['AMDRecursive2'], function (AMDRecursive2, ModuleName) {
    function module_constructor() {
        var self = this;
        
        self.execute = function(onSuccess, onFailure) {
            if (AMDRecursive2())
                onSuccess('AMD recursive require test passed');
            else
                onFailure('AMD recursive require test failed')  
        };
    }
    return module_constructor;
});

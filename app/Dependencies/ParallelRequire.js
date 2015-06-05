/**
 * @public
 * @author mg, ak
 * @constructor
 */
var d2 = 20;

function ParallelRequire() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (aOnSuccess) {
        var maxCount = 2;
        var cnt = 0;
        function success() {
            cnt++;
            if (cnt === maxCount)
                aOnSuccess ? aOnSuccess() : P.Logger.info('Passed');
        }
        
        for (var j = 0; j < maxCount; j++) {
            P.require(["Dependency", "Dependencies/plain-dependency.js"], function () {
                var dep = new Dependency();
                var autoDep = new AutoDependency();
                P.Logger.info("Variables from dependencies: " + (d1 + d2 + d3));
                if (d1 + d2 + d3 === 60) {
                    success();
                } else {
                    throw "Parallel dependent failed";
                }
            });
        }
    };
}

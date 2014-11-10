/**
 * 
 * @author mg
 * @constructor
 */
function Dependent() {
    var self = this, model = P.loadModel(this.constructor.name);

    self.execute = function () {
        P.require(["Dependency", "Dependencies/plain-dependency.js"], function () {
            var dep = new Dependency();
            var autoDep = new AutoDependency();
            P.Logger.info("Variables from dependencies: " + (d1 + d2 + d3));
            if(d1 + d2 + d3 !== 60){
                throw "Dependent failed";
            }
        });
    };
}

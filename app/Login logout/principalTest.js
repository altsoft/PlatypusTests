/* global P */

/**
 * 
 * @author mg
 * @stateless
 * @public 
 * @constructor
 */
function PrincipalTest() {
    var self = this, model = P.loadModel(this.constructor.name);

    this.testName = function () {
        return P.principal.name;
    };

    this.testHasRole = function (aRole) {
        return P.principal.hasRole(aRole);
    };

}

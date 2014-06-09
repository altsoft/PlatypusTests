/**
 * Module and function level security constraint
 * @name 133300884117270
 * @module
 * @rolesAllowed role1, role2
 * @author vv
 */

function ScureFunctionForm() {


    var self = this;


    /**
     * @rolesAllowed role3
     */
    self.test = function() {
        return "test";
    };

}
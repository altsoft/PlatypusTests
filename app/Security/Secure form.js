/**
 * @author vv
 * @name 133239639702802
 * @module
 * @rolesAllowed role1, role2
 */

function SecureForm() {

    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    self.test = function () {
        return "test";
    };

}
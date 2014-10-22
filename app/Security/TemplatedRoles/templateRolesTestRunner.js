/**
 * 
 * @author mg
 */
function TemplateRolesTestRunner() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function() {
        form.show();
    };

    form.btnTestIt.onActionPerformed = function(event) {
        var m = new P.ServerModule("TemplateRolesModule");
        m.testMethod(1);
        P.Logger.info("role1 is checked succefully and method has been called.");
        try {
            m.testMethod(10);
            P.Logger.info("role10 is checked unsuccefully and method has been called.");
        } catch (e) {
            P.Logger.info("role10 is checked succefully and method has not been called.");
        }
    };
}

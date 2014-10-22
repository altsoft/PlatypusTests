/**
 * 
 * @author mg
 * @public 
 * @constructor
 */
function TemplateRolesModule() {
    var self = this, model = P.loadModel(this.constructor.name);

    /**
     * @rolesAllowed role$0
     */
    self.testMethod = function(aArg){
        P.Logger.info('testMethod call is done. aArg: ' + aArg);
    };
}

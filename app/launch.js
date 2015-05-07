/**
 * 
 * @author mg
 * @rolesAllowed role1
 */
function Launcher() {
    var self = this
            , form = P.loadForm(this.constructor.name);

    self.show = function () {
        form.show();
    };

    form.btnRun.onActionPerformed = function (event) {
        P.require('./atest.js', function(){
        }, function(e){
            P.Logger.severe(e);
        });
    };
}

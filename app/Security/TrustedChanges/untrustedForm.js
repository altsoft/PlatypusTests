/**
 * 
 * @author mg
 */
function UntrustedForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    
    form.button1.onActionPerformed = function(event) {
        model.queryWithRoles.requery();
    };
    
    form.button.onActionPerformed = function(event) {
        var proxy = new P.ServerModule("TrustedModule");
        proxy.tormentData(function(){});
    };
}

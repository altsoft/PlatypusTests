/**
 * 
 * @author mg
 */
function FontsDataTest() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    
    model.requery();
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}

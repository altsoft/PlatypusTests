/**
 * 
 * @author mg
 */
function design_binding_test() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function() {
        form.show();
    };

    self.showOn = function(aElementOrId) {
        form.view.showOn(aElementOrId);
    };
    self.showDateOn = function(aElementOrId) {
        form.modelDate.showOn(aElementOrId);
    };
    
    model.requery();
    
    form.modelSpin.onSelect = function(aEditor){
    };
    
    form.btnSelectionTest.onActionPerformed = function(event) {
        var selected = form.modelGrid.selected;
        for (var s in selected) {
            P.Logger.info(selected[s].MDENT_NAME);
        }
        model.appElements.requery();
    };
    form.btnSelectAll.onActionPerformed = function(event) {
        model.appElements.forEach(function(aElement){
            form.modelGrid.select(aElement);
        });
    };
    form.btnUnselectAll.onActionPerformed = function(event) {
        model.appElements.forEach(function(aElement){
            form.modelGrid.unselect(aElement);
        });
    };
    form.btnMakeVisible.onActionPerformed = function(event) {
        model.appElements.forEach(function(aElement){
            form.modelGrid.makeVisible(aElement, true);
        });
    };
}

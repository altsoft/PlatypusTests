/**
 * 
 * @author mg
 */
function FirstForm() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    form.button.onActionPerformed = function(event){
        P.Logger.info(form.button.text);
    };
}

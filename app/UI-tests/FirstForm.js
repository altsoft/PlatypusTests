/**
 * 
 * @author mg
 */
function FirstForm() {
    var self = this;
    var model = P.loadModel(this.constructor.name);
    var form = P.loadForm(this.constructor.name, model);
    //var f=0;
    self.show = function(){
        form.show();
    };
    
    form.button.onActionPerformed = function(event){
        P.Logger.info(form.button.text);
    };
}

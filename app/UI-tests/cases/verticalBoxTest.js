/**
 * 
 * @author mg
 */
function VerticalBoxTest() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    var i=0;
    form.button.onActionPerformed = function(event) {
        var btn = new P.Button('' + ++i);
        btn.height = 70;
        form.panel.add(btn);
    };
}

/**
 * 
 * @author mg
 */
function combo_from_scratch_test_1() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    // TODO : place your code here
}
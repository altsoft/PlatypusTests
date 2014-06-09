/**
 * 
 * @author mg
 */
function tabs_cards_selection_events_tests() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    // TODO : place your code here
}

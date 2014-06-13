/**
 * 
 * @author mg
 */
function component_events_test() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function() {
        form.show();
    };
    
    function logEvent(event){
        P.Logger.info(event.constructor.name + ' on ' + event.source.name);
    }
    
    function register(comp){
        var f = logEvent;
        comp.onActionPerformed = f;
        //
        comp.onMouseExited = f;
        comp.onMouseClicked = f;
        comp.onMousePressed = f;
        comp.onMouseReleased = f;
        comp.onMouseEntered = f;
        comp.onMouseWheelMoved = f;
        comp.onMouseDragged = f;
        comp.onMouseMoved = f;
        //
        comp.onComponentResized = f;
        comp.onComponentMoved = f;
        comp.onComponentShown = f;
        comp.onComponentHidden = f;
        comp.onComponentAdded = f;
        comp.onComponentRemoved = f;
        //
        comp.onFocusGained = f; 
        comp.onFocusLost = f;
        //
        comp.onKeyTyped = f;
        comp.onKeyPressed = f;
        comp.onKeyReleased = f;
    }
    
    form.view.children.forEach(function(aComp){
        register(aComp);
    });
}

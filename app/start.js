/**
 * Do not edit this file manually, it will be overwritten by
 * Platypus Application Designer.
 */
// this === global
if(!this.P)
    this.P = {};
P.ready = function() {
    P.require(['extra_fields_insert_update'], function(){
        var m = new extra_fields_insert_update();
        m.execute();
    }, function(e){
        P.Logger.severe(e);
    });
};

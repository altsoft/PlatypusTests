/**
 * 
 * @author mg
 * @stateless
 * @public 
 * @constructor
 */
function TrustedModule() {
    var self = this, model = P.loadModel(this.constructor.name);
 
    this.tormentData = function(){
        model.queryWithRoles.requery(function(){
            model.queryWithRoles.push({NAME: "some test name"});
            var inserted = model.queryWithRoles.cursor.id;
            model.save(function(){
                model.queryWithRoles.deleteRow(model.queryWithRoles.cursor);
                model.save();
            });
        });
    };
}

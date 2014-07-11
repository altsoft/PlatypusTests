/**
 * 
 * @author mg
 * @name ORM_Test_View
 */
function ORM_Test_View() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function() {
        form.show();
    };

    form.button.onActionPerformed = function(event) {
        //var ormTest = new ORM_Relations_Test();
        //var ormTest = new Load_Entity_Test();
        //var ormTest = new Create_Entity_Test();
        //var ormTest = P.Modules.create('ModelAPI');
        var ormTest = new ModelAPI();
        ormTest.execute();
    };
}
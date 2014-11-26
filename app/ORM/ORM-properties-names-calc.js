/**
 * 
 * @author mg
 * @constructor
 */
function ORM_properties_names_calc() {
    var self = this
            , model = P.loadModel(this.constructor.name);

    self.execute = function () {
        model.requery(function () {
            model.ORM_properties_names_test.forEach(function (anElement) {
                P.Logger.info("anElement[0]: " + anElement[0]);
                P.Logger.info("anElement.cName: " + anElement.cName);
                P.Logger.info("anElement.cAdress: " + anElement.cAdress);
                P.Logger.info("anElement.cId: " + anElement.cId);
            });
        });
    };
}

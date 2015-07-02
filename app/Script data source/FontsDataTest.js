/**
 * 
 * @author mg
 */
function FontsDataTest() {
    var self = this
            , model = P.loadModel(this.constructor.name);

    self.execute = function(aOnSuccess){
//        model.fontsData.requery(function () {
//            P.Logger.info("model.fontsData.length: " + model.fontsData.length);
//            if (model.fontsData.length !== 3)
//                throw "fontsData violation 0";
//            P.Logger.info("FontsDataTest passed");
//            model.fontsData.params.familyName = 'Arial';
//            model.fontsData.requery(function () {
//                P.Logger.info("model.fontsData.length: " + model.fontsData.length);
//                if (model.fontsData.length !== 1)
//                    throw "fontsData violation 1";
//                P.Logger.info("model.fontsData[0].familyName: " + model.fontsData[0].familyName);
//                if (model.fontsData[0].familyName !== 'Arial')
//                    throw "fontsData violation 2";
//                model.fontsData.params.familyName = null;
//                model.fontsData.requery(function () {
//                    P.Logger.info("model.fontsData.length: " + model.fontsData.length);
//                    if (model.fontsData.length !== 3)
//                        throw "fontsData violation 3";
//                    aOnSuccess();
//                }, function (e) {
//                    P.Logger.severe(e);
//                });
//            }, function (e) {
//                P.Logger.severe(e);
//            });
//        }, function (e) {
//            P.Logger.severe(e);
//        });
    };
}

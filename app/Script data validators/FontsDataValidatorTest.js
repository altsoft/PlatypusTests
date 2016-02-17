/**
 * 
 * @author mg
 */
function FontsDataValidatorTest() {
    var self = this
            , model = P.loadModel(this.constructor.name);

    self.execute = function (aOnSuccess) {
        model.fontsData.requery(function () {
            model.fontsData[1].familyName = 'edited';
            model.fontsData[1].size = 45686;
            model.save(function (aChangedCount) {
                if (fontsValidatorCalls <= 0)
                    throw "fontsValidatorCalls violation";
                if (aChangedCount !== 1)
                    throw "aChangedCount violation";
                aOnSuccess();
            }, function (e) {
                model.revert();
                throw "FontsDataValidatorTest failed. " + e;
            });
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}

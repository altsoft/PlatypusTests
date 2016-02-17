/**
 * 
 * @author mg
 */
function FontsDataValidatorTestView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };
    form.btnTestIt.enabled = false;
    model.fontsData.requery(function () {
        form.btnTestIt.enabled = true;
    });

    form.btnTestIt.onActionPerformed = function (event) {
        model.fontsData[1].familyName = 'edited';
        model.fontsData[1].size = 45686;
        model.save(function (aChangedCount) {
            if (fontsValidatorCalls <= 0)
                throw "fontsValidatorCalls violation";
            if (aChangedCount !== 1)
                throw "aChangedCount violation";
            P.Logger.info("FontsDataValidatorTest passed");
        }, function (e) {
            model.revert();
            throw "FontsDataValidatorTest failed. " + e;
        });
    };

    self.execute = function () {
        model.fontsData.requery(function () {
            form.btnTestIt.onActionPerformed();
        }, function(e){P.Logger.severe(e);});
    };
}

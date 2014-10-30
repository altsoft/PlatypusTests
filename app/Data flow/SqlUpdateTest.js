/**
 * 
 * @author mg
 */
function SqlUpdateTest() {
    var NEW_RECORD_ID = 4125;
    var NEW_RECORD_NAME_G = 'sql updated gname';
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    form.btnTest.onActionPerformed = function (event) {
        model.ambigousChanges.requery(function () {
            if (model.ambigousChanges.length === 0)
                throw 'ambigousChanges.length violation';
            model.ambigousChanges.push({gid: NEW_RECORD_ID});
            model.save(function () {
                model.sqlUpdate.params.gid = NEW_RECORD_ID;
                model.sqlUpdate.params.gname = NEW_RECORD_NAME_G;
                model.sqlUpdate.executeUpdate(function () {
                    model.ambigousChanges.requery(function () {
                        var found = model.ambigousChanges.find(model.ambigousChanges.schema.gid, NEW_RECORD_ID);
                        if (!Array.isArray(found))
                            throw 'Array.isArray violation 1';
                        if (found.length !== 1)
                            throw 'found.length violation 1';
                        var saved = found[0];
                        if (saved.gid !== NEW_RECORD_ID)
                            throw 'saved.gid violation';
                        if (saved.gname !== NEW_RECORD_NAME_G)
                            throw 'saved.gname violation';
                    }, function (e) {
                        P.Logger.severe(e);
                    });
                }, function (e) {
                    P.Logger.severe(e);
                });
            }, function (e) {
                P.Logger.severe(e);
            });
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}

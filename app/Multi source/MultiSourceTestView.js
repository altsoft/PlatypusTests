/**
 * 
 * @author mg
 */
function MultiSourceTestView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    form.button.onActionPerformed = function (event) {
        model.requery(function () {
            if (model.dataEAS.length !== 0) {
                throw "MultiSourceTest. dataEAS violoation 1";
            }
            if (model.dataHR.length !== 0) {
                throw "MultiSourceTest. dataHR violoation 1";
            }
            var inserted = {addr: "addr1", entries: 4, modified: new Date()};
            model.dataEAS.push(inserted);
            model.dataHR.push(inserted);
            model.save(function () {
                P.Logger.info("Commit succeded 1");
                model.requery(function () {
                    if (model.dataEAS.length !== 1) {
                        throw "MultiSourceTest. dataEAS violoation 2";
                    }
                    if (model.dataHR.length !== 1) {
                        throw "MultiSourceTest. dataHR violoation 2";
                    }
                    model.dataEAS.splice(0, model.dataEAS.length);
                    model.dataHR.splice(0, model.dataHR.length);
                    model.save(function () {
                        P.Logger.info("Commit succeded 2");
                        model.requery(function () {
                            if (model.dataEAS.length !== 0) {
                                throw "MultiSourceTest. dataEAS violoation 3";
                            }
                            if (model.dataHR.length !== 0) {
                                throw "MultiSourceTest. dataHR violoation 3";
                            }
                            P.Logger.info("MultiTest passed");
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
        }, function (e) {
            P.Logger.severe(e);
        });
    };
}

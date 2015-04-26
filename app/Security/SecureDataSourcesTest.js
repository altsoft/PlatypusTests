/**
 * 
 * @author Andrew
 */
function SecureDataSourcesTest() {
    var self = this
            , model = P.loadModel(this.constructor.name);

    self.execute = function (aOnSuccess) {
        secureTest(aOnSuccess);
        secureReadTest(aOnSuccess);
        secureReadWriteTest(aOnSuccess);
    };

    function secureReadTest(aOnSuccess) {
        model.dsSecureRead.requery(function () {
            model.dsSecureRead.push({
                customer_name: "1",
                customer_address: "22"
            });
            model.save(function () {
                model.dsSecureRead.requery(function () {
                    if (model.dsSecureRead.length < 1) {
                        throw "Failed to insert";
                    } else
                        aOnSuccess();
                }, function (error) {
                    throw error;
                });
            });
        });
    }
    ;

    function secureReadWriteTest(aOnSuccess) {
        model.dsSecureWrite.requery(function () {
            model.dsSecureWrite.push({
                customer_name: "5",
                customer_address: "666666"
            });
            model.save(function () {
                model.dsSecureWrite.requery(function () {
                    if (model.dsSecureWrite.length < 1) {
                        throw "Failed to insert";
                    } else
                        aOnSuccess();
                }, function (error) {
                    throw error;
                });
            });
        });
    }
    ;

    function secureTest(aOnSuccess) {
        model.dsSecure.requery(function () {
            model.dsSecure.push({
                customer_name: "3",
                customer_address: "4444"
            });
            model.save(function () {
                model.dsSecure.requery(function () {
                    if (model.dsSecure.length < 1) {
                        throw "Failed to insert";
                    } else
                        aOnSuccess();
                }, function (error) {
                    throw error;
                });
            });
        });
    }
}

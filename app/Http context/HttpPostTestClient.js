/**
 * 
 * @author Andrew
 */
function HttpPostTestClient() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    model.requery(function () {
    });

    form.button.onActionPerformed = function (event) {
        self.execute();
    };
    
    self.execute = function(aOnComplete){
        var req = new HTTPRequest();
        req.module = 'HttpPostTestServer';
        req.method = 'test';
        req.post("111", function(aRes) {
            if (aRes !== "111") 
                throw "Error! Response is not equal to request";
            else
                aOnComplete();
        }, function(e) {
            throw "Error in post query. Server response: " + e;
        });
    };
}

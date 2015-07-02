/**
 * 
 * @author Andrew
 */
function HttpContextTestView_1() {
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
    
    self.execute = function(){
        var req = new HTTPRequest();
        req.module = 'HttpPostTestServer';
        req.method = 'test';
        req.post("111", function(aRes) {
            if (aRes !== "111") 
                throw "Error! Response in not equal to request";
        }, function(e) {
            throw "Error in post query. Server response: " + e;
        });
    };
}

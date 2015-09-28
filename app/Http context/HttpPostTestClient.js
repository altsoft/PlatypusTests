/**
 * 
 * @author Andrew, Alexey
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
        var jCount = 0;
        function finished() {
            jCount++;
            if (jCount === 5)
                aOnComplete();
        }
        var req0 = new HTTPRequest();        
        req0.module = 'HttpPostTestServer';
        req0.method = 'simplePostTest';
        req0.post("111", function(aRes) {
            if (aRes !== "ok!") 
                throw "simplePostTest. Error! Response is wrong!";
            else {
                P.Logger.info("simplePostTest - passed");
                finished();
            }
        }, function(e) {
            throw "simplePostTest. Error in post query. Server response: " + e;
        });
        
        var req1 = new HTTPRequest();
        req1.module = 'HttpPostTestServer';
        req1.method = 'testBody';
        req1.post("111", function(aRes) {
            if (aRes !== "111") 
                throw "testBody. Error! Response is not equal to request";
            else {
                P.Logger.info("testBody - passed");
                finished();
            }
        }, function(e) {
            throw "testBody. Error in post query. Server response: " + e;
        });
        
        var req2 = new HTTPRequest();
        req2.restMethod = 'restSimpleTest';
        req2.post('', function(aRes) {
            if (aRes !== "ok") 
                throw "restSimleTest. Error! Wrong responce from server.";
            else {
                P.Logger.info("restSimleTest - passed");
                finished();
            }
        }, function(e) {
            throw "restSimleTest. Error in rest POST query. Server response: " + e;
        });
        
        var req3 = new HTTPRequest();
        req3.restMethod = 'restUPCASETest';
        req3.post('', function(aRes) {
            if (aRes !== "ok") 
                throw "restUPCASETest. Error! Wrong responce from server.";
            else {
                P.Logger.info("restUPCASETest - passed");
                finished();
            }
        }, function(e) {
            throw "restUPCASETest. Error in rest POST query. Server response: " + e;
        });
        
        var req4 = new HTTPRequest();
        req4.restMethod = 'restParamsTest';
        req4.post({p1: 10, p2: 'test'}, function(aRes) {
            if (aRes.p2 !== "test" && aRes.p1 !== 10) 
                throw "restParamsTest. Error! Wrong responce from server.";
            else {
                P.Logger.info("restParamsTest - passed");
                finished();
            }
        }, function(e) {
            throw "restParamsTest. Error in rest POST query. Server response: " + e;
        });
    };
}

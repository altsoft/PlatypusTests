/**
 * 
 * @author mg
 */
function StoredProcedureTestClient() {

    this.execute = function (aOnSuccess) {
        var proxy = new P.ServerModule('StoredProcedureCallerTest');
        proxy.execute(aOnSuccess);
    };
}
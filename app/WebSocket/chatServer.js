/**
 * 
 * @author user
 * @public
 */
function chatServer() {
    var self = this;
    var sessions = {};

    this.onopen = function (session) {
        sessions[session.id] = session;
    };

    this.onclose = function (evt) {
        delete sessions[evt.id];
    };
    this.onmessage = function (evt) {
        for(var s in sessions){
            sessions[s].send(evt.data);
        }
    };
    this.onerror = function (aError) {
    };
}


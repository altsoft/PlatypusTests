/**
 * Do not edit this file manually, it will be overwritten by
 * Platypus Application Designer.
 */
// this === global
(function () {
    function ready() {
        P.cacheBust = true;
        P.require('HttpPostTestClient', function(){
            var m = new HttpPostTestClient();
            m.show();
        }, function(e){
            P.Logger.severe(e);
            if(document){
                var messageParagraph = document.createElement('p');
                document.body.appendChild(messageParagraph);
                messageParagraph.innerHTML = 'An error occured while require(\'HttpPostTestClient\'). Error: ' + e;
                messageParagraph.style.margin = '10px';
                messageParagraph.style.fontFamily = 'Arial';
                messageParagraph.style.fontSize = '14pt';
            }
        });
    }
    if(!this.P) {
        this.P = {};
        P.ready = ready;
    } else {
        ready();
    }
})();

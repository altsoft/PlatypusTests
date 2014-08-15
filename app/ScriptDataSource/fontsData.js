/**
 * Datasource module is stateless data fetch/apply provider.
 * @author mg
 * @constructor 
 */
function fontsData() {
    var self = this, model = P.loadModel(this.constructor.name);
 
    this.schema = [ 
        {name: "familyName", entity: "fonts", description: "Family name of the font", type: String, key: true},
        {name: "style", entity: "fonts", description: "Style of the font", type: String, ref:{property: "familyName", entity: "fonts"}},
        {name: "size", entity: "fonts", description: "Size of the font", type: Number}
    ];

    /**
     * Method invoked by platypus runtime in data fetching purposes.
     * @param aParams Object, with properties as defined in this module's model's parameters.
     * Properties values are setted by platypus runtime engine.
     */
    this.fetch = function(aParams) {
        return [
            {familyName: "Arial", style: 'normal', size: 12},
            {familyName: "Sans", style: "bold", size: 14},
            {familyName: "Times", style: "italic", size: 10}
        ];
    };

    /**
     * Method invoked by platypus runtime in data applying purposes.
     * @param aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     */
    this.apply = function(aLog) {
        P.Logger.info("fontsData. aLog.length: " + aLog.length + ";");
        for(var i = 0; i < aLog.length; i++) {
            var change = aLog[i];
            change.consume();
            var data = change.data;
            var keys = change.keys;
            var type = change.type;
            type = null;
        };
    };

}

/**
 * Datasource module is stateless data fetch/apply provider.
 * @author mg
 * @constructor
 */
function fontsData() {
    var self = this, model = P.loadModel(this.constructor.name);

    this.schema = [
        {name: "familyName", entity: "fonts", description: "Family name of the font", type: String, key: true},
        {name: "style", entity: "fonts", description: "Style of the font", type: String, ref: {property: "familyName", entity: "fonts"}},
        {name: "size", entity: "fonts", description: "Size of the font", type: Number}
    ];

    this.params = [
        {name: "familyName", type: String}
    ];

    /**
     * Method invoked by platypus runtime in data fetching purposes.
     * @param aParams Object, with properties as defined in this module's model's parameters.
     * Properties values are setted by platypus runtime engine.
     */
    this.fetch = function (aParams, aOnSuccess, aOnFailure) {
        var data;
        if (aParams.familyName === 'Arial') {
            data = [
                {familyName: "Arial", style: 'normal', size: 12},
            ];
        } else {
            data = [
                {familyName: "Arial", style: 'normal', size: 12},
                {familyName: "Sans", style: "bold", size: 14},
                {familyName: "Times", style: "italic", size: 10}
            ];
        }
        if (aOnSuccess) {
            aOnSuccess(data);
            return null;
        } else {
            return data;
        }
    };

    /**
     * Method invoked by platypus runtime in data applying purposes.
     * @param aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     */
    this.apply = function (aLog, aOnSuccess, aOnFailure) {
        P.Logger.info("fontsData. aLog.length: " + aLog.length + ";");
        var entities = {};
        for (var i = 0; i < aLog.length; i++) {
            var change = aLog[i];
            var data = change.data;
            var keys = change.keys;
            var type = change.type;
            type = null;
            entities[change.entity] = 1;
        }
        if(aOnSuccess)
            aOnSuccess(Object.keys(entities).length);
    };

}

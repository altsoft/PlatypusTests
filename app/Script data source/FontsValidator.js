/**
 * Validator module checks changes made by application on client or server side.
 * Validator module can validate changes made in context of script and relational datasources.
 * @author mg
 * @constructor
 * @validator fontsData
 */ 
function fontsValidator() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    /**
     * Method for validating of changes log to be applied within a particular datasources.
     * @param {Array} aLog Array of changes - log of changes made by clients or server side data driven code to be applied.
     * @param {String} aDatasource Datasource name mentioned in @validator annotation (relational datasource or script datasource module name).
     * @returns {Boolean} False if you whant to stop validating process (e.g. break validators chain), nothing or true otherwise.
     * @throws An exception if validation fails. 
     */
    this.validate = function (aLog, aDatasource, aOnSuccess, aOnFailure) {
        P.Logger.info("fontsValidator. aLog.length: " + aLog.length + "; aDatasource: " + aDatasource + ";");
        fontsValidatorCalls++;
        if(aOnSuccess)
            aOnSuccess();
    };
}

var fontsValidatorCalls = 0;
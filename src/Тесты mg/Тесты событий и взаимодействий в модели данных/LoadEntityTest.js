/**
 * 
 * @author mg
 * @name Load_Entity_Test
 */

function Load_Entity_Test() {

    var self = this;

    var loaded = self.model.loadEntity("_24832514140608864");
    if (loaded == null)
        throw "entity hasn't been created";
    if (loaded.md == null)
        throw "entity's .md is not accessible";

    loaded.requery(function() {
        if (loaded.MDENT_NAME == null)
            throw "entity's .MDENT_NAME is not accessible";
        if (loaded.MDENT_TYPE == null)
            throw "entity's .MDENT_TYPE is not accessible";
        Logger.info("loaded.length: " + loaded.length);
        if (self.onSuccess)
            self.onSuccess(loaded.length);
    });
// include save tests
// include leaks tests
// include right and mad use cases of model's entities in constructor
}
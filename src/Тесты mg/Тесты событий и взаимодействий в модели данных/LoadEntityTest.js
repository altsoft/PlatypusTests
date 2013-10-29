/**
 * 
 * @author mg
 * @name Load_Entity_Test
 */
var loaded = model.loadEntity("_24832514140608864");
if(loaded == null)
    throw "entity hasn't been created";
if(loaded.md == null)
    throw "entity's .md is not accessible";
loaded.requery(function(){
    if(loaded.MDENT_NAME == null)
        throw "entity's .MDENT_NAME is not accessible";
    if(loaded.MDENT_TYPE == null)
        throw "entity's .MDENT_TYPE is not accessible";
    Logger.info("loaded.length: " + loaded.length);
});
// inslude save tests
// inslude leaks tests
// inslude right and mad use cases of model's entities in constructor


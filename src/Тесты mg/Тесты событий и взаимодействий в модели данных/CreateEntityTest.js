/**
 * 
 * @author mg
 * @name Create_Entity_Test
 */
var created = model.createEntity("select * from mtd_entities");
if(created == null)
    throw "entity hasn't been created";
if(created.md == null)
    throw "entity's .md is not accessible";
created.requery(function(){
    if(created.MDENT_NAME == null)
        throw "entity's .MDENT_NAME is not accessible";
    if(created.MDENT_TYPE == null)
        throw "entity's .MDENT_TYPE is not accessible";
    Logger.info("created.length: " + created.length);
});
// include save tests
// include leaks tests
// include right and mad use cases of model's entities in constructor

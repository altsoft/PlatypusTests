/**
 * 
 * @author mg
 * @name Create_Entity_Test
 */
function Create_Entity_Test() {
    var self = this,
            model = P.loadModel(this.constructor.name);
    var created = model.createEntity("select * from mtd_entities");
    if (created == null)
        throw "entity hasn't been created";
    if (created.schema == null)
        throw "entity's .schema is not accessible";
    created.requery(function() {
        if (created.cursor.mdent_name == null)
            throw "entity's .cursor.MDENT_NAME is not accessible";
        if (created.cursor.mdent_type == null)
            throw "entity's .cursor.MDENT_TYPE is not accessible";
        P.Logger.info("created.length: " + created.length);
    });
// include save tests
// include leaks tests
// include right and mad use cases of model's entities in constructor
}
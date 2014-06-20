/**
 * 
 * @author mg
 * @constructor
 */ 
function ModelAPI() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function() {
        P.Logger.info("model.params.length: " + model.params.length);
        P.Logger.info("model.params: " + model.params);
        P.Logger.info("model.params.svalue: " + model.params.svalue);
        P.Logger.info("model.params.nvalue: " + model.params.nvalue);
        P.Logger.info("model.params.dvalue: " + model.params.dvalue);
        model.params.nvalue = 90;
        model.params.svalue = '-90-';
        model.params.dvalue = new Date();
        P.Logger.info("model.params: " + model.params);
        P.Logger.info("model.params.svalue: " + model.params.svalue);
        P.Logger.info("model.params.nvalue: " + model.params.nvalue);
        P.Logger.info("model.params.dvalue: " + model.params.dvalue);
        P.Logger.info("model.params[0]: " + model.params[0]);
        P.Logger.info("model.params[1]: " + model.params[1]);
        P.Logger.info("model.params[2]: " + model.params[2]);
        
        P.Logger.info("model.params.schema: " + model.params.schema);
        P.Logger.info("model.params.schema.length: " + model.params.schema.length);
        P.Logger.info("model.params.schema.nvalue: " + model.params.schema.nvalue);
        P.Logger.info("model.params.schema.svalue: " + model.params.schema.svalue);
        P.Logger.info("model.params.schema.dvalue: " + model.params.schema.dvalue);
        P.Logger.info("model.params.schema[0]: " + model.params.schema[0]);
        P.Logger.info("model.params.schema[1]: " + model.params.schema[1]);
        P.Logger.info("model.params.schema[2]: " + model.params.schema[2]);
        P.Logger.info("model.params.schema.nvalue.name: " + model.params.schema.nvalue.name);
        P.Logger.info("model.params.schema.svalue.name: " + model.params.schema.svalue.name);
        P.Logger.info("model.params.schema.dvalue.name: " + model.params.schema.dvalue.name);
        P.Logger.info("model.params.schema.nvalue.pk 1: " + model.params.schema.nvalue.pk);
        model.params.schema.nvalue.pk = true;
        P.Logger.info("model.params.schema.nvalue.pk 2: " + model.params.schema.nvalue.pk);
        P.Logger.info("model.params.cursor.nvalue: " + model.params.cursor.nvalue);        
        P.Logger.info("model.params.cursor.svalue: " + model.params.cursor.svalue);        
        P.Logger.info("model.params.cursor.dvalue: " + model.params.cursor.dvalue);        
        P.Logger.info("model.params.cursor[0]: " + model.params.cursor[0]);        
        P.Logger.info("model.params.cursor[1]: " + model.params.cursor[1]);        
        P.Logger.info("model.params.cursor[2]: " + model.params.cursor[2]);        
        P.Logger.info("model.params.filter: " + model.params.filter);        
        P.Logger.info("model.params.map: " + model.params.map);        
        P.Logger.info("model.params.reduce: " + model.params.reduce);        
        P.Logger.info("model.params.slice: " + model.params.slice);        
        P.Logger.info("model.params.splice: " + model.params.splice);        
        P.Logger.info("model.params.push: " + model.params.push);        
        P.Logger.info("model.params.pop: " + model.params.pop);        
        P.Logger.info("model.params.shift: " + model.params.shift);        
        P.Logger.info("model.params.unshift: " + model.params.unshift);        
        P.Logger.info("model.params instanceof Array: " + (model.params instanceof Array));     
        P.Logger.info("model.params instanceof P.ApplicationDbParametersEntity: " + (model.params instanceof P.ApplicationDbParametersEntity));        
    };
}

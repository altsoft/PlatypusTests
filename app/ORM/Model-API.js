/**
 * 
 * @author mg
 * @constructor
 */
function ModelAPI() {
    var self = this, model = P.loadModel(this.constructor.name);

    function testParams() {
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
        P.Logger.info("model.params.pop: " + model.params.pop);
        P.Logger.info("model.params.push: " + model.params.push);
        P.Logger.info("model.params.shift: " + model.params.shift);
        P.Logger.info("model.params.unshift: " + model.params.unshift);
        P.Logger.info("model.params instanceof Array: " + (model.params instanceof Array));
        P.Logger.info("model.params instanceof P.ApplicationDbParametersEntity: " + (model.params instanceof P.ApplicationDbParametersEntity));
    }

    function testArrayLike() {
        P.Logger.info("model.testData: " + model.testData);
        P.Logger.info("model.testData.length: " + model.testData.length);
        if (model.testData.length === 0) {
            if (model.testData[0] || model.testData[1] || model.testData[2])
                throw "model.testData[0 | 1 | 2] must be undefined while data is empty";
        } else {
            if (!model.testData[0] || !model.testData[1] || !model.testData[2])
                throw "model.testData[0 | 1 | 2] must present while data present";
            P.Logger.info("model.testData[0]: " + model.testData[0]);
            P.Logger.info("model.testData[1]: " + model.testData[1]);
            P.Logger.info("model.testData[2]: " + model.testData[2]);
        }
        P.Logger.info("model.testData.schema: " + model.testData.schema);
        P.Logger.info("model.testData.schema.length: " + model.testData.schema.length);
        P.Logger.info("model.testData.schema.MDENT_ID: " + model.testData.schema.MDENT_ID);
        P.Logger.info("model.testData.schema.MDENT_NAME: " + model.testData.schema.MDENT_NAME);
        P.Logger.info("model.testData.schema.MDENT_TYPE: " + model.testData.schema.MDENT_TYPE);
        P.Logger.info("model.testData.schema[0]: " + model.testData.schema[0]);
        P.Logger.info("model.testData.schema[1]: " + model.testData.schema[1]);
        P.Logger.info("model.testData.schema[2]: " + model.testData.schema[2]);
        P.Logger.info("model.testData.schema.MDENT_ID.name: " + model.testData.schema.MDENT_ID.name);
        P.Logger.info("model.testData.schema.MDENT_NAME.name: " + model.testData.schema.MDENT_NAME.name);
        P.Logger.info("model.testData.schema.MDENT_TYPE.name: " + model.testData.schema.MDENT_TYPE.name);
        P.Logger.info("model.testData.schema.MDENT_ID.pk 1: " + model.testData.schema.MDENT_ID.pk);
        model.testData.schema.MDENT_ID.pk = false;
        P.Logger.info("model.testData.schema.MDENT_ID.pk 2: " + model.testData.schema.MDENT_ID.pk);
        if (model.testData.length === 0) {
            if (model.testData.cursor != null)
                throw "model.testData.cursor must be null while data is empty";
        } else {
            if (model.testData.cursor == null)
                throw "model.testData.cursor must not be null while data present";
            P.Logger.info("model.testData.cursor.MDENT_ID: " + model.testData.cursor.MDENT_ID);
            P.Logger.info("model.testData.cursor.MDENT_NAME: " + model.testData.cursor.MDENT_NAME);
            P.Logger.info("model.testData.cursor.MDENT_TYPE: " + model.testData.cursor.MDENT_TYPE);
            P.Logger.info("model.testData.cursor[0]: " + model.testData.cursor[0]);
            P.Logger.info("model.testData.cursor[1]: " + model.testData.cursor[1]);
            P.Logger.info("model.testData.cursor[2]: " + model.testData.cursor[2]);
        }
        P.Logger.info("model.testData.filter: " + model.testData.filter);
        P.Logger.info("model.testData.map: " + model.testData.map);
        P.Logger.info("model.testData.reduce: " + model.testData.reduce);
        P.Logger.info("model.testData.slice: " + model.testData.slice);
        P.Logger.info("model.testData.splice: " + model.testData.splice);
        P.Logger.info("model.testData.pop: " + model.testData.pop);
        P.Logger.info("model.testData.push: " + model.testData.push);
        P.Logger.info("model.testData.shift: " + model.testData.shift);
        P.Logger.info("model.testData.unshift: " + model.testData.unshift);
        P.Logger.info("model.testData instanceof Array: " + (model.testData instanceof Array));
        P.Logger.info("model.testData instanceof P.ApplicationDbEntity: " + (model.testData instanceof P.ApplicationDbEntity));
    }

    function testScroll() {
        // Scroll interface
        var scrollCounterEthalon = model.testData.length;
        var scrollCounter = 0;
        model.testData.beforeFirst();
        while (model.testData.next()) {
            scrollCounter++;
        }
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 1 passed");
        scrollCounter = 0;
        model.testData.afterLast();
        while (model.testData.prev()) {
            scrollCounter++;
        }
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 2 passed");
        scrollCounter = 0;
        for (var i = 0; i < model.testData.length; i++) {
            scrollCounter++;
        }
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 3 passed");
        scrollCounter = 0;
        for (i = 1; i <= model.testData.size; i++) {
            var posRes = model.testData.pos(i);
            if (!posRes)
                throw "pos failed";
            if(model.testData.cursor !== model.testData.getRow(i))
                throw "cursor vs getRow() failed";
            if(model.testData.cursor !== model.testData[i - 1])
                throw "cursor vs model.testData[] failed";
            scrollCounter++;
        }
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 4 passed");
        scrollCounter = 0;
        model.testData.forEach(function() {
            scrollCounter++;
        });
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 5 passed");
        model.testData.afterLast();
        if (!model.testData.eof()) {
            throw "model.testData.afterLast() failed";
        }
        model.testData.beforeFirst();
        if (!model.testData.bof()) {
            throw "model.testData.beforeFirst() failed";
        }
        if (model.testData.size !== model.testData.length)
            throw "model.testData.size filed";
        scrollCounter = 0;
        if (model.testData.first()) {
            do {
                model.testData.next();
                scrollCounter++;
            } while (!model.testData.eof());
        }
        if (scrollCounter != scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 6 passed");
        model.testData.afterLast();
        scrollCounter = 0;
        model.testData.onScrolled = function(event) {
            scrollCounter++;
        };
        if (model.testData.last()) {
            do {
                model.testData.prev();
            } while (!model.testData.bof());
        }
        if (!model.testData.empty && scrollCounter - 1 != scrollCounterEthalon)// Note: before first and after last positions are reported as valid scroll events
            throw "scrollCounter -1 != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 7 passed");
        model.testData.onScrolled = null;
    }

    function testModify(){
        // crud
    }

    function testFindScrollSort(){
        // find by mutiple fields
        // scroll to arbitrary elements
        // three ways of sort (Array, Rowset by fields, Rowset by function)         
    }

    function testData(){
        P.Logger.info("=== test on empty data ===");
        testArrayLike();
        testScroll();
        model.testData.onRequeried = function() {
            requeried = true;
        };
        model.requery(function() {
            P.Logger.info("=== test on full data ===");
            if (model.testData.empty)
                throw 'Data for tests missing';
            testArrayLike();
            testScroll();
            testModify();
            if (!requeried)
                throw 'onRequeried event missed';
        });
    }

    var requeried = false;
    self.execute = function() {
        //testParams();
        testData();
    };
}

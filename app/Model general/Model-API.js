/**
 * 
 * @author mg
 * @constructor
 * @rolesAllowed role1
 */
function ModelAPI() {
    var self = this, model = P.loadModel(this.constructor.name);

    function testParams() {
        P.Logger.info("model.params.length: " + model.params.length);
        if (model.params.length !== 3)
            throw 'model.params.length !== 3';
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
        if (!P.ApplicationDbParametersEntity && !P.Entity) {
            throw 'No entity constructor found';
        }
        if (P.ApplicationDbParametersEntity)
            P.Logger.info("model.params instanceof P.ApplicationDbParametersEntity: " + (model.params instanceof P.ApplicationDbParametersEntity));
        if (P.Entity)
            P.Logger.info("model.params instanceof P.Entity: " + (model.params instanceof P.Entity));
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
            if (model.testData.cursor !== null)
                throw "model.testData.cursor must be null while data is empty";
        } else {
            if (model.testData.cursor === null)
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
        P.Logger.info("model.params instanceof Array: " + (model.params instanceof Array));
        if (!P.ApplicationDbEntity && !P.Entity) {
            throw 'No entity constructor found';
        }
        if (P.ApplicationDbEntity)
            P.Logger.info("model.testData instanceof P.ApplicationDbEntity: " + (model.testData instanceof P.ApplicationDbEntity));
        if (P.Entity)
            P.Logger.info("model.testData instanceof P.Entity: " + (model.params instanceof P.Entity));
        model.testData.schema.MDENT_ID.pk = true;
    }

    function testScroll(expectData) {
        // Scroll interface
        var scrollCounterEthalon = model.testData.length;
        var scrollCounter = 0;
        for (var i = 1; i <= model.testData.length; i++) {
            model.testData.cursorPos = i;
            var posRes = model.testData.cursorPos === i;
            if (!posRes)
                throw "pos failed";
            if (model.testData.cursor !== model.testData[i - 1])
                throw "cursor vs model.testData[] failed";
            scrollCounter++;
        }
        if (scrollCounter !== scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 1 passed");

        scrollCounter = 0;
        model.testData.forEach(function () {
            scrollCounter++;
        });
        if (scrollCounter !== scrollCounterEthalon)
            throw "scrollCounter != scrollCounterEthalon";
        else
            P.Logger.info("scroll of type 2 passed");

        scrollCounter = 0;
        model.testData.onScrolled = function (event) {
            scrollCounter++;
        };
        // after last
        model.testData.cursorPos = model.testData.length + 1;
        for (var s = model.testData.length; s >= 1; s--) {
            model.testData.cursorPos = s;
        }
        // before first
        model.testData.cursorPos = 0;
        if (model.testData.length > 0 && scrollCounter - 2 !== scrollCounterEthalon)// Note: before first and after last positions are reported as valid scroll events
            throw "scrollCounter - 2 != scrollCounterEthalon failed";
        else
            P.Logger.info("scroll of type 3 passed");
        model.testData.onScrolled = null;
        //
        if (expectData) {
            model.testData.scrollTo(model.testData[55]);
            if (model.testData.cursor !== model.testData[55])
                throw 'testData.scrollTo() test failed';
            if (model.testData.cursorPos !== 56)
                throw 'testData.scrollTo()/cursorPos test failed';
            P.Logger.info('testData.scrollTo test passed');
        } else {
            P.Logger.info('testData.scrollTo test skipped');
        }
    }

    function testModify() {
        // crud
        model.testData.splice(0, model.testData.length);
        if (model.testData.length > 0)
            throw 'testData.deleteAll() test failed';
        P.Logger.info('testData.deleteAll() test passed');
        model.testData.requery(function () {
            while (model.testData.length > 0) {
                model.testData.splice(0, 1);
            }
            if (model.testData.length > 0)
                throw 'testData.deleteRow() test failed';
            P.Logger.info('testData.deleteRow() test passed');
            model.testData.requery(function () {
                for (var i = model.testData.length - 1; i >= 0; i--) {
                    model.testData.splice(i, 1);
                }
                if (model.testData.length > 0)
                    throw 'testData.deleteRow(int) test failed';
                P.Logger.info('testData.deleteRow(int) test passed');
                model.testData.requery(function () {
                    for (var i = model.testData.length - 1; i >= 0; i--) {
                        model.testData.remove(model.testData[i]);
                    }
                    if (model.testData.length > 0)
                        throw 'testData.deleteRow(Row) test failed';
                    P.Logger.info('testData.deleteRow(Row) test passed');
                    model.testData.requery(function () {
                        while (model.testData.length > 0) {
                            model.testData.pop();
                        }
                        if (model.testData.length > 0)
                            throw 'testData.pop() test failed';
                        P.Logger.info('testData.pop() test passed');
                        model.testData.requery(function () {
                            while (model.testData.length > 0) {
                                model.testData.shift();
                            }
                            if (model.testData.length > 0)
                                throw 'testData.shift() test failed';
                            P.Logger.info('testData.shift() test passed');
                            model.testData.requery(function () {
                                // insert/push/unshift tests                                
                                model.testData.splice(0, model.testData.length);
                                if (model.testData.length > 0)
                                    throw 'testData.splice(0, model.testData.length) test failed';
                                P.Logger.info('testData.splice(0, model.testData.length) test passed');
                                model.testData.push(
                                        {MDENT_ID: 45, MDENT_NAME: 'sn', MDENT_TYPE: '50'},
                                {MDENT_ID: '_45', MDENT_NAME: '_sn', MDENT_TYPE: '50'});
                                if (model.testData.length !== 2)
                                    throw 'testData.push({...}) test failed 1';
                                if ((model.testData[0].MDENT_ID !== '45.0' && model.testData[0].MDENT_ID !== '45') || model.testData[0].MDENT_NAME !== 'sn' || model.testData[0].MDENT_TYPE !== 50)
                                    throw 'testData.push({...}) test failed 2';
                                P.Logger.info('testData.push({...}) test passed');
                                model.testData.pop();
                                model.testData.shift();
                                model.testData.unshift(
                                        {MDENT_ID: 46, MDENT_NAME: 'sm', MDENT_TYPE: '55'},
                                {MDENT_ID: '_46', MDENT_NAME: '_sm', MDENT_TYPE: '56'}
                                );
                                if (model.testData.length !== 2)
                                    throw 'testData.unshift({...}) test failed 1';
                                if ((model.testData[0].MDENT_ID !== '46.0' && model.testData[0].MDENT_ID !== '46') || model.testData[0].MDENT_NAME !== 'sm' || model.testData[0].MDENT_TYPE !== 55)
                                    throw 'testData.unshift({...}) test failed 2';
                                P.Logger.info('testData.unshift({...}) test passed');
                                model.testData.pop();
                                model.testData.shift();
                                model.testData.push();
                                if (model.testData.length !== 1)
                                    throw 'testData.push() test failed 1';
                                if (!model.testData[0].MDENT_ID)
                                    throw 'testData.push() test failed 2';
                                P.Logger.info('testData.insert() test passed');
                                model.testData.shift();
                                model.testData.push({MDENT_ID: 42, MDENT_NAME: 'sk', MDENT_TYPE: '60'});
                                if (model.testData.length !== 1)
                                    throw 'testData.insert(...) test failed 1';
                                if ((model.testData[0].MDENT_ID !== '42.0' && model.testData[0].MDENT_ID !== '42') || model.testData[0].MDENT_NAME !== 'sk' || model.testData[0].MDENT_TYPE !== 60)
                                    throw 'testData.insert(...) test failed 2';
                                P.Logger.info('testData.insert(...) test passed');
                                model.testData.splice(0, 0, {MDENT_ID: 43, MDENT_NAME: 'ss', MDENT_TYPE: '65'});
                                if (model.testData.length !== 2 || model.testData.size !== 2 || model.testData.empty)
                                    throw 'testData.splice(...) test failed 1';
                                if ((model.testData[0].MDENT_ID !== '43.0' && model.testData[0].MDENT_ID !== '43') || model.testData[0].MDENT_NAME !== 'ss' || model.testData[0].MDENT_TYPE !== 65)
                                    throw 'testData.splice(...) test failed 2';
                                P.Logger.info('testData.splice(...) test passed');
                                model.testData.splice(2, 0, {MDENT_ID: 44, MDENT_NAME: 'sp', MDENT_TYPE: '66'});
                                if (model.testData.length !== 3)
                                    throw 'testData.insertAt(...) test failed 1';
                                if ((model.testData[2].MDENT_ID !== '44.0' && model.testData[2].MDENT_ID !== '44') || model.testData[2].MDENT_NAME !== 'sp' || model.testData[2].MDENT_TYPE !== 66)
                                    throw 'testData.insertAt(...) test failed 2';
                                P.Logger.info('testData.insertAt(...) test passed');
                                model.testData.scrollTo(model.testData[model.testData.length - 1]);
                                model.testData.cursor.MDENT_ID = 50;
                                model.testData.cursor.MDENT_NAME = 'sf';
                                model.testData.cursor.MDENT_TYPE = 70;
                                if ((model.testData[2].MDENT_ID !== '50.0' && model.testData[2].MDENT_ID !== '50') || model.testData[2].MDENT_NAME !== 'sf' || model.testData[2].MDENT_TYPE !== 70)
                                    throw 'testData.cursor.<...> = test failed';
                                P.Logger.info('testData.cursor.<...> = test passed');
                                model.testData[0].MDENT_ID = '60';
                                model.testData[0].MDENT_NAME = 'sw';
                                model.testData[0].MDENT_TYPE = 75;
                                if (model.testData[0].MDENT_ID !== '60' || model.testData[0].MDENT_NAME !== 'sw' || model.testData[0].MDENT_TYPE !== 75)
                                    throw 'testData[0].<...> = test failed';
                                P.Logger.info('testData[0].<...> = test passed');
                                testFindSort();
                            });
                        });
                    });
                });
            });
        });
    }

    function testFindSort() {
        // find by mutiple fields
        // scroll to arbitrary elements
        // three ways of sort (Array, Rowset by fields, Rowset by function)
        model.testData.beginUpdate();
        model.testData.endUpdate();

        model.testData.requery(function () {
            var unfilteredLength = model.testData.length;
            var filters = [
                model.testData.createFilter(model.testData.schema.MDENT_TYPE),
                model.testData.createFilter([model.testData.schema.MDENT_TYPE]),
                model.testData.createFilter("MDENT_TYPE"),
                model.testData.createFilter(["MDENT_TYPE"])
            ];
            for (var f = 0; f < filters.length; f++) {
                var filter = filters[f];
                filter.apply(70);
                if (model.testData.length === 0)
                    throw 'filter no content failed.';
                if (model.testData.activeFilter !== filter)
                    throw 'filter/activeFilter test failed';
                var filteredLength = model.testData.length;
                if (filteredLength >= unfilteredLength)
                    throw 'filter test failed' + ' filteredLength:' + filteredLength + '; unfilteredLength: ' + unfilteredLength;

                var found = model.testData.find(model.testData.schema.MDENT_TYPE, 70);
                if (found.length !== filteredLength)
                    throw 'filter/find test failed';
                var foundBadValue = false;
                for (var i = 0; i < model.testData.length; i++)
                    if (model.testData[i].MDENT_TYPE !== 70) {
                        foundBadValue = true;
                        break;
                    }
                if (foundBadValue)
                    throw 'filter test failed';
                filter.cancel();
            }

            var unfilteredLength1 = model.testData.length;
            if (unfilteredLength1 !== unfilteredLength)
                throw 'filter.cancel test failed';
            P.Logger.info('filter test passed');

            var sorters = [
                model.testData.createSorting(model.testData.schema.MDENT_TYPE, true, model.testData.schema.MDENT_NAME, false),
                model.testData.createSorting([model.testData.schema.MDENT_TYPE, true, model.testData.schema.MDENT_NAME, false]),
                model.testData.createSorting("MDENT_TYPE", true, "MDENT_NAME", false),
                model.testData.createSorting(["MDENT_TYPE", true, "MDENT_NAME", false]),
                model.testData.createSorting({MDENT_TYPE: true, MDENT_NAME: false})
            ];
            for (var s = 0; s < sorters.length; s++) {
                var sorter = sorters[s];
                model.testData.sort(sorter);
                if (model.testData[0].MDENT_TYPE !== 20)
                    throw 'testData.sort() test failed 1';
                model.testData.sort(function (o1, o2) {
                    return o2.MDENT_TYPE - o1.MDENT_TYPE;
                });
                if (model.testData[0].MDENT_TYPE !== 100)
                    throw 'testData.sort() test failed 2';
            }
            P.Logger.info('testData.sort() test passed');
            var modules = model.testData.find(model.testData.schema.MDENT_TYPE, 20);
            if (!modules || !Array.isArray(modules) || modules.length === 0 || !modules[2])
                throw 'testData.find test failed';
            P.Logger.info('testData.find test passed');
            var module2 = model.testData.findById(modules[2].MDENT_ID);
            if (!module2 || module2 !== modules[2])
                throw 'testData.findById test failed';
            P.Logger.info('testData.findById test passed');
            model.testData.execute();
            P.Logger.info('testData.execute() test passed');
        });
    }

    function testData() {
        P.Logger.info("=== test on empty data ===");
        testArrayLike();
        testScroll();
        if (model.testData.params.Param1 === undefined)
            throw 'testData.params test failed 1';
        model.testData.params.Param1 = 89;
        if (model.testData.params.Param1 !== 89)
            throw 'testData.params test failed 2';
        P.Logger.info('testData.params test passed');

        model.testData.onRequeried = function (event) {
            requeried = true;
        };
        model.requery(function () {
            P.Logger.info("=== test on full data ===");
            if (model.testData.empty)
                throw 'Data for tests missing';
            testArrayLike();
            testScroll(true);
            testModify();
            if (!requeried)
                throw 'onRequeried event missed';
        }, function (e) {
            P.Logger.severe(e);
        });
    }

    var requeried = false;
    self.execute = function () {
        testParams();
        testData();
    };
}

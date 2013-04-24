/*
 * testWebClientServerModules.js
 *
 * Created on 09.07.2012, 10:39:41
 */

/**
 *
 * @name 134181598182825
 * @author AB
 */

var testServ = new ServerModule("134002903893458");
console.log(testServ.testPropertyString);
console.log(testServ.testPropertyInt);
console.log(testServ.testPropertyUndefined);
console.log(testServ.testConst);
console.log(testServ.testPropertyBool);
console.log(testServ.testPropertyFloat);
console.log(testServ.testPropertyNull);
testServ.testPropertyFunction(function(data) {
                                  console.log(data);
                              });
testServ.testPropertyString = "GWT TEST";
console.log(testServ.testPropertyString);


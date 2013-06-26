/**
 * 
 * @author mg
 * @name TestServerTaskModule
 * @public
 */

var stateCounter = 0;
function testCounter(aDelta){
    stateCounter += aDelta;
    return stateCounter;
}

function testSum(a, b){
    return a + b;
}

function testDate(){
    return new Date();
}

function testString(){
    return "Sample string";
}

function testBoolean(){
    return false;
}

function testNull(){
    return null;
}

function testUndefined(){
    return undefined;
}
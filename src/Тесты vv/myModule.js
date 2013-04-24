/**  
 * 
 * @name 131479777012136
 *
 */
var field = 1;
var empty;
/**
 * Other field variable 
 */
const otherField = 'Some other data'; 

/** 
 * Функция
 * @params arg1, arg2, arg3
 * @returns value
 */
function doIt(arg1, arg2, arg3) {               
    for (var i = 0; i < 100; i++) {
        field = '';
        justDoIt();
    }  
    function embedded2(args) {  
        return 0;     
    }    
    if (field == 1 && otherField == '' || otherField == 'hi') {
        var var2 = 'text';
        field = 2;
        justDoIt();
    } else {
       field = 3; 
    }
    switch (field) {
        case 1:
        justDoIt();
            break;
        default:
            break;    
    } 
}  
 function newFun() {
     var field;
     field = 2;
     justDoIt();
 }    
 



justDoIt();



field = 2;
newFun();   

function justDoIt() {    
    function embedded() {   
        return 0;   
    } 
}

function getObject() {
    return {text:'my module text', val: 123};
}

function getArray() {
    return [1, 2, 123, 'text'];
}

function getJSON() {
    return JSON.stringify({text: 'text', val: 456});
}

function getText() {
    return 'my module text';
}

function getNumber() {
    return 123.11;
}

function getDate() {
    return new Date();
}

function getParam(o) {
    return o;
}

function getSum(aVal1, aVal2) {
    return aVal1 + aVal2;
}


//var m_1 = new Module(131650781480287);
////const sm1 = new ServerModule(3546546546550);
//var f1 = new Form(131479783889259);
////var r1 = new Report(3546546546557);          
//var externalVariable = m_1.variable1;
//var item = m1.variable1; sa= ss;
//
//const m_3 = new Module(131710299994943),
//m_4 = new Module(131710299994943);
//
//m_1.test;
//var t = m_3.booleanStyle;
//m_4.boolGreenBackStyle;
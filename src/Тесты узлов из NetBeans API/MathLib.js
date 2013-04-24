/**
 *
 * @name 125924004327743
 */

var HELLO_STRING="Hello, world!!!!!!!!!!!!!";

/* This module was changed from inside the PlatypusDesigner2. */
var t = 0;

function pow1(n, b)
{ 
    var r=1;
    for (var i = 0; i < b; i++)
        r = r*n;
    return r;
}

Logger.info( pow1(2, 4) );
Logger.fine( pow1(3, 4) );
Logger.info( pow1(4, 4) );
Logger.severe( pow1(5, 4) );
//Logger.info( pow1(9, 4) );

var counter = 0;
while(true)
{
    Logger.fine("Iteration:"+counter++);
    pow1(3, 4);
    java.lang.Thread.sleep(20);
}

function ordersRowDeleted(param0) {//GEN-FIRST:event_ordersRowDeleted
// TODO add your handling code here:
}//GEN-LAST:event_ordersRowDeleted

function ordersRowInserted(param0) {//GEN-FIRST:event_ordersRowInserted
// TODO add your handling code here:
}//GEN-LAST:event_ordersRowInserted

function ordersRowChanged(param0) {//GEN-FIRST:event_ordersRowChanged
    var myVar=0;// TODO add your handling code here:
}//GEN-LAST:event_ordersRowChanged

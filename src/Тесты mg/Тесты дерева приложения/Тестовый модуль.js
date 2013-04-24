/**
 * @name 128254906432836
*/
function test1()
{
    Logger.info(dsTest.size);
    dsTest.beforeFirst();
    while(dsTest.next())
    { 
        Logger.info(dsTest.NAME);
    }
    Logger.info("dsTest end");
}
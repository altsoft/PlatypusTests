/**
 * @name 125679899814137
*/
function getEntitiesSizes()
{
    var rs = executeSQL("select MDENT_NAME, length(MDENT_CONTENT_TXT) from MTD_ENTITIES");
    rs.beforeFirst();
    var str = "";
    while (rs.next())
        str += "name="+rs.getString(1)+", size="+rs.getInt(2)+"\n";
    return str;
}

/**
 * @name 125532786173476
*/
function createFile(fname)
{
    var fos = new java.io.FileOutputStream(fname);
    try
    {
        fos.write(1);
    } finally {
        fos.close();
    }
    return 1;
}

function addition(a, b)
{
    return (3*(a+b)).toString();
}
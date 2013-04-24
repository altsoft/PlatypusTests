/**
 * Platypus module script.
 * @name 130410223442667
 * Script may be used as library, form or report module, server module and etc.
 */

/**
 * testModule.js
 *
 * Created on 29.04.2011, 22:37:14
 */

/**
 *
 * @author mg
 */

var form = new Form("130410228213007");

form.appElementType = 20;

form.show();
Logger.info("form.entities.size: "+form.entities.size);
form.save();
form.close();
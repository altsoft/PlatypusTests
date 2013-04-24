/**
 * 
 * @author ml
 * @name для_работы_с_формами
 */

/** Выстраивает каскадом открытые фреймы в компоненте JDesktopPane
 * @param aFrames Массив фреймов компонета JDesktopPane
 * @param aBounds Границы компонета JDesktopPane, который содержит фреймы
 * @param aSeparation Расстояние между фреймами
 * @return Нет возвращаемого значения
 */
function cascadeFrames(aFrames, aBounds, aSeparation){
    var margin = aFrames.length * aSeparation + aSeparation;
    var width = aBounds.width - margin;
    var height = aBounds.height - margin;
    var sep = 0;
    for (var i = 0; i < aFrames.length; i++) {
        sep = (i + 1) * aSeparation;
        aFrames[i].setBounds(sep, sep, width, height);
        aFrames[i].setSelected(true);
    }    
}

/** Сворачивает открытые фреймы в компоненте JDesktopPane
 * @param aFrames Массив фреймов компонета JDesktopPane
 * @return Нет возвращаемого значения
 */
function minimizeFrames(aFrames){
    for (var i=0; i < aFrames.length; i++){
        aFrames[i].setIcon(true);
    }
}

/** Восстанавливает свернутые фреймы в компоненте JDesktopPane
 * @param aFrames Массив фреймов компонета JDesktopPane
 * @return Нет возвращаемого значения
 */
function maximizeFrames(aFrames){
    for (var i=0; i < aFrames.length; i++){
        aFrames[i].setIcon(false);
    }    
}

/** Закрывает все открытые фреймы в компоненте JDesktopPane
 * @param aFrames Массив фреймов компонета JDesktopPane
 * @return Нет возвращаемого значения
 */
function closeFrames(aFrames){
    for (var i=0; i < aFrames.length; i++){
        aFrames[i].setClosed(true);
    }    
}

/**
 * @name 131710299994943
*/
// стиль для логических столбцов
var booleanStyle = new Style();
booleanStyle.align = SwingConstants.CENTER; 
// наследник стиля "booleanStyle" с зеленым фоном
var boolGreenBackStyle = new Style(booleanStyle);
boolGreenBackStyle.background = new Color(226, 255, 226);
// стиль для дерева классов
var classStyle = new Style();
classStyle.icon = Icons.load("block-small.png");
classStyle.folderIcon = classStyle.icon;
classStyle.leafIcon = classStyle.icon;
classStyle.openFolderIcon = classStyle.icon;
// стиль для дерева марок
var markStyle = new Style();
markStyle.icon = Icons.load("tag-label.png");
// стиль для исполнителей 
// исполнитель
var nodeStyle = new Style();
    nodeStyle.icon = Icons.load("status.png");
// группа исполнителей
var groupNodeStyle = new Style();
    groupNodeStyle.icon = Icons.load("folder-horizontal.png");

/**
 * @name 131710299994943
*/
// стиль для логических столбцов
const booleanStyle = new Style();
booleanStyle.align = SwingConstants.CENTER; 
// наследник стиля "booleanStyle" с зеленым фоном
const boolGreenBackStyle = new Style(booleanStyle);
boolGreenBackStyle.background = new Color(226, 255, 226);
// стиль для дерева классов
const classStyle = new Style();
classStyle.icon = Icons.load("block-small.png");
classStyle.folderIcon = classStyle.icon;
classStyle.leafIcon = classStyle.icon;
classStyle.openFolderIcon = classStyle.icon;
// стиль для дерева марок
const markStyle = new Style();
markStyle.icon = Icons.load("tag-label.png");
// стиль для исполнителей 
// исполнитель
const nodeStyle = new Style();
    nodeStyle.icon = Icons.load("status.png");
// группа исполнителей
const groupNodeStyle = new Style();
    groupNodeStyle.icon = Icons.load("folder-horizontal.png");

/**
 * 
 * @author mg
 * @module
 */
function PlainWidgetsApiTest() {
    var self = this, model = P.loadModel(this.constructor.name);

    function checkContainerCildren(aContainer) {
        var i = 0;
        if (aContainer.count !== aContainer.children.length)
            throw '.count <> children.length';
        for (i = 0; i < aContainer.count; i++) {
            if (aContainer.children[i] !== aContainer.child(i)) {
                throw '.children[i] !== .child(i)';
            }
        }
    }

    function checkObjectProjection(aEthalon, aContent){
        for(var p in aEthalon){
            if(aEthalon[p] !== aContent[p]){
                throw 'Ethalon and content objects mismatch';
            }
        }
    }

    var anchors0 = new P.Anchors(10, 20, null, 40, 50, null);
    var anchors1 = new P.Anchors(null, '20px', '56px', '40px', '50px', null);
    var anchors2 = new P.Anchors('10%', null, '56%', '40%', null, '90%');
    var anchors3 = {left: 10, width: 20, top: 40, height: 50};
    var anchors4 = {width: '20px', right: '56px', top: '40px', height: '50px'};
    var anchors5 = {left: '10%', right: '56%', top: '40%', bottom: '90%'};
    checkObjectProjection(anchors3, anchors0);
    checkObjectProjection(anchors4, anchors1);
    checkObjectProjection(anchors5, anchors2);

    var comps = [new P.Button()
        , new P.AbsolutePane()
        , new P.AnchorsPane()
        , new P.BorderPane()
        , new P.BoxPane()
        , new P.CardPane()
        , new P.CheckBox()
        , new P.DesktopPane()
        , new P.DropDownButton()
        , new P.FlowPane()
        , new P.FormattedField()
        , new P.GridPane()
        , new P.HtmlArea()
        , new P.Label()
        , new P.ModelCheckBox()
        , new P.ModelCombo()
        , new P.ModelDate()
        , new P.ModelFormattedField()
        , new P.ModelGrid()
        , new P.ModelImage()
        , new P.ModelImage()
        , new P.ModelMap()
        , new P.ModelScheme()
        , new P.ModelSpin()
        , new P.ModelTextArea()
        , new P.PasswordField()
        , new P.ProgressBar()
        , new P.RadioButton()
        , new P.ScrollPane()
        , new P.SplitPane()
        , new P.TabbedPane()
        , new P.TextArea()
        , new P.TextField()
        , new P.ToggleButton()
        , new P.ToolBar()
        ];
    var conts = [new P.AbsolutePane()
        , new P.AnchorsPane()
        , new P.BorderPane()
        , new P.BoxPane()
        , new P.CardPane()
        , new P.FlowPane()
        , new P.GridPane()
        , new P.ScrollPane()
        , new P.SplitPane()
        , new P.TabbedPane()
        , new P.ToolBar()
        ];

    for (var cn = 0; cn < conts.length; cn++) {
        var container = conts[cn];
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            container.add(comp, anchors0);
            if(comp.parent !== container)
                throw '.parent mismatch';
            checkContainerCildren(container);
            container.add(comp, anchors3);
            if(comp.parent !== container)
                throw '.parent mismatch';
            checkContainerCildren(container);
        }
        for (var c = 0; c < comps.length; c++) {
            var comp = comps[c];
            container.remove(comp);
            if(comp.parent !== null)
                throw '.parent null mismatch';
            checkContainerCildren(container);
            container.remove(comp);
            if(comp.parent !== null)
                throw '.parent null mismatch';
            checkContainerCildren(container);
        }
    }
}

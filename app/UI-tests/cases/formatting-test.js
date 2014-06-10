/**
 * 
 * @author mg
 * @module
 */
function FormattingTest() {
    var self = this;

    var comps = [
        new P.FormattedField(),
        new P.HtmlArea(),
        new P.ModelCombo(),
        new P.ModelDate(),
        new P.ModelFormattedField(),
        new P.ModelSpin(),
        new P.ModelTextArea(),
        new P.PasswordField(),
        new P.ProgressBar(),
        new P.Slider(),
        new P.TextArea(),
        new P.TextField()
    ];

    for (var c in comps) {
        var comp = comps[c];
        if (comp instanceof P.ModelDate) {
            var compValue = new Date();
            comp.value = new Date(compValue.getTime() + compValue.getTimezoneOffset() * 60 * 1000);
            comp.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
            var ethalon = JSON.parse(JSON.stringify(compValue));
            if (comp.text !== ethalon) {
                throw 'Date formatting mismatch';
            }
        } else if (comp instanceof P.ModelCombo) {
            continue;
        } else if (comp instanceof P.HtmlArea) {
            if (P.agent === P.HTML5) {
                comp.value = '<b>bold</b>plain';
                if (comp.text !== 'boldplain')
                    throw 'P.HtmlArea. comp.text mismatch';
            } else {
                continue;
            }
        } else {
            comp.value = 100;
            if (!(comp instanceof P.ProgressBar) && comp.text !== '100') {
                throw 'comp.text mismatch';
            }
        }
    }

    // Dates
    var formattingComps = [
        new P.FormattedField(),
        new P.ModelFormattedField()
    ];
    for (var c in formattingComps) {
        var comp = formattingComps[c];
        var compValue = new Date();
        comp.value = new Date(compValue.getTime() + compValue.getTimezoneOffset() * 60 * 1000);
        comp.format = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        var ethalon = JSON.parse(JSON.stringify(compValue));
        if(comp.text !== ethalon)
            throw 'Dates. comp.text mismatch';
    }
    // Booleans
    var formattingComps = [
        new P.FormattedField(),
        new P.ModelFormattedField()
    ];
    for (var c in formattingComps) {
        var comp = formattingComps[c];
        comp.value = true;
        if(comp.text !== 'true')
            throw 'Boolean component.text mismatch';
        comp.value = false;
        if(comp.text !== 'false')
            throw 'Boolean component.text mismatch';
    }
    // Numbers
    var formattingComps = [
        new P.FormattedField(),
        new P.ModelFormattedField()
    ];
    for (var c in formattingComps) {
        var comp = formattingComps[c];
        comp.value = 45.899;
        comp.format = '##.##';
        if(comp.text !== '45.9')
            throw 'Numbers. comp.text mismatch';
    }
    // Strings
    var formattingComps = [
        new P.FormattedField(),
        new P.ModelFormattedField()
    ];
    for (var c in formattingComps) {
        var comp = formattingComps[c];
        comp.format = '###-***';
        comp.value = '555-ooooooo';
        if(comp.text !== '555-ooo'){
            throw 'Strings. comp.text mismatch'
        }
    }
}

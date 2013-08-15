
function j(){alert("Hello from j()!")}


require(["TestView", "TestReport", "TestModule"], function(){
    new TestView(
            function() {
                var rep = new TestReport();
                rep.show();
            },
            function() {
                var m = new TestModule();
                alert(m.sum(90, 89));
            }
    ).show();
});


$("#b1").click(function(){
    // console.log("Test")
    if(button1) {
        $("h1").removeAttr("hidden");
        $("#b1").text("Hide Secret Message");
        button1=false;
    }
    else
    {
        $("h1").attr("hidden", "");
        $("#b1").text("Show Secret Message");
        button1=true;
    }
});


var button1 = true;
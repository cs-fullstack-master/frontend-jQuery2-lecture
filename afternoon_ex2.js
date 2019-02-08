// Exercise 2a
$("#b1").click(function(){
    // console.log("Test")
    if(evenNumberCounter%2===0) {
        $("h1").removeAttr("hidden");
        $("#b1").text("Hide Secret Message");
        // button1=false;
    }
    else
    {
        $("h1").attr("hidden", "");
        $("#b1").text("Show Secret Message");
        // button1=true;
    }
    evenNumberCounter++;
});


// var button1 = true;
var buttonChangeVariable = "";
var buttonColorChange = ["blue", "red", "yellow", "brown", "orange", "purple", "black", "green"];
var buttonColorCounter = 0;
var evenNumberCounter = 0;

// Exercise 2b
$("#b2").click(function (){
    buttonChangeVariable = prompt("What should the secret message be this time?");
    $("h1").text(buttonChangeVariable);
});

// Exercise 2c
$("#b3").click(function(){
    $("h1").css("color",buttonColorChange[buttonColorCounter]);
    buttonColorCounter++;
    if(buttonColorCounter>=buttonColorChange.length)
    {
        buttonColorCounter=0;
    }
})
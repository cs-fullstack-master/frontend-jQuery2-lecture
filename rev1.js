function intervalTimerSameThingInMyCase()
{
    // console.log(fourthOfASecondCounter);
    fourthOfASecondCounter++;
    $("h2").text(fourthOfASecondCounter);
}

var intervalID = setInterval(intervalTimerSameThingInMyCase, 250);
// var intervalID2 = setInterval(intervalTimerSameThingInMyCase, 250);
var fourthOfASecondCounter = 0;
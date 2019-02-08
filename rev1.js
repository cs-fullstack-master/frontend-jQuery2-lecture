function intervalTimerSameThingInMyCase()
{
    // console.log(fourthOfASecondCounter);
    fourthOfASecondCounter++;

    // secondsForH2 = parseInt(fourthOfASecondCounter/4);
    // if(secondsForH2 >= 60)
    // {
    //     secondsForH2 = 0;
    //     fourthOfASecondCounter = 0;
    //     minutesForH2++;
    // }
    //
    // $("h2").text(minutesForH2+ "m:" + secondsForH2+ "secs");
    $("h2").text(fourthOfASecondCounter);

    if(fourthOfASecondCounter >= 20)
    {
        clearInterval(intervalID);
    }
}

var intervalID = setInterval(intervalTimerSameThingInMyCase, 62.5);
var fourthOfASecondCounter = 0;
// var secondsForH2 = 0;
// var minutesForH2 = 0;
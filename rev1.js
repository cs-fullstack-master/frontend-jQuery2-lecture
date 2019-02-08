function intervalTimerSameThingInMyCase()
{
    // console.log(fourthOfASecondCounter);
    fourthOfASecondCounter++;

    secondsForH2 = parseInt(fourthOfASecondCounter/4);
    if(secondsForH2 >= 60)
    {
        secondsForH2 = 0;
        fourthOfASecondCounter = 0;
        minutesForH2++;
    }

    $("h2").text(minutesForH2+ "m:" + secondsForH2+ "secs");
}

var intervalID = setInterval(intervalTimerSameThingInMyCase, 250);
var fourthOfASecondCounter = 220;
var secondsForH2 = 0;
var minutesForH2 = 0;
/* Print the first p tag to the console using the ID,
class, and tag selectors. */
console.log( $("p:first").text());
console.log( $("#first").text());
console.log( $(".special:first").text() );

// $("p:first").addClass("turnRed");
$("p:first").attr("class", "turnRed");

console.log($("p:first").css("color"));

$("p").each(eachFunction);

function eachFunction(index, value)
{
    value.addEventListener('click', clickFunction)
}

function clickFunction(e)
{
    alert(e.target.innerText);
}

$("body").append("<h1>Test</h1>");



/* Change the color of the h1 statement to blue. */


/* Change the color of the last p tag to yellow. */

/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Console log the contents of all p tags */
console.log($("p").text());

/* Press spacebar to add an image to the HTML */
document.addEventListener("keydown", readingKeys)


function readingKeys(e)
{
    if(e.code == "Space")
        $("body").append("<img src='https://cdn-images-1.medium.com/max/1600/1*_QxjmFagsMhkiOKAMoLFlQ.png' height='200px' width='300px'></img");
        afterImageShowsUp();
}

/* After pressing spacebar, when you move your mouse over the image it should disappear. When you move your mouse off of it, it should reappear */
// document.addEventListener("keydown", readingKeys)

function afterImageShowsUp(e)
{
    console.log("Test");
    $("img").on('mouseover', function(){
        $(this).hide();
    })
    $("img").on('mouseout', function(){
        // $("img").show();
    })

}

/* Make all <h2> elements orange */


/*Change the background on every paragraph to be yellow*/


/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/

$("h1").addClass("big-title  m-5");

setTimeout(() => {
    if ($("h1").hasClass("big-title m-5")) {
        $("h1").removeClass("big-title  m-5");
    }
}, 150);

$("h1").text("lorem");
$("h1").html("<strong>"+ $("h1").text() +"</strong>");

console.log($("h1").attr("role"));
$("h1").attr("role", "info");
console.log($("h1").attr("role"));
console.log($("h1").attr("class"));

var x = 0;
$(document).click((event) => {
    x++;
    $("h1").text("clicked, " + x);
});


$(document).on("keydown", (event) => {
    alert(event.key);
});


$("h1").after("<h3>h3 title</h3>"); // before...
// prepand adds inside the element, append adds to end
setTimeout(() => {
    $("h3").remove(); // removes all h3 element inside dom
    $("p").toggle();
}, 1000);

$("p").toggle(); // or fadeout, fadein, fadetoggle, slideToggle

setTimeout(() => {
        $("h1").animate({margin: "5%"}).animate({margin: "10%"});
}, 1000);



let button=document.getElementById("to_the_top");
window.onscroll=function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 400) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0;
}
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
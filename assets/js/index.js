
$(document).ready(function () {
    var navbar = document.querySelector("#home");
    var sticky = navbar.offsetTop;
 
    $(window).scroll(function () {
        if (window.scrollY >= sticky) {
            navbar.classList.add("position-fixed");
        } else {
            navbar.classList.remove("position-fixed");
        }
    });
});
var button = document.getElementsByClassName("nav__dropdown");
var dropdown = document.getElementsByClassName("nav__hidden-dropdown");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        dropdown[i].classList.toggle("hidden");
    });
}
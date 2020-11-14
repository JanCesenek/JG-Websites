var dropdown = document.getElementsByClassName("main-content__dropdown");
var popup = document.getElementsByClassName("popup");
var exit = document.getElementsByClassName("popup__exit");

for(let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        popup[i].classList.remove("hidden");
    });
    exit[i].addEventListener("click", function() {
        popup[i].classList.add("hidden");
    });
}

$(".sidebar__dropdown").click(function() {
    $(".sidebar-popup").removeClass("hidden");
});

$(".sidebar-popup__exit").click(function() {
    $(".sidebar-popup").addClass("hidden");
});

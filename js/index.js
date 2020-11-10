$("#first").click(function() {
    $(".services").addClass("hidden");
    $(".projects").removeClass("hidden");
});

$("#second").click(function() {
    $(".projects").addClass("hidden");
    $(".services").removeClass("hidden");
});

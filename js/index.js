$("#first").click(function() {
    $(".services").addClass("hidden");
    $(".projects").removeClass("hidden");
});

$("#second").click(function() {
    $(".services").addClass("hidden");
    $(".games").removeClass("hidden");
});

$("#third").click(function() {
    $(".projects").addClass("hidden");
    $(".services").removeClass("hidden");
});

$("#fourth").click(function() {
    $(".projects").addClass("hidden");
    $(".games").removeClass("hidden");
});

$("#fifth").click(function() {
    $(".games").addClass("hidden");
    $(".projects").removeClass("hidden");
});

$("#sixth").click(function() {
    $(".games").addClass("hidden");
    $(".services").removeClass("hidden");
});

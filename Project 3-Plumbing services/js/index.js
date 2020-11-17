var chapters = document.getElementsByClassName("nav__link");

for (var i = 0; i < chapters.length; i++) {
  chapters[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("focused");
  current[0].className = current[0].className.replace(" focused", "");
  this.className += " focused";
  });
}

function ShowTextFor(selectedMenuOption) {
	var menuContentClass = document.getElementsByClassName("main-content__chapter");
  
  for(var i = 0; i < menuContentClass.length; i++) {
    var menuContentId = document.getElementsByClassName("main-content__chapter")[i].id;
    if(menuContentId == selectedMenuOption){
      document.getElementById(menuContentId).classList.remove("hidden");
    } 
    else{
      document.getElementById(menuContentId).classList.add("hidden");
    }
  }
}

$(".dropdown-button").click(function() {
  $(".hidden-dropdown").toggleClass("hidden");
});

$(".nav__link2").click(function() {
  $(".hidden-dropdown").addClass("hidden");
});
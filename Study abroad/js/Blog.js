function ShowTextFor(selectedMenuOption) {
	var menuContentClass = document.getElementsByClassName("menu-content");
  
  for(var i = 0; i < menuContentClass.length; i++) {
    var menuContentId = document.getElementsByClassName("menu-content")[i].id;
    if(menuContentId == selectedMenuOption){
      document.getElementById(menuContentId).classList.remove("hidden-content");
    } 
    else{
      document.getElementById(menuContentId).classList.add("hidden-content");
    }
  }
}

var chapters = document.getElementsByClassName("navBlink");

for (var i = 0; i < chapters.length; i++) {
  chapters[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active-chapter");
  current[0].className = current[0].className.replace(" active-chapter", "");
  this.className += " active-chapter";
  });
}

$("#textMode").click(function() {
  $(".textMode").removeClass("hiddenMode");
  $(".iconMode").addClass("hiddenMode");
  $("h1").addClass("hideTheH1");
  $("#smallerSizeForText").removeClass("hiddenNavbarMode");
  $("#smallerSizeForIcons").addClass("hiddenNavbarMode");
});

$("#iconMode").click(function() {
  $(".iconMode").removeClass("hiddenMode");
  $(".textMode").addClass("hiddenMode");
  $("h1").removeClass("hideTheH1");
  $("#smallerSizeForIcons").removeClass("hiddenNavbarMode");
  $("#smallerSizeForText").addClass("hiddenNavbarMode");
});

$("#dropdownButton").click(function() {
  $(".forText").toggleClass("showDropdown");
});

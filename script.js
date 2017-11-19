// slow poll of the fully loaded page status
var intervalId = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(intervalId); // stop the polling

    var element = document.getElementById("pagelet_growth_expanding_cta");

    if (element != null){
      // remove the overlay element
      element.remove();
    }
    // else could not find element
  }
}, 500);

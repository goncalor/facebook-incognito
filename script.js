// slow poll of the fully loaded page status
var intervalId = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(intervalId); // stop the polling

    var element = document.getElementById("expanding_cta_close_button");

    if (element != null){
      // remove the overlay element
      element.parentNode.parentNode.parentNode.remove();
      // alert(JSON.stringify(element));
    }
    // else could not find element
  }
}, 500);

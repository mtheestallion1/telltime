function $(id) {
  return document.getElementById(id);
}

//We want to wait to do anything until our page loads
//So we use the onload() function to contain all of our code
window.onload = function () {
  //create two variables that will
  //represent the current date and time
  var d = new Date();

  //Now we will use that variable to get the time
  var t = d.toLocaleTimeString();

  //Reference our HTML element by using its ID
  var timeText = $("timeText");

  //Set the time in our HTML element
  timeText.innerHTML = t;
};

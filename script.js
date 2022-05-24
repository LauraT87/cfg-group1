document.addEventListener("DOMContentLoaded", function () {
  var d = new Date();
  var hour = d.getHours();

  function timeGreeting() {
    if (hour < 10) {
      greeting = "Good morning, welcome to Find a Hobby!";
    } else if (hour < 20) {
      greeting = "Hello, welcome to Find a Hobby!";
    } else {
      greeting = "Good evening, welcome to Find a Hobby!";
    }

  }
  timeGreeting();
  var changeGreeting = (document.getElementById("greeting").innerText =
    greeting);

  var spin = document.getElementsByClassName("spin");
  console.log(spin);
});

function myFunction(elementId) {
  // console.log('clicked')
  var x = document.getElementById(elementId);
  // console.log('x: ', x)
  // console.log('x.style.display: ', x.style.display)
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
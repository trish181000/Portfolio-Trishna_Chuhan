// Date:
const d = new Date();
document.getElementById("date").innerHTML = d;

// Button Alert:
function alert() {
    document.getElementById("btn-alert").innerHTML = "I moved from England, July 2023, I took a one way flight and never went back!";
  }

// Hover Button:
document.getElementById("hvr-btn").onmouseover = function() {mouseOver()};
document.getElementById("hvr-btn").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("hvr-btn").innerHTML = "I am currently watching The Boys. :)";
}

function mouseOut() {
  document.getElementById("hvr-btn").innerHTML = "Hover to find out what I am watching right now!";
}

// Incrementing Button:
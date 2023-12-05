// Date:
const d = new Date().getFullYear();
document.getElementById("date").innerHTML = d;

// Button Alert:
function alert() {
    document.getElementById("btn-alert").innerHTML = "I moved from England, July 2023, I took a one way flight and never went back!";
    console.log('Hola')
  }

// Hover Button:
document.getElementById("hvr-btn").onmouseover = function() {mouseOver()};
document.getElementById("hvr-btn").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("hvr-btn").innerHTML = "I am currently watching The Boys. :)";
  console.log('Bonjour')
}

function mouseOut() {
  document.getElementById("hvr-btn").innerHTML = "Hover to find out what I am watching right now!";
}

// Incrementing Button:
var x = 1;
function buttonClick() {
    document.getElementById('inc').value = ++x;
    console.log('Hi')
    
    // If-Else:
    if (x % 2 === 0) {
      document.getElementById('inc').classList.add('even')
      document.getElementById('inc').classList.remove('odd') 
     } else {
      document.getElementById('inc').classList.add('odd') 
      document.getElementById('inc').classList.remove('even')
     }
}

// Ordered List:

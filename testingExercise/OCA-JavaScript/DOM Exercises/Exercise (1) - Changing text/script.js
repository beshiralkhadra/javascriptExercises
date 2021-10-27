let yellow = document.getElementById("yellow");

yellow.onmouseover = function() {mouseOver()};
yellow.onmouseout = function() {mouseOut()};

function mouseOver() {
   yellow.innerHTML="<h2>Can I help you?</h2>";
}

function mouseOut() {
    yellow.innerHTML="<h2>Hello World</h2>  ";
}
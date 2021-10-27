let getDiv = document.getElementById("div1")

getDiv.style.backgroundColor = getRandomColor();

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        getDiv.style.backgroundColor = color;
    }
    return color;

}

let colorArray = ["red", "blue", "yellow"]

function getColor() {
    backColor = colorArray.shift();
    colorArray.push(backColor);
    getDiv.style.backgroundColor = backColor;

}
let getElement= document.getElementById("div1");

colors = ['blue', 'red', 'green'];
function changeColor(){
    color = colors.shift();
    colors.push(color);
    getElement.style.backgroundColor = color;

}



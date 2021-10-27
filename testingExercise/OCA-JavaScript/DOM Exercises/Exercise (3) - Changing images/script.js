let select = document.getElementById('backgrounds');


// let img  = document.querySelector('div');
let image = document.getElementById('image');

select.addEventListener('change',backgrounds);

function backgrounds(){
    let choice = select.value;
    if(choice == 'jordan'){
        image.style.backgroundImage = 'url(img/jordan.png)';
    }
    else if(choice == 'palestine'){
        image.style.backgroundImage= 'url(img/Flag_of_Palestine.svg.png)';
    }
    else if(choice == 'Saudi'){
        image.style.backgroundImage = 'url(img/saudi.png)';
    }
}
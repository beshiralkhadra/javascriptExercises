let select= document.getElementById('font');
let paragraph = document.getElementById('paragraph');
let size = document.getElementById('font-size');
let underline = document.getElementById('Underline');
let bold = document.getElementById('Bold');
let italic = document.getElementById('Italic');

select.addEventListener('change', function(){
    let choice = select.value;
    if (choice == 'Arial') {
        paragraph.style.fontFamily = 'Arial';
    } else if (choice == 'Times New Roman') {
    paragraph.style.fontFamily = 'Times New Roman';
    } else if (choice == 'Courier New') {
        paragraph.style.fontFamily = 'Courier New';
    }

});


size.addEventListener('change', function(){
    let choice = size.value;
    if (choice == 'small') {
        paragraph.style.fontSize = '12px';
    } else if (choice == 'medium') {
    paragraph.style.fontSize = '16px';
    } else if (choice == 'large') {
        paragraph.style.fontSize = '24px';
    }else if (choice == 'x-large') {
        paragraph.style.fontSize = '32px';
    }
});

underline.addEventListener('click', function(){
    if (underline.checked) {
        paragraph.style.textDecoration = 'underline';
    } else {
        paragraph.style.textDecoration = 'none';
    }
});

italic.addEventListener('click', function(){
    if (italic.checked) {
        paragraph.style.fontStyle = 'italic';
    } else {
        paragraph.style.fontStyle = 'normal';
    }
});

bold.addEventListener('click', function(){
    if (bold.checked) {
        paragraph.style.fontWeight = 'bold';
    } else {
        paragraph.style.fontWeight = 'normal';
    }
});




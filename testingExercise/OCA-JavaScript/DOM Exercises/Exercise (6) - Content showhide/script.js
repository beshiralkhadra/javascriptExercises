let show = document.getElementById('show');
let hide = document.getElementById('hide');
let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');


let showBtn = document.getElementById('showBtn');
let showBtn1 = document.getElementById('showBtn1');
let showBtn2 = document.getElementById('showBtn2');


let hideBtn = document.getElementById('hideBtn');
let hideBtn1 = document.getElementById('hideBtn1');
let hideBtn2 = document.getElementById('hideBtn2');



showBtn.addEventListener('click', function() {
    text.style.display = 'block';
    showBtn.style.display = 'none';
});

hideBtn.addEventListener('click', function() {
    text.style.display = 'none';
    showBtn.style.display = 'block';
});

showBtn1.addEventListener('click', function() {
    text1.style.display = 'block';
    showBtn1.style.display = 'none';
});

hideBtn1.addEventListener('click', function() {
    text1.style.display = 'none';
    showBtn1.style.display = 'block';
});

showBtn2.addEventListener('click', function() {
    text2.style.display = 'block';
    showBtn2.style.display = 'none';
});

hideBtn2.addEventListener('click', function() {
    text2.style.display = 'none';
    showBtn2.style.display = 'block';
});



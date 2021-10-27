// let pass = document.getElementById('password');
// let confirm_password = document.getElementById('confirm_password');
// let message = document.getElementById('message');
// let lengthPass = document.getElementById('length');
// let lengthPass2 = document.getElementById('length2');

//     var check = function() {
//     if (pass.value ==
//        confirm_password.value) {
//         message.style.color = 'green';
//         message.innerHTML = 'matching';
//     } else {
//         message.style.color = 'red';
//         message.innerHTML = 'not matching';
//     }
  
//     }

//     // password.onchange = check;
//     // confirm_password.onkeyup = check;

//     function lengthPassword() {
//       pass.value.length;
//        confirm_password.value.length;
//         if (pass >= 8) {
//            lengthPass.style.color = 'green';
//            lengthPass.innerHTML = 'OK';
//         } else {
//            lengthPass.style.color = 'red';
//            lengthPass.innerHTML = 'Minimum 8 characters';
//         }
//         if (confirm_password >= 8) {
//            lengthPass2.style.color = 'green';
//            lengthPass2.innerHTML = 'OK';
//         } else {
//            lengthPass2.style.color = 'red';
//            lengthPass2.innerHTML = 'Minimum 8 characters';
//         }
//     }

    // 
    
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm');
    let message = document.getElementById('message');
    let confirmMessage = document.getElementById('message2');
    let submit = document.getElementById('submit');


    password.addEventListener('keydown', function() {
        if (password.value.length < 5 ) {
            message.style.color = 'red';
            message.innerHTML = 'Too short';
        } else {
            message.style.color = 'green';
            message.innerHTML = 'OK';
            
        }
    });

    confirm_password.addEventListener('keyup', function() {
        if (confirm_password.value === password.value && confirm_password.value.length >= 5) {
            confirmMessage.style.color = 'green';
            confirmMessage.innerHTML = 'Good Pass';
            submit.style.display = 'block';
            

        } 
        else if(confirm_password.value !== password.value) {
            confirmMessage.style.color = 'red';
            confirmMessage.innerHTML = 'Password not matching';
            submit.style.display = 'none';

        } else {
            
        }
    });


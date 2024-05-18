document.addEventListener('DOMContentLoaded', () => {
    const que1 = document.querySelector('.que1');
    const que2 = document.querySelector('.que2');
    const inputQue1 = document.getElementById('que1');
    const inputQue2 = document.getElementById('que2');

    que1.addEventListener('click', () => {
        que1.style.backgroundColor = 'hsl(148, 38%, 91%)';
        que2.style.backgroundColor = ''; // Reset background color of que2
        inputQue1.checked = true; // Set the input as checked
    });

    que2.addEventListener('click', () => {
        que2.style.backgroundColor = 'hsl(148, 38%, 91%)';
        que1.style.backgroundColor = ''; // Reset background color of que1
        inputQue2.checked = true; // Set the input as checked
    });
});

function showSucMsg(){
    let sucmsg = document.querySelector('.success-msg');
    sucmsg.style.display = 'block';
}

function clearForm(){
    let form = document.querySelector('.form');
    form.reset();
}

function checkFormFunc(event) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let query1 = document.getElementById('que1');
    let query2 = document.getElementById('que2');
    let msg = document.getElementById('msg').value;
    let checkbox = document.getElementById('checkbox');
    let name_error = document.querySelector('.name-error');
    let lname_error = document.querySelector('.lname-error');
    let emailques_error = document.querySelector('.email-error');
    let que_error = document.querySelector('.que-error');
    let msg_error = document.querySelector('.msg-error');
    let checkbox_error = document.querySelector('.checkbox-error')

    name == '' ? (name_error.style.visibility = 'visible', event.preventDefault()) : name_error.style.visibility = 'hidden';
    lname == '' ? (lname_error.style.visibility = 'visible', event.preventDefault()) : lname_error.style.visibility = 'hidden';

    if (email == '' || !emailPattern.test(email)) {
        emailques_error.style.visibility = 'visible';
        event.preventDefault();
    } else {
        emailques_error.style.visibility = 'hidden';
    }

    if (!query1.checked && !query2.checked) {
        que_error.style.visibility = 'visible';
        event.preventDefault()
    } else {
        que_error.style.visibility = 'hidden';
    }

    msg == '' ? (msg_error.style.visibility = 'visible', event.preventDefault()) : msg_error.style.visibility = 'hidden';

    if (!checkbox.checked) {
        checkbox_error.style.visibility = 'visible';
        event.preventDefault()
    } else {
        checkbox_error.style.visibility = 'hidden';
    }

    if (name && lname && email && (query1.checked || query2.checked) && msg && checkbox.checked) {
        showSucMsg();
        event.preventDefault()
    }

    clearForm()
}

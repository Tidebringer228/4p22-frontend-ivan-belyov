'use strict';
document.getElementById('email').addEventListener('input' , (event) =>{
    event.target.style.borderColor = '#787878'
});
document.getElementById('password').addEventListener('input' , (event) =>{
    [event.target.style.borderColor,document.getElementById('password_repeat').style.borderColor] = ['#787878','#787878'];
});
document.getElementById('password_repeat').addEventListener('input' , (event) =>{
    [event.target.style.borderColor,document.getElementById('password').style.borderColor] = ['#787878','#787878'];
});
document.getElementById('registration_button').addEventListener('click' , (event) => {
    event.preventDefault();
    const mask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let repeat = document.getElementById('password_repeat');
    let email_att = document.getElementById('email-attention');
    let pass_att = document.getElementById('password-attention');
    let repeat_att = document.getElementById('repeat-attention');
    [email_att.style.visibility, pass_att.style.visibility, repeat_att.style.visibility] = ['visible', 'visible', 'visible'];
    [email.style.borderColor, pass.style.borderColor, repeat.style.borderColor] = ['#EE2424', '#EE2424', '#EE2424'];
    if (String(email.value) === ''){
        email_att.innerText = 'Поле обязательно для заполнения';
    } else if (!(mask.test(String(email.value).toLowerCase()))){
        email_att.innerText = 'Email введён некорректно';
    } else [email_att.style.visibility,email_att.innerText,email.style.borderColor]=['hidden', '', '#787878'];
    if (String(pass.value) === ''){
        pass_att.innerText = 'Поле обязательно для заполнения';
    } else if (String(pass.value).length<8){
        pass_att.innerText = 'Пароль должен содержать не менее 8 символов';
    } else [pass_att.style.visibility,pass_att.innerText,pass.style.borderColor]=['hidden', '', '#787878'];
    if (!(String(pass.value) === String(repeat.value))){
        repeat_att.innerText='Пароли не совпадают';
    } else [repeat_att.style.visibility,repeat_att.innerText,repeat.style.borderColor] = ['hidden', '', '#787878'];
    let gendervalue = document.getElementById('radio1').checked?'male':'female';
    let subcribevalue = document.getElementById('checkbox').checked?'yes':'no';
    if ((email_att.innerText + pass_att.innerText + repeat_att.innerText)===''){
        console.log({Email: email.value, Password: password.value, Gender:gendervalue, Selfabout:document.getElementById('selfabout').value, Subscribe:subcribevalue});
        console.log('Email:', email.value, '\nPassword:', password.value, '\nGender:', gendervalue, `\nSelfabout:<\n${document.getElementById('selfabout').value}\n>`, '\nSubscribe:', subcribevalue)
    } 
});
console.log("Travel form")
const user = document.getElementById('user')
const phone = document.getElementById('phone')
const email = document.getElementById('email')

let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

user.addEventListener('blur',()=>{
    console.log("your name is blurred");
    let rx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = user.value;
    console.log(rx,str);
    if(rx.test(str)){
        console.log("valid name")
        user.classList.remove('is-invalid');
        validName = true;
    }
    else{
        user.classList.add('is-invalid');
        validName = false;

    }
})
email.addEventListener('blur',()=>{
    console.log("your email is blurred");
    let rx = /^([\.\_a-zA-z0-9]+)@([0-9a-zA-Z]+).([A-Za-z]){2,7}$/;
    let str = email.value;
    console.log(rx,str);
    if(rx.test(str)){
        console.log("valid email")
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;

    }
})
phone.addEventListener('blur',()=>{
    console.log("your phone number is blurred");
    let rx = /^[(0-9)]{10}$/;
    let str = phone.value;
    console.log(rx,str);
    if(rx.test(str)){
        console.log("valid phone")
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})
let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("You have clicked the submit button");
    console.log(validPhone,validName,validEmail);

    if(validEmail && validName && validPhone){
        let failure = document.getElementById("failure");
        console.log("Everything is valid and now submitting the form");
        let success = document.getElementById("success");
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        let failure =document.getElementById("failure");
        console.log("There's must be any mistake");
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();

    }
})
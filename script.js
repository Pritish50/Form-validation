const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

    const sendData = ( sRate ,count) => {
        if(sRate === count){
            alert('Registration Success');
            swal("Good job!", "Registration Successful", "success");
           // location.href = `pritish.html?username=${usernameVal}`
        }
    }
   

   const  successMsg = () => {
      let formCon = document.getElementsByClassName('form-control');
       
      var count = formCon.length - 1;
       for( var i = 0; i< form.length; i++){
        if(formCon[i].className === "form-control success" ){
            var sRate = 0 + i;
            console.log(sRate);
          sendData(sRate , count);
        }else{
           return false;
        }
       }
   }

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
};

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 4) {
        setErrorMsg(username, 'Username must be at least 5 characters');
    } else {
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'enter your correct email');
    } else {
        setSuccessMsg(email);
    }

    if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number');
    } else {
        setSuccessMsg(phone);
    }

    if (passwordVal === "") {
        setErrorMsg(password, 'password cannot be blank');
    } else if (passwordVal.length <= 7) {
        setErrorMsg(password, 'password is not strong');
    } else if (passwordVal.toLowerCase() === 'password') {
        setErrorMsg(password, 'password cannot be "password"');
    } else if (passwordVal.toLowerCase() === usernameVal.toLowerCase()) {
        setErrorMsg(password, 'password cannot be the same as the username');
    } else {
        setSuccessMsg(password);
    }

    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'confirm password cannot be blank');
    } else if (passwordVal !== cpasswordVal) {
        setErrorMsg(cpassword, 'passwords do not match');
    } else {
        setSuccessMsg(cpassword);
    }
    successMsg();
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
   
}

const form = document.getElementById('form');
const username = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const alerts = document.getElementById('alerts');


function validacion() {
    let warnings = "";
    let validate= true;
    alerts.innerHTML = "";

    if(username.value.length<4){
        warnings += "The username must be at least 4 characters";
        validate = false;
    }
    if(password.value.length<8){
        warnings += "The password must be at least 8 characters";
        validate = false;
    }
    if(validate==false){
        alerts.innerHTML = warnings;
    }else{
        alerts.innerHTML = "The user has been created successfully";
    }
    return validate;
}
form.addEventListener('submit', (e)=>{
    if(validacion()){
      fill.submit();
    }else{
      e.preventDefault();
    }
  });
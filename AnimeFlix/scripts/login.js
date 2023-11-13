 const  form = document.getElementById('form');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const alerts = document.getElementById('alerts');

 function login() {
    let warnings = "";
    let enter = true;
    alerts.innerHTML = "";

    if(password.value.length < 8) {
        warnings += "The password must be at least 8 characters";
        enter = false;
    }
    if(enter==false) {
        alerts.innerHTML = warnings;
    }else{
        alerts.innerHTML = "Welcome";
    }
    return enter;
}
form.addEventListener('submit', (e)=>{
  if(login()){
    fill.submit();
  }else{
    e.preventDefault();
  }
});

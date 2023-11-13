const form = document.getElementById('form');
const username = document.getElementById('name');
const alert = document.getElementById('alerts');

function validacion(){
  let warning = ""
  let valido = true;
  alert.innerHTML = "";

  if(username.value.length < 4){
    warning += "El usuario es muy corto";
    valido = false;
  }
  if(valido == false){
    alert.innerHTML = warning;
  }else{
    alert.innerHTML = "Validacion exitosa";
  }
  return valido;
}

form.addEventListener('submit', (e)=>{
  if(validacion()){
    formulario.submit();
  }else{
    e.preventDefault();
  }
});
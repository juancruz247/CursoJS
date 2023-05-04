/*
al presionar el botón pedir la CLAVE (ayuda: es abc123)*/
function mostrar() {
  let password;
  let clave;

  password = "abc123";
  clave = prompt ("ingrese clave");

  while (clave != password) {
    clave = prompt("clave invalida. Reingrese la clave");
  }
  alert("bienvenido");
}

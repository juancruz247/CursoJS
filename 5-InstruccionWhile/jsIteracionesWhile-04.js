/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let num;

  num = parseInt(prompt("ingrese un numero entre 0 y 9"));
  
  while (9 < num || num < 0 || isNaN(num)) {
    num = parseInt(prompt("volve a intentar"));
  }

  document.getElementById("txtNumero").value = num;
}

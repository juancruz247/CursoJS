function mostrar() {
  let x;
  let promedio;
  let total;

x = 0
total = 0

 while(x <5){

  total += parseInt(prompt("ingrese un numero"));

x ++;   //x + 1

 }
 promedio = total / 5

 document.getElementById("txtSuma").value = total;
document.getElementById("txtPromedio").value = promedio;
 
}


  // numero1 = parseInt(prompt("ingrese numero 1"));
  // numero2 = parseInt(prompt("ingrese numero 2"));
  // numero3 = parseInt(prompt("ingrese numero 3"));
  // numero4 = parseInt(prompt("ingrese numero 4"));
  // numero5 = parseInt(prompt("ingrese numero 5"));

  // suma = numero1 + numero2 + numero3 + numero4 + numero5;
  // promedio = suma / 5;
  
  // document.getElementById("txtSuma").value = suma;
  // document.getElementById("txtPromedio").value = promedio;
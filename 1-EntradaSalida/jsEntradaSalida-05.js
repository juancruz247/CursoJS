/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
let nombre;
nombre = document.getElementById("txtNombre").value;
let edad;
edad = document.getElementById("txtEdad").value;
alert("tu nombre es " + nombre + " y tu edad es " + edad);
}

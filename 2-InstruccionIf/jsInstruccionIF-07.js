function mostrar()
// == IGUAL   != DESIGUAL
{
	let estadocivil;
	let edad;

	edad = parseInt(document.getElementById("txtEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadocivil != "Soltero"){
			alert("eres muy pequeño para no ser soltero")
		}
	



}
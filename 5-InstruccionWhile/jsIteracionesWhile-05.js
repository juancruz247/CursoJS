/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo;
  sexo = prompt("decime tu sexo").toLowerCase();
  sexo = sexo.toLowerCase
  while(sexo != "f" && sexo != "m"){
  sexo = prompt("intenta otra vez").toLowerCase();
  }
  document.getElementById("txtSexo").value = sexo;
}

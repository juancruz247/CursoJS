function mostrar() {
  let mes = document.getElementById("txtMes").value;
  switch (mes) {
    case "Julio":
    case "Agosto":
      alert("abrigate que hace frio");
      break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Junio":
      alert("falta para el invierno");
      break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      alert("ya paso el invierno");
      break;
  }
}

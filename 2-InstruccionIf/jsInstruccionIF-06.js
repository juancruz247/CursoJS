function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad < 13) {
    alert("sos niño");
  } else {
    if (edad > 17) {
      alert("sos adulto");
    } else {
      alert("sos adolescente");
    }
  }
}

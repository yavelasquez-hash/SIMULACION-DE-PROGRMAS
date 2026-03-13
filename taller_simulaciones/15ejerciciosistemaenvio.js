function envio(ciudad, compra) {

  if (compra > 100000) {
    console.log("Envío gratis a " + ciudad);
  } else {
    console.log("El envío tiene costo");
  }

}

envio("Cali", 90000);
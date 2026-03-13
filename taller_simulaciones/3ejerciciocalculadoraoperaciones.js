function calculadora(n1, n2, operacion) {

  let resultado;

  if (operacion == "sumar") {
    resultado = n1 + n2;
  } else {
    if (operacion == "restar") {
      resultado = n1 - n2;
    } else {
      if (operacion == "multiplicar") {
        resultado = n1 * n2;
      } else {
        console.log("Operación no válida");
      }
    }
  }

  console.log("Resultado: " + resultado);
}

calculadora(10, 5, "sumar");

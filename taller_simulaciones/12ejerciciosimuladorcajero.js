function cajero(saldo, retiro) {

  if (saldo >= retiro) {
    let nuevoSaldo = saldo - retiro;
    console.log("Nuevo saldo: " + nuevoSaldo);
  } else {
    console.log("Fondos insuficientes");
  }

}

cajero(300000, 50000);
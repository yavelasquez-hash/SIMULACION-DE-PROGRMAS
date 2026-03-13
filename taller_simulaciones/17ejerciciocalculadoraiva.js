function iva(precio) {
  let ivaValor = precio * 0.19;
  let total = precio + ivaValor;
  console.log("Precio: " + precio);
  console.log("IVA: " + ivaValor);
  console.log("Total: " + total);
}

iva(100000);
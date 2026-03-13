function descuento(precio, desc) {
  let descuentoTotal = precio * (desc / 100);
  let precioFinal = precio - descuentoTotal;
  console.log("Precio final: " + precioFinal);
}

descuento(100000, 10);
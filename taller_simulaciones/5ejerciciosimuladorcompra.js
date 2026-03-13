function compra(producto, precio, cantidad) {
  let total = precio * cantidad;
  console.log("Producto: " + producto);
  console.log("Total a pagar: " + total);
}

compra("Camisa", 50000, 2);
function ingresarMail() {
  alert("GAMING CENTER");
  let mail = prompt("Ingrese su mail");
  while (mail === "" || mail === null) {
    mail = prompt("Ingrese su nombre");
  }
}
function mostrarProductos() {
  let producto;
  do {
    producto = prompt(" ¿Que productos está buscando? \n1)Procesador INTEL \n2)Procesador AMD \n3)PC GAMER armada");
  } while (producto != 1 && producto != 2 && producto != 3);
  switch (producto) {
    case "1":
      return "Procesador INTEL";
    case "2":
      return "Procesador AMD";
    case "3":
      return "PC GAMER armada";
  }
}
function validarPrecio(producto) {
  if (producto === "Procesador INTEL") {
    return 10000;
  } else if (producto === "Procesador AMD") {
    return 15000;
  } else {
    return 150000;
  }
}
function cobrar(producto, precio) {
  alert(
    "Usted lleva el siguiente producto :" +
      producto.toUpperCase() +
      "\nPrecio $" +
      precio
  );
  }

function medioPago (){
  let abonar;
  do {
    abonar = prompt(" Seleccione medio de pago \n1) EFECTIVO/TRANSFERENCIA \n2) TARJETA DE CREDITO/DEBITO");
  } while (abonar != 1 && abonar != 2);
  switch (abonar) {
    case "1":
      return "Muchas gracias por su compra, en unos instantes recibira por mail el cupon para completar el pago";
    case "2":
      return "Muchas gracias por su compra, en unos instantes recibira por mail las instrucciones para completar el pago";
  }
}
function validarCompra(abonar) {
  if ( abonar === "EFECTIVO/TRANSFERENCIA") {
    return "Muchas gracias por su compra, en unos instantes recibira por mail el cupon para completar el pago";
  } else {
    return "Muchas gracias por su compra, en unos instantes recibira por mail las instrucciones para completar el pago";
  }
}

function instrucciones(abonar) {
  alert(
    "IMPORTANTE: \n" + abonar
  ) 
}

ingresarMail();
let productoSeleccionado = mostrarProductos();
let precioProd = validarPrecio(productoSeleccionado);
cobrar(productoSeleccionado, precioProd);
let abonar = medioPago();
let finalizarCompra = validarCompra(abonar);
instrucciones(abonar, finalizarCompra);



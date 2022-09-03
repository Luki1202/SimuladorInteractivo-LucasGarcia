const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  sa()
  actualizarCarrito()
})


stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt="">
  <h3>${producto.nombre}</h3>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas-fa-shopping-cart"></i></button> 
  `

  contenedorProductos.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
    
  })
})

const agregarAlCarrito = (prodId) => {
const exite = carrito.some (prod => prod.id === prodId)
if (exite) {
  const prod = carrito.map (prod => {
    if (prod.id === prodId){
    prod.cantidad++
    }
  })
} else {
  const item = stockProductos.find((prod) => prod.id === prodId)
  carrito.push(item)
  console.log(carrito)

}
  saAgregar()
  actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.className = ('productoEnCarrito')
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio:$ ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  })

  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

const sa = () => {
  Swal.fire({
    title: '¿Desea vaciar el carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'No, no quiero'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Carrito vaciado :('
      )
    } 
  })
}

const saAgregar = () => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    text: 'Producto agregado correctamente',
    icon: 'confirm',
    showConfirmButton: false,
    timer: 1500,
    background:  'rgb(255, 141, 20)',
    color: 'white'
  })
}
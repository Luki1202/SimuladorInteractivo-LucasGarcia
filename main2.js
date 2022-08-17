const contenedorProductos = document.getElementById('contenedor-productos')


let carrito = []



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
  const item = stockProductos.find((prod) => prod.id === prodId )
  carrito.push(item)
  console.log(carrito)
}


const btnCart =document.querySelector('.maquetado')
const contenedorCarritoProducto= document.querySelector('.contenedor-carrito-producto')

btnCart.addEventListener('click', () => {
    contenedorCarritoProducto.classList.toggle('carrito-oculto')
})



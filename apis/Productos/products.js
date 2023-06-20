
const lista = document.querySelector('#lista-productos')

const ENDPOINT = 'http://localhost:3000/'
    fetch(ENDPOINT + 'Ecommerce/getproducts')
        .then((response)=>response.json())
        .then(response =>{
            console.log(response);
            response.map((data) => lista.innerHTML += crearCard(data.imagen, data.nombreProducto, data.descripcion, data.cantidad, data.precio))
        }) 

const crearCard = (imagen, nombre, descripcion, cantidad, precio) => `

<div class="p-5 col-12 col-sm-3">
    <div class="card text-center mb-3" style="width: 18rem;">
        <img src="${imagen}" class="img-fluid" alt="...">
            <div class="card-body">
                <h3 class="card-title">${nombre}</h3>
                <p class="card-text">Descripción: ${descripcion}</p>
                <p class="card-text">Cantidad: ${cantidad}</p>
                <p class="card-text">Precio: ${precio}</p>
                <a href="#" class="btn btn-primary">Actualizar</a>
            </div>
    </div>
</div>`
        




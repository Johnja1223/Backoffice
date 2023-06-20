//Obtener los datos del Api
function ObtenerDatos(){
    return new Promise ((resolve, reject)=>{
        $.getJSON(
            "http://localhost:3000/Ecommerce/getcategory",
            (data) => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Error al obtener los datos");
                }
            }
        );
    });
}

//Funcion para ordenar los datos alfabeticamente por nombre
function OrdenarDatos(data){
    return data.sort((a, b)=>{
        return a.nombreCategoria.localeCompare(b.nombreCategoria);
    });
}

//Funcion para crear la Card con los datos de un producto
function CrearCard(Categoria) {
    return`
    <div class="p-5 col-12 col-sm-3">
            <div class="card text-center mb-3" style="width: 18rem;">
            <i class="fa fa-arrows-alt fa-5x"></i>            
                <div class="card-body">
                    <h3 class="card-title">\ ${Categoria.id}</h3>
                    <p class="card-text">Nombre:\ ${Categoria.nombreCategoria}</p>
                    <p class="card-text">Estado:\ ${Categoria.id_status}</p>
                    <a href="#" class="btn btn-primary">Actualizar</a>
                </div>
            </div>

    </div>
   `;
}

//Función principal para cargar los datos y mostrar en cards
async function cargarDatos(){
    try{
        const datos = await ObtenerDatos();
        const datosOrdenados = OrdenarDatos(datos);
        let cards = "";

        datosOrdenados.forEach((Categoria) => {
            cards += CrearCard(Categoria);
        });
        $("#cardsContainer").html(cards);
        $("#mensaje").text("API consumida correctamente!");
   }catch (error) {
    console.error(error);
   }
}

//Evento click para el boton "Cargar Datos"
$('#cargarDatos').on("click", cargarDatos);

//Obtener el boton
const btnCargarDatos = document.getElementById("cargarDatos");

//Agregar el listener de eventos "clic"
btnCargarDatos.addEventListener("click", function (){
    const animationElement = document.querySelector(".btn-warning");
    animationElement.classList.toggle("paused");
});



        




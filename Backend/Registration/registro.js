//Bloque de codigo Api dj-rest-auth, para el registro de usuarios en la base de datos
const form = document.querySelector(".form");
const usernameInput = form.querySelector("input[type='username']");
const emailInput = form.querySelector("input[type=email]");
const password1Input = form.querySelector("input[type='password1']");
const password2Input = form.querySelector("input[type='password2']");
const submitButton = form.querySelector(".submit");
const messageElement = document.querySelector(".results")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password1 = password1Input.value;
    const password2 = password2Input.value;
    //Eliminar mensajes de error anteriores
    const errorElements = form.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.remove();
    });

    try {
        //validar datos del formulario 
        if (!username || !email || !password1 || password2) {
            throw new Error("Por favor, llenar todos los campos");
        }
        if (password1 !== password2){
            throw new Error("Las contraseñas no coinciden");
        }
    // Enviar datos del formulario para el login
        const response = await fetch("http://localhost:3000/auth/registration/", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password1: password1,
            password2: password2,
         }),
    });
    

    // Validar respuesta de la solicitud
    if (!response.ok) {
        if (response.status === 400) {
            const data = await response.json();
            const errors = data;
            if(errors.username) {
                const error = errors.username[0];
                const errorElement = document.createElement("p");
                errorElement.textContent = "El nombre de usuario ya existe";
                errorElement.style.color ="red";
                errorElement.classList.add("error");
                usernameInput.parentNode.appendChild(errorElement);
            }
            if (errors.email) {
                const error =errors.email[0];
                const errorElement = document. createElement("p");
                errorElement. textContent = "El correo ya existe";
                errorElement.style.color ="red";
                errorElement.classList.add("error");
                emailInput.parentNode.appendChild(errorElement);
            }
            if (errors.password1){
                const error = errors.password1[0];
                const errorElement = document. createElement("p");
                errorElement.textContent= "Contraseñan muy corta, mínimo 8 caracteres";
                errorElement.style.color ="red";
                errorElement.classList.add("error");
                password1Input.parentNode.appendChild(errorElement);
            }
         throw new Error("Error de validción");
    }
    throw new Error("Error en la solicitud");
    }
    localStorage["key="]
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro Exitoso",
        showConfirmButton: true,
        
    });
} catch (error) {
    messageElement.textContent =error.message;
    messageElement.style.color = "red";
    messageElement.style.fontWeight ="bold";
}
});








/* Función para escribir el error en la sección determinada. */
function printError(elementId, message){
    document.getElementById(elementId).innerHTML = message
}

/* Función para validar el input de cada elemento en el formulario. */
function validarInput(){
    /* Variables */
    var textboxIDUsuario = document.getElementById("inputIDUsuario")
    var selectPais = document.getElementById("inputPais")
    var textboxNombre = document.getElementById("inputNombre")
    var textboxApellido = document.getElementById("inputApellido")
    var textboxDireccion = document.getElementById("inputDireccion")
    var textboxCedula = document.getElementById("inputCedula")
    var textboxEmail = document.getElementById("inputEmail")
    var textboxContrasena = document.getElementById("inputContrasena")
    var textboxVerContrasena = document.getElementById("inputVerContrasena")
    var textboxTelefono = document.getElementById("inputTelefono")

    const inicioDireccion = ["cll", "cra", "av", "anv", "trans"]
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    const regexContra1 = /[A-Z]/
    const regexContra2 = /[a-z]/
    const regexContra3 = /[0-9]/

    /* Validar ID */
    if (textboxIDUsuario.value == ""){
        printError("idErr", "Ingrese su ID.")
    } else {
        printError("idErr", "")
    }

    /* Validar País */
    var selectedPais = selectPais.options[selectPais.selectedIndex].value
    if (selectedPais == "None"){
        printError("paisErr", "Seleccione un país.")
    } else {
        printError("paisErr", "")
    }

    /* Validar Nombre */
    if (textboxNombre.value == ""){
        printError("nombreErr", "Ingrese su(s) nombre(s).")
    } else {
        if (textboxNombre.value.length > 25){
            printError("nombreErr", "El nombre no debe superar 25 caracteres.")
        } else {
            printError("nombreErr", "")
        }
    }

    /* Validar Apellido */
    if (textboxApellido.value == ""){
        printError("apellidoErr", "Ingrese su(s) apellido(s).")
    } else {
        if (textboxApellido.value.length > 25){
            printError("apellidoErr", "El apellido no debe superar 25 caracteres.")
        } else {
            printError("apellidoErr", "")
        }
    }

    /* Validar Dirección */
    if (textboxDireccion.value == ""){
        printError("direccionErr", "Ingrese su dirección.")
    } else {
        if (inicioDireccion.some(inicioDireccion => textboxDireccion.value.toLowerCase().startsWith(inicioDireccion))){
            printError("direccionErr", "")
        } else {
            printError("direccionErr", "La dirección debe iniciar con: cll, cra, av, anv, trans.")
        }
    }

    /* Validar Cedula */
    /* Primero, una función para verificar que contenga los caracteres. */

    if (textboxCedula.value == ""){
        printError("cedulaErr", "Ingrese su cédula.")
    } else {
        if (textboxCedula.value.length > 20 || textboxCedula.value.length < 10){
            printError("cedulaErr", "La cédula debe contener entre 10 y 20 caracteres..")
        } else {
            if (specialChars.test(textboxCedula.value)){
                printError("cedulaErr", "La cédula no puede contener caracteres especiales.")
            } else {
                printError("cedulaErr", "")
            }
        }
    }

    /* Validar Email */
    if (textboxEmail.value == ""){
        printError("emailErr", "Ingrese su email.")
    } else {
        if (textboxEmail.value.length > 120){
            printError("emailErr", "El email no puede contener más de 120 caracteres.")
        } else {
            printError("emailErr", "")
        }
    }

    /* Validar Contraseña */
    if (textboxContrasena.value == ""){
        printError("contrasenaErr", "Ingrese una contraseña.")
    } else {
        if (textboxContrasena.value.length < 15 || textboxContrasena.value.length > 20){
            printError("contrasenaErr", "La contraseña debe tener entre 15 y 20 caracteres.")
        } else if (!regexContra1.test(textboxContrasena.value) && !regexContra2.test(textboxContrasena.value) && !regexContra3.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una mayúscula, una minúscula y un número.")
        } else if (!regexContra1.test(textboxContrasena.value) && !regexContra2.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una mayúscula y una minúscula.")
        } else if (!regexContra2.test(textboxContrasena.value) && !regexContra2.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una minúscula y un número.")
        } else if (!regexContra1.test(textboxContrasena.value) && !regexContra3.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una mayúscula y un número.")
        } else if (!regexContra1.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una mayúscula.")
        } else if (!regexContra2.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo una minúscula.")
        } else if (!regexContra3.test(textboxContrasena.value)){
            printError("contrasenaErr", "La contraseña debe tener mínimo un número.")
        } else {
            printError("contrasenaErr", "")
        }
    }

    /* Validar Validación de Contraseña */
    if (textboxContrasena.value == ""){
        printError("vercontrasenaErr", "Valide su contraseña.")
    } else {
        if (textboxContrasena.value != textboxVerContrasena.value){
            printError("vercontrasenaErr", "Las contraseñas no coinciden.")
        } else {
            printError("vercontrasenaErr", "")
        }
    }
}

function showGustos(){
    const checkGustos = document.getElementById("isGustos")

    if (checkGustos.checked){
        checkGustos.style.display="block"
    } else {
        checkGustos.style.display="none"
    }
}
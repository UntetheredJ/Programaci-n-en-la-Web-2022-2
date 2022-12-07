var isEnfermedadesOpen = false
var isContagiosasOpen = false

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

var textboxNombre = document.getElementById("inputNombreUsuario")
var textboxApellido = document.getElementById("inputApellidoUsuario")
var textboxFechaNacimiento = document.getElementById("inputFechaNacUsuario")
var textboxEmail = document.getElementById("inputEmailUsuario")
var textboxContrasena = document.getElementById("inputContrasenaUsuario")
var textboxVerContrasena = document.getElementById("inputConfirmContrasenaUsuario")

var textboxEnfermedades = document.getElementById("inputEnfermedadesUsuario")

var camposCorrectos = {
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    confirmpassword: false,
}

/* Imprimir el error */
function printError(elementId, message){
    document.getElementById(elementId).innerHTML = message
}

/* Validación de inputs en el formulario */
const validarFormulario = (e) => {
    e.preventDefault()
    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let fechan = new Date().getFullYear() - new Date(textboxFechaNacimiento.value).getFullYear()
    const regexContra1 = /[A-Z]/
    const regexContra2 = /[a-z]/
    const regexContra3 = /[0-9]/

    /* Validar Nombre */
    if (textboxNombre.value == ""){
        printError("nombreErr", "Ingrese su(s) nombre(s).")
        camposCorrectos.nombre = false
    } else {
        if (textboxNombre.value.length > 25){
            printError("nombreErr", "El nombre no debe superar 25 caracteres.")
            camposCorrectos.nombre = false
        } else {
            printError("nombreErr", "")
            camposCorrectos.nombre = true
        }
    }

    /* Validar Apellido */
    if (textboxApellido.value == ""){
        printError("apellidoErr", "Ingrese su(s) apellido(s).")
        camposCorrectos.apellido = false
    } else {
        if (textboxApellido.value.length > 25){
            printError("apellidoErr", "El apellido no debe superar 25 caracteres.")
            camposCorrectos.apellido = false
        } else {
            printError("apellidoErr", "")
            camposCorrectos.apellido = true
        }
    }

    /* Validar Email */
    if(!regexEmail.test(textboxEmail.value)){
        printError("emailErr", "El email no es válido.")
        camposCorrectos.email = false
    } else {
        printError("emailErr", "")
        camposCorrectos.email = true
    }

    /* Validar Contraseña */
    if (textboxContrasena.value == ""){
        printError("contrasenaErr", "Ingrese una contraseña.")
        camposCorrectos.password = false
    } else {
        camposCorrectos.password = false
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
            camposCorrectos.password = true
        }
    }

    /* Validar Confirmación de Contraseña */
    if (textboxContrasena.value == ""){
        printError("confirmContrasenaErr", "Valide su contraseña.")
        camposCorrectos.confirmpassword = false
    } else {
        if (textboxContrasena.value != textboxVerContrasena.value){
            printError("confirmContrasenaErr", "Las contraseñas no coinciden.")
            camposCorrectos.confirmpassword = false
        } else {
            printError("confirmContrasenaErr", "")
            camposCorrectos.confirmpassword = true
        }
    }
}

/* Validar formulario en cada input. */
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

/* Verificar sí el formulario fue enviado o no */
form.addEventListener("submit", (e) => {
    if (camposCorrectos.nombre && camposCorrectos.apellido && camposCorrectos.email && camposCorrectos.password && camposCorrectos.confirmpassword){
        alert("El formulario se ha enviado con éxito.")
    } else {
        alert("Complete correctamente el formulario.")
    }
})

/* Ocultar la sección de enfermedades al presionar el botón de borrar. */
form.addEventListener("reset", (e) => {
    $('.sectionEnfermedades').css('display', 'none')
    $('.sectionContagiosas').css('display', 'none')
})

/* Función para no refrescar la página al hacer Submit */
$(document).ready(function() {
    $(document).on('submit', '#form', function() {
        return false;
    });
});

function showEnfermedades(){
    var checkboxEnfermedades = document.getElementById("checkboxEnfermedades")
    
    if (checkboxEnfermedades.checked){
        isEnfermedadesOpen = true
        $('.sectionEnfermedades').css('display', 'block')
    } else {
        isEnfermedadesOpen = false
        $('.sectionEnfermedades').css('display', 'none')
    }
}

function showContagiosas(){
    var checkboxContagiosas = document.getElementById("checkboxContagiosas")

    if(checkboxContagiosas.checked){
        $('.sectionContagiosas').css('display', 'block')
    } else {
        $('.sectionContagiosas').css('display', 'none')
    }
}
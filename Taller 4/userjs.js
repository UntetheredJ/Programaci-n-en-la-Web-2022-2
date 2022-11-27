
function printError(elementId, message){
    document.getElementById(elementId).innerHTML = message
}

function validarLongitud(){
    /* Variables */
    var textboxIDUsuario = document.getElementById("inputIDUsuario")
    var selectPais = document.getElementById("inputPais")
    var textboxNombre = document.getElementById("inputNombre")
    var textboxApellido = document.getElementById("inputApellido")
    var textboxDireccion = document.getElementById("inputDireccion")
    var textboxCedula = document.getElementById("inputCedula")

    let inicioDireccion = ["cll", "cra", "av", "anv", "trans"]

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
    if (textboxCedula.value == ""){
        printError("cedulaErr", "Ingrese su cédula.")
    } else {
        if (textboxCedula.value.length > 20 || textboxCedula.value.length < 10){
            printError("cedulaErr", "La cédula debe contener entre 10 y 20 caracteres..")
        } else {
            printError("cedulaErr", "")
        }
    }

    

}
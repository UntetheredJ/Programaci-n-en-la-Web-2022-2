var isEnfermedadesOpen = false
var isContagiosasOpen = false

function printError(elementId, message){
    document.getElementById(elementId).innerHTML = message
}

form.addEventListener("submit", e=>{
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let fechan = new Date().getFullYear() - new Date(fecha.value).getFullYear()
})

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
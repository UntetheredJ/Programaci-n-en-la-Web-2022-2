var isEnfermedadesOpen = false
var isContagiosasOpen = false

function printError(elementId, message){
    document.getElementById(elementId).innerHTML = message
}

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
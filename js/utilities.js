function convertInputValueById(id){
    const element = document.getElementById(id);
    const elementValue = element.value;
    const elementValueConvert = parseFloat(elementValue);
    element.value = '';
    return elementValueConvert;
}

function convertTextValueById(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueConvert = parseFloat(elementValue);
    element.value = '';
    return elementValueConvert;
}

function setTextElementValueById(id, newAmount){
    const updatingElement = document.getElementById(id);
    updatingElement.innerText = newAmount;
}
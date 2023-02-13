function getinputFieldValueById (inputId){
    const inputField =document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
  
}
function getTextFieldValueById (inputId){
    const inputField =document.getElementById(inputId);
    const inputFieldValueString = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value ='';
    return inputFieldValue;
    
}
function setElementValueById (inputId,newValue){
    const previousDeposit =document.getElementById(inputId);
    previousDeposit.innerText=newValue;
}

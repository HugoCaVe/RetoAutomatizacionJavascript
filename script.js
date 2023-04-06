
const $form = document.querySelector('#form')

$form.addEventListener('submit', processInformation)

var name1 = document.getElementById('name');
var amount = document.getElementById('amount');
var documentType = document.getElementById('documentType');
var error = document.getElementById('error');
error.style.color='red';

function processInformation(event){
    event.preventDefault()
    console.log(name1.value)
    console.log(documentType.value)
    if(documentType.value === "PST" || documentType.value ===  "PEP" || documentType.value ===  "RC" || documentType.value ===  "TDI"){
        alert("Muchas gracias por su interés, pero por su tipo de documento no es posible invertir en este momento");
        cleanForm();
    } else {
        validationInvest();
    }
}

function validationInvest(){
  console.log(amount.value)
    if(amount.value < 0){
        alert("Ingrese un monto válido que sea mayor que 0");
    } else {
        if(amount.value >= 1 && amount.value <= 200000){
        alert("El monto mínimo de inversión es de $200.000");
        } else {
            if(amount.value >= 200001 && amount.value <= 5000000){
            alert("Te recomendamos el producto de CDT. La ganancia estimada será del 7% sin importar el plazo");
            } else {
                if(amount.value >= 5000001 && amount.value <= 25000000){
                    alert("Te recomendamos el producto de Acciones. La ganancia estimada será del 12% sin importar el plazo");
                } else {
                    if(amount.value >= 25000001){
                    alert("Te recomendamos el producto de Fondos de Inversión. La ganancia estimada será del 20% sin importar el plazo");
                    
                   }
                }
            }
        }    
    }
    cleanForm();
}

function cleanForm() {
    document.getElementById("form").reset();
}
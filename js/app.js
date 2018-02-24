const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válidos");
    } else {
        console.log("datos inválidos");
    }
});

const validateCardDetails = element => {
  //sacando el valor de los inputs
  let array = Array.from(element)
  console.log(array);
  const valueCard = array[0].value;
  //console.log(valueCard);
  const valueDate = array[1].value;
  //console.log(valueDate);
  const valueCvv = array[2].value;
  //console.log(valueCvv);
  const valueName = array[3].value;
  //console.log(valueName);
  //llamando las funciones
  validateCard(valueCard);
  validateDate(valueDate);
  validateCvv(valueCvv);
  validateName(valueName);
}

//funcion para validar el numero de la tarjeta
const validateCard = number => {
  let card = number;
  //5499490527099139
  let numberCard = card.split("");

//nombrando variable evenNumber para guardar valor de los numeros pares de reverse, y haciendo un for para obtener los numeros pares inicializando desde 1 e incrementando de 2 en 2
let evenNumber = [""]; //variable para guardar los números pares
evenNumberCard(card)
const evenNumberCard = number => {


 for (let k=1; k<numberCard.length; k=k+2){
      evenNumber += numberCard[k];
      var even = evenNumber.split(""); //convirtiendo a array la variable evenNumber
     //var multiply = (even.length) * (2);

 }

 }

 //haciendo un for empezando de 0, tomando como condición la longitud del array e incrementando de uno en uno
  for(var i=0; i<numberCard.length; i++){
      var item = numberCard.pop(); //nombrando variable item para guardar el elemento eliminado con el metodo .pop del array
        numberCard.splice(i,0,item); //aplicando metodo .splice empezando desde el indice, diciendo que no elimine nada y que agregue el elemento eliminado de la variable item, y guardar el array invertido en una nueva variable, reverse
      var reverse = numberCard;
     //nombrando variable evenNumber para guardar valor de los numeros impares de reverse, y haciendo un for para obtener los numeros impares incrementando de 2 en 2
     var oddNumber = ""; //variable para guardar los números impares
     //var odd = oddNumber("");

    for (var j=0; j<reverse.length; j=j+2){
        oddNumber += reverse[j];
          var odd = oddNumber.split("");
    }
      for (var y=0; y<even.length; y++){
            var multiply = even[0,1,2,3,4] * 2;

      }

 }
console.log(card);
//console.log("hola",numberCard);
console.log(reverse);
console.log(oddNumber);
console.log(evenNumber);
console.log("pares",even);
console.log("impares",odd);
console.log(multiply);

}

//funcion para validar fecha
const validateDate = number => {

}

//funcion para validar cvv
const validateCvv = number => {
  if (number < 1000 && number > 99) {
    console.log("true");
  } else {
    console.log("false");
  }
}

//funcion para validar nombre
const validateName = string => {

}

validateCardDetails(form);

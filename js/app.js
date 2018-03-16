const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form) == true) {
        console.log("Todos los datos son válidos");
    } else {
        console.log("Hay datos inválidos");
    };
});

//funcion para validar el numero de la tarjeta
const validateCard = luhn => {
    //5499490527099139(numero de tarjeta para comprobar función)
    if (luhn.length < 16 || luhn == '' || luhn == ' ') { //Si el input esta vacio o es menor a 16 digitos entonces cambiar el color del input
    } else {
        const numberCardInverse = luhn.split('').reverse(); //se declara una const que guardara los valores ingresados en el input agrgando el metodo split para crear un array separandolos con comillas y el metodo reverse para poner los elementos al reves
        //console.log("reverse", numberCardInverse);
        const evenNumber = numberCardInverse.map((element, index) => { //Se utiliza metodo map para iterar el arreglo de elementos, obteniendo elemento e indice
            if (index % 2 !== 0) { //Se localizan los numeros impares del arreglo
                evenMultiply = element * 2; //Se multiplican por 2 los numeros impares
                //console.log("multiplicacion", evenMultiply)
                if (evenMultiply >= 10) { //condicion para saber si en numero multiplicado es igual o mayor a 10(dos digitos)
                    let evenSum = evenMultiply.toString(); //Entonces se aplica metodo toString para obtener el indice de estos numeros guardandolos en otra variable
                    //console.log("suma digitos entre si", evenSum);
                    let sumOfDigits = parseInt(evenSum[0]) + parseInt(evenSum[1]); //se convierte en numero cada string para poder sumarlos entre si
                    //console.log("parseint", sumOfDigits)
                    return sumOfDigits; //retorna la suma de los numeros
                }
                return evenMultiply; //si no cumple con la condicion de que sea mayor a 10 retorna el elemento multiplicado (un digito)
            } else {
                return parseInt(element); //si no cumple con ninguna de las condiciones anteriores retorna el elemento par
            };
        });
        const sumEvenOdd = evenNumber.reduce((element, initialize) => element + initialize); //se declara funcion para el arreglo de elementos anterior para sumar todos lo elementos pares e impares dentro del arreglo
        if (sumEvenOdd % 10 === 0) { //si el modelo de los elementos del arreglo es igual a 0 entonces cumplir la siguiente sentencia
            console.log('Tu tarjeta es válida'); //Si el residuo de dividirlo entre 10 es 0
            //luhn.style.backgroundColor = "blue";
            return true;
        } else {
            console.log('Tu tarjeta es inválida'); //Si el residuo de dividirlo entre 10 es 0
            //luhn.style.backgroundColor = "red";
            return false;
        };
    };
};

//funcion para validar fecha
const validateDate = number => {
    const month = number.slice(0, 2);
    const year = number.slice(3, 5);

    const numberMonth = parseInt(month);
    const numberYear = parseInt(year);

    if (numberMonth < 100 && numberMonth > 9 && numberYear < 100 && numberYear > 9) {
        console.log("date true");
        number.style.backgroundColor = "blue";
        return true;
    } else {
        console.log("date false");
        number.style.backgroundColor = "red";
        return false;
    };
};

//funcion para validar cvv
const validateCvv = number => {
    if (number >= 000 && number < 1000) {
        console.log("cvv true");
        number.className = "success"
        return true;
    } else {
        console.log("cvv false");
        number.className = "error"
        return false;
    };
};

//funcion para validar nombre
const validateName = string => {
    const alphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let name = string.toLowerCase();
    const array = name.split(' ');
    //console.log("array", array);
    for (i = 0; i < name.length; i++) {
        if (array !== "" && array.length > 2 && array.length < 4) {
            console.log('name true');
            string.className = 'success';
            name.className = "success";
            return true;
        } else if (name.length >= 30) {
            console.log('name true');
            //console.log("si entra")
            name.className = "success";
            return true;
        } else if (alphabeth.indexOf(name.charAt(i), 0) != -1) {
            //console.log("si entra")
            console.log('name true');
            name.className = "success";
            return true;
        } else {
            string.className = 'error';
            console.log('name false');
            name.className = "error";
            return false;
        };
    };
};

const validateCardDetails = element => {
    //sacando el valor de los inputs
    let array = Array.from(element)
        //console.log(array);
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
    //console.log('dta', validateCard(valueCard), validateDate(valueDate), validateCvv(valueCvv), validateName(valueName))
    if (validateCard(valueCard) == true && validateDate(valueDate) == true && validateCvv(valueCvv) == true && validateName(valueName) == true) {
        return true;
        console.log("todo valido")
    } else {
        return false;
        console.log("todo invalido")
    };
};
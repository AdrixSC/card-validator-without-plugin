const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válidos");
    } else {
        console.log("datos inválidos");
    };
});

//funcion para validar el numero de la tarjeta
const validateCard = luhn => {
    //5499490527099139(numero de tarjeta para comprobar función)
    if (luhn.length < 16 || luhn == '' || luhn == ' ') { //Si el input esta vacio o es menor a 16 digitos entonces cambiar el color del input
        //console.log("num false")
        return borderColor = document.getElementById("cn").style.borderColor = "#f73131";
    } else {
        const numberCardInverse = luhn.split('').reverse(); //se declara una const que guardara los valores ingresados en el input agrgando el metodo split para crear un array separandolos con comillas y el metodo reverse para poner los elementos al reves
        const evenNumber = numberCardInverse.map((element, index) => { //Se utiliza metodo map para iterar el arreglo de elementos, obteniendo elemento e indice
            if (index % 2 !== 0) { //Se localizan los numeros impares del arreglo
                evenMultiply = element * 2; //Se multiplican por 2 los numeros impares
                //console.log("multiplicacion", evenMultiply)
                if (evenMultiply >= 10) { //condicion para saber si en numero multiplicado es igual o mayor a 10(dos digitos)
                    let evenSum = evenMultiply.toString(); //Entonces se aplica metodo toString para obtener el indice de estos numeros guardandolos en otra variable
                    parseInt(evenSum[0]) + parseInt(evenSum[1]); //se convierte en numero cada string para poder sumarlos entre si
                    //console.log("suma", evenSum)
                    return evenSum; //retorna la suma de los numeros
                }
                return evenMultiply; //si no cumple con la condicion de que sea mayor a 10 retorna el elemento multiplicado (un digito)
                return true;
            } else {
                //console.log(element)
                return parseInt(element); //si no cumple con ninguna de las condiciones anteriores retorna el elemento par
                return false;
            };
        });
        const sumEvenOdd = evenNumber.reduce((element, initialize) => element + initialize); //se declara funcion para el arreglo de elementos anterior para sumar todos lo elementos pares e impares dentro del arreglo
        if (sumEvenOdd % 10 === 0) { //si el modelo de los elementos del arreglo es igual a 0 entonces cumplir la siguiente sentencia
            //console.log("suma pares con impares", sumEvenOdd)
            console.log('Tu tarjeta es válida'); //Si el residuo de dividirlo entre 10 es 0
            return borderColor = document.getElementById("cn").style.borderColor = "#46ed3d"; //Si el residuo de dividirlo entre 10 si es 0
            return true;
        } else {
            //console.log("suma pares con impares else", sumEvenOdd)
            console.log('Tu tarjeta es inválida'); //Si el residuo de dividirlo entre 10 es 0
            return borderColor = document.getElementById("cn").style.borderColor = "#f73131"; //Si el residuo de dividirlo entre 10 no es 0
            //return false;
        };
    };
};

//funcion para validar fecha
const validateDate = number => {
    let month = number.substring(0, 2);
    let year = number.substring(2, 4);
    console.log("number", month, year);
    let numberDate = [];
    numberDate.push(month);
    numberDate.push(year);
    console.log("monthyear", numberDate);
    let numberDateMonth = numberDate[0];
    let numberDateYear = numberDate[1];
    console.log("numberdate", number);
    if (number < 10000 && number > 999) {
        console.log("date true");
        //return borderColor = document.getElementById("cn").style.borderColor = "#46ed3d";
        //return true;
    } else {
        console.log("date false");
        //return borderColor = document.getElementById("cn").style.borderColor = "#f73131";
        //return false;
    };

};

//funcion para validar cvv
const validateCvv = number => {
    if (number < 1000 && number > 99) {
        console.log("cvv true");
        return borderColor = document.getElementById("cn").style.borderColor = "#46ed3d";
        return true;
    } else {
        console.log("cvv false");
        return borderColor = document.getElementById("cn").style.borderColor = "#f73131";
        return false;
    };
};

//funcion para validar nombre
const validateName = string => {
    const alphabeth = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let name = string.toLowerCase();
    const array = name.split(' ');
    console.log("array", array);
    for (i = 0; i < name.length; i++) {
        if (array !== "" && array.length > 2 && array.length < 4) {
            string.className = 'success';
            console.log('nametrue');
            return true;
        } else if (name.length >= 30) {
            console.log("si entra")
            return true;
        } else if (alphabeth.indexOf(name.charAt(i), 0) != -1) {
            console.log("si entra")
            return true;
        } else {
            string.className = 'error';
            console.log('name false');
            return false;
        };

    }

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
    if (validateCard == true && validateDate == true && validateCvv == true && validateName == true) {
        console.log("todo valido")
    } else {
        console.log("todo invalido")
    }
};

validateCardDetails(form);
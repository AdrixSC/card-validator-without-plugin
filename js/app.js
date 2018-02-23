const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válidos");
    } else {
        console.log("datos inválidos");
    }
});

function validateCardDetails(element) {
    //escribe tu código aqui
}
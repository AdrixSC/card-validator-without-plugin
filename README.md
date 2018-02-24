# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

---

La función debe recibir un elemento DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
}
```

A la hora de hacer las validaciones, tu funcion debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.

Usar el algoritmo de Luhn, el cual únicamente usa los numeros de la tarjeta de crédito. **No** usa el código de verificacion, fecha de vencimiento , el nombre, ni la dirección.

#### Cosas a considerar:

1. Necesitas usar métodos de arreglo (.forEach, .map,etc.) sin embargo, estos metodos son para **arreglos**. Si yo hago:

```javascript
const form = document.querySelector("form");
```

¿Tengo un arreglo? ¿Algo diferente? ¿Cómo le hago para implementar metodos de arreglo en otras cosas que no son arreglos?

2. La solucion se tiene que hacer **con ES6** con los temas vistos en clase.


# Mi readme

1. Recibir elemento DOM
- Jalar el elemento de html y pasarlo como argumento en la funcion donde se va a  armar la logica
element.getElementById(el elemento es el form completo)

2. Validar fecha
- que no esté vacio
- que el numero sea futuro
- que sean dos digitos de año y dos de mes
- que sean solo numeros
- que no sean numeros negativos
- el mes no puede ser mayor a 12

3. Codigo de verificacion
- que no esté vacio
- que sean solo 3 digitos
- que sean solo numeros
- que sean numeros positivos
- que sean del 100 al 199

4. Validar nombre completo
- que sea string
- mayusculas y minusculas
- no sea string vacio
- minimo 2 palabras
- no empiece con espacios (trim)
- cada palabra maximo con 30 caracteres

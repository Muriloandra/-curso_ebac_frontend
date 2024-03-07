const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numberOneInput = document.getElementById("typeA");
  const numberTwoInput = document.getElementById("typeB");

  const numberOne = parseFloat(numberOneInput.value);
  const numberTwo = parseFloat(numberTwoInput.value);

  const tudoCerto = document.querySelector(".okMessage");
  const numInvalido = document.querySelector(".invalidNumber");

  tudoCerto.textContent = "";
  numInvalido.textContent = "";

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    numInvalido.textContent = "Por favor, insira números válidos.";
    numInvalido.style.display = "block";
  } else if (numberOne < numberTwo) {
    tudoCerto.textContent = `Número A: ${numberOne} é menor que Número B: ${numberTwo}!`;
    tudoCerto.style.display = "block";
  } else {
    numInvalido.textContent = "O número A deve ser menor que o Número B!";
    numInvalido.style.display = "block";
  }

  // Limpe os campos de entrada
  numberOneInput.value = "";
  numberTwoInput.value = "";
});

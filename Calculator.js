const Nmb0 = document.getElementById("Nmb0");
const Nmb1 = document.getElementById("Nmb1");
const Nmb2 = document.getElementById("Nmb2");
const Nmb3 = document.getElementById("Nmb3");
const Nmb4 = document.getElementById("Nmb4");
const Nmb5 = document.getElementById("Nmb5");
const Nmb6 = document.getElementById("Nmb6");
const Nmb7 = document.getElementById("Nmb7");
const Nmb8 = document.getElementById("Nmb8");
const Nmb9 = document.getElementById("Nmb9");
const comma = document.getElementById("comma"); // for decimal

const clean = document.getElementById("erase");
const CE = document.getElementById("CE");
const racine = document.getElementById("racine");
const addition = document.getElementById("addition");
const soustraction = document.getElementById("soustraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const percentage = document.getElementById("percentage");
const power2 = document.getElementById("power2");
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const oneDivX = document.getElementById("oneDivX");

let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";

// Handle numbers
const numbers = [Nmb0, Nmb1, Nmb2, Nmb3, Nmb4, Nmb5, Nmb6, Nmb7, Nmb8, Nmb9];

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.innerText;
    result.innerText = currentInput;
  });
});

// Handle decimal point (comma)
comma.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    result.innerText = currentInput;
  }
});

// Set operator and store first number
function setOperator(op) {
  operator = op;
  firstNumber = currentInput;
  currentInput = "";
}

// Handle operations
addition.addEventListener("click", () => setOperator("+"));
soustraction.addEventListener("click", () => setOperator("-"));
multiplication.addEventListener("click", () => setOperator("*"));
division.addEventListener("click", () => setOperator("/"));

// Calculate on equal press
equal.addEventListener("click", () => {
  secondNumber = currentInput;

  let a = parseFloat(firstNumber);
  let b = parseFloat(secondNumber);
  let res;

  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b !== 0 ? a / b : "Error";
      break;
    default:
      res = "Invalid";
  }

  result.innerText = res;
  currentInput = "";
  operator = "";
});

// Erase button logic
clean.addEventListener("click", () => {
  currentInput = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result.innerText = 0;
});
CE.addEventListener("click", ()=>{
    currentInput = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result.innerText = 0;
})

// //Percentage
percentage.addEventListener("click", () => {
  if (currentInput !== 0) {
    let value = parseFloat(currentInput).toString();
    currentInput = (value / 100);
    result.innerText = currentInput;
  }
});

//Power 2
power2.addEventListener("click", ()=>{
    if (currentInput !== 0) {
        let value = parseInt(currentInput).toString();
        currentInput = value * value;
        result.innerText = currentInput;
    }
})

// One divide by any number
oneDivX.addEventListener("click", ()=>{
    if (currentInput !== 0 ) {
        let value = parseInt(currentInput).toString();
        currentInput = 1/value;
        result.innerText = currentInput;
    }
})

//racine of 2
racine.addEventListener("click", ()=>{
    if(currentInput !== 0){
        let value = parseFloat(currentInput).toString();
        if(value % value == 1){
            currentInput = value
            result.innerText = currentInput;
        }
        
    }
})
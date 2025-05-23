let historyValue= document.getElementById("history-value");
let outputValue = document.getElementById("output-value");

let clearButton = document.getElementById("clear");
let backspaceButton = document.getElementById("backspace");
let equalsButton = document.getElementById("=");

let currentInput="";
let previousInput = "";
let operator = "";
let newCalculation

function updateDisplay(value){
    outputValue.textContent = value;
}
clearButton.onClick = function(){
    currentInput = "";
    previousInput = "";
    operator = "";
    historyValue.textContent = "";
    updateDisplay("");
    newCalculation = false;
}
backspaceButton.onclick = function (){
    if(newCalculation) {
        clearButton.onclick();
        return;
    }
    currentInput = currentInput.slice(0,-1);
    updateDisplay(currentInput);
}
function handleNumberClick(number) {
    if (newCalculation) {
        currentInput = "";
        newCalculation = false;
    }
    currentInput += number;
    updateDisplay(currentInput);
}
function handleOperatorClick(op) {
    if (currentInput === "") return;
    if (previousInput !==""){
        let result = calculate();
        previousInput = result.toString();
    } else{
        previousInput = currentInput;
    }
    currentInput = "";
    operator = op;
    historyValue.textContent = previousInput + " " + operator;
}
function calculate(){
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result;
    if (isNan(num1) || isNan(num2)) return "";
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break; 
        case "/":
            if (num2 !=0) {
                result = num1/num2;
            } else {
                result = "Error";
            }
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            result = "Error";
    }
    return result;
}
equalsButton.onclick = function (){
    if (previousInput  == "" || currentInput == "") {
        return;
    }

    let result = calculate();
    historyValue.textContent = previousInput + " " + operator + " " + currentInput + " =";
    updateDisplay(result);
    this.currentInput = result.toString();
    previousInput = "";
    operator = "";
    newCalculation = true;
}
document.querySelectorAll(".number").forEach((button) => {

button.addEventListener("click", function () {

handleNumberClick(button.textContent);

});

});

document.querySelectorAll(".operator").forEach((button) => {

if ( button.id != "=" && button.id != "clear" && button.id != "backspace" ) {

button.addEventListener("click", function () {

handleOperatorClick(button.textContent);

});

}

});
let firstNumber = [];
let secondNumber = [];
let displayNumber;
let operation;
let result;
let canTakeOperation = false;
let takeSecondNumber = false;
let secondNumberTaken = false;
let decimalPressed = false;
const numberButtons = document.querySelectorAll(".number");
const currentMath = document.getElementById("history");
const currentNumber = document.getElementById("current");



//operations 
const add  = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);
const operate = (operation, a, b) => operation(a, b);
//functions
const clearNumbers = function() {

    console.log("Clear has been clicked!");
    firstNumber = [];
    secondNumber = [];
    result = undefined;
    displayNumber = undefined;
    operation = undefined;
    canTakeOperation = false;
    equalPressed = false;
    takeSecondNumber = false;
    updateScreen();
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`)
    console.log(`Take Second Number: ${takeSecondNumber}`);
    clearScreen();
};

const clearScreen = () => {
    currentMath.textContent = '';
    currentNumber.textContent = 0;
}

// const deleteNumber = () => {
//     console.log("Delete has been clicked!");
//     numbers.pop();
// }


/* Calc Functions */
const calculate = () => {
    if((canTakeOperation !== false) && ((operation.name !== divide) && (+displayNumber !== 0))) {
    takeSecondNumber = false;
    joinNumberArray();
    result = operate(operation, firstNumber, secondNumber);
    result = round(result);
    displayNumber = result;
    updateScreen(' = ');
    firstNumber = [];
    secondNumber = [];
    firstNumber.push(result);
    console.log(`After Calc, firstNum is ${firstNumber}`);
    console.log(takeSecondNumber);
    console.log(`Result: ${result}`);
    } else {
        alert("You cannot divide by zero!");
        clearScreen();
        clearNumbers();
    }


};
const takeOperation = (operator) => {
    if(canTakeOperation === true) {
    takeSecondNumber = !takeSecondNumber;
    operation = operator;
    currentMath.textContent = displayNumber;
    console.log(`The operation is ${operation.name}`);
        if(operation == add) {
            updateScreen('+');
        } else if(operation == subtract){
            updateScreen('-');
        } else if(operation == multiply){
            updateScreen('x');
        } else if(operation == divide){
            if (secondNumber !== 0) {
            updateScreen('÷');
            }
    } 
    } 

}
const takeNumber = function(number) {
    canTakeOperation = true;
    if(!takeSecondNumber) {
        firstNumber.push(number); 
        removeCommasFromScreen();
        console.log(`First Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' +`Type: ` + typeof(displayNumber));
        updateScreen(number);
    } else {
        secondNumber.push(number);
        removeCommasFromScreen();
        console.log(`Second Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' + `Type: ` + typeof(displayNumber))
        updateScreen(number);
        secondNumberTaken = true;
    }


    
};


const round = (resultOfCalc) => {
    return Math.round(resultOfCalc * 1000000) / 1000000;
}

const joinNumberArray = () => {
    //Added the unary operator to change each number from a string to a number
    firstNumber = +firstNumber.join().replaceAll(',', '');
    secondNumber = +secondNumber.join().replaceAll(',', '');
};


const updateScreen = (screenText)=> {
if((secondNumber.length === 0) && (operation === undefined)){
    currentNumber.textContent = (displayNumber);
}else{
    currentNumber.textContent = (displayNumber);
    currentMath.textContent += screenText;
}

}

const removeCommasFromScreen = () => {
    if(!takeSecondNumber) {
        //By default, writing join like "join()" will separate each number by a comma.
        //By writing "join('')", they will not be separated.
        displayNumber = firstNumber.join('')
    } else {
        displayNumber = secondNumber.join('');
    }

}


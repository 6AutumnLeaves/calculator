let firstNumber = [];
let secondNumber = [];
let displayNumber;
let operation;
let result = 0;
let operatorTaken = false;
let canTakeOperation = false;
let takeSecondNumber = false;
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
    result = 0;
    displayNumber = undefined;
    operation = undefined;
    updateScreen();
    takeSecondNumber = false;
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

const takeNumber = function(number) {
    canTakeOperation = true;
    console.log(`Can Take Operation ${canTakeOperation}`);
    if(!takeSecondNumber) {
        firstNumber.push(number); 
        removeCommasFromScreen();
        // console.log(`First Number: ${displayNumber}`);
        // console.log(`Display Number: ${displayNumber}` + ' ' +`Type: ` + typeof(displayNumber));
        updateScreen(number);
    } else {
        secondNumber.push(number);
        removeCommasFromScreen();
        // console.log(`Second Number: ${displayNumber}`);
        // console.log(`Display Number: ${displayNumber}` + `Type: ` + typeof(displayNumber))
        updateScreen(number);
    }


    
};

const takeOperation = (operator) => {
    if(firstNumber !== [] && canTakeOperation === true) {
    takeSecondNumber = !takeSecondNumber;
    operation = operator;
    operatorTaken = true;
    currentMath.textContent = displayNumber;
    console.log(`The operation is ${operation}`);
    console.log(`Take second number?:${takeSecondNumber}`);
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
} else {
    return;
}
}
}

const round = (resultOfCalc) => {
    return Math.round(resultOfCalc * 1000000) / 1000000;
}

const calculate = () => {
    console.log(`Can Take Operation: ${canTakeOperation}`);
    console.log(`Second Num doesn't equal 0: ${secondNumber[0] !== 0}`);
    console.log(`Operation isn't divide: ${operation.name !== divide}`);

    if((canTakeOperation !== false) && ((operation.name !== divide) && (secondNumber[0]!== 0))) {
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
    }
    // console.log(`The calculation is ${operate(operation, firstNumber, secondNumber)}`);
    // return operate(operation, firstNumber, secondNumber);


};
const joinNumberArray = () => {
    //Added the unary operator to change each number from a string to a number
    firstNumber = +firstNumber.join().replaceAll(',', '');
    secondNumber = +secondNumber.join().replaceAll(',', '');
};


const updateScreen = (screenText)=> {
if((secondNumber.length === 0) && (operation === undefined)){
    currentNumber.textContent = (result || displayNumber);
    // if(!operation === undefined) {
    //     currentMath.textContent +=  displayNumber;
    // }
    // currentNumber.textContent += screenText;
}else{
    currentNumber.textContent = (result || displayNumber);
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


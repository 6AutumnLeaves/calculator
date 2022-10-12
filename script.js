let firstNumber = [];
let secondNumber = [];
let displayNumber;
let operation;
let result;
let canTakeOperation = false;
let equalPressed = false;
let takeSecondNumber = false;
let secondNumberTaken = false;
let chainedOperations = false;
let decimalTaken = false;
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
    window.location.reload();
    // console.log("Clear has been clicked!");
    // firstNumber = [];
    // secondNumber = [];
    // result = undefined;
    // displayNumber = undefined;
    // operation = undefined;
    // canTakeOperation = false;
    // equalPressed = false;
    // takeSecondNumber = false;
    // decimalTaken = false;
    // updateScreen();
    // console.log(`First Number: ${firstNumber}`);
    // console.log(`Second Number: ${secondNumber}`)
    // console.log(`Take Second Number: ${takeSecondNumber}`);
    // clearScreen();
};

// const clearScreen = () => {
//     currentMath.textContent = '';
//     currentNumber.textContent = 0;
// }

const deleteNumber = () => {
    if (secondNumber.length !== 0){
        secondNumber.pop();
        if(secondNumber.length === 0) {
            decimalTaken = false;
        }
        updateScreen(displayNumber = secondNumber.join(''))
    
    }else if(firstNumber.length !== 0){
        firstNumber.pop();
        if(firstNumber.length === 0) {
            decimalTaken = false;
        }
        updateScreen(displayNumber = firstNumber.join(''))
}

};
const consoleLog = () => {
console.log(`%cFirstNum = ${firstNumber} (type = ${typeof(firstNumber)})`, 'color: yellow')
console.log(`%cSecondNum = ${secondNumber} (type = ${typeof(secondNumber)})`, 'color: blue')
console.log(`%cResult = ${result} (type = ${typeof(result)})`, 'color: green ')
console.log(`%cDisplayNum = ${displayNumber} (type = ${typeof(displayNumber)})`, 'color: green ')
console.log(`%cTake second Number = ${takeSecondNumber}`, 'color: blue')
console.log(`%cChain Operations = ${chainedOperations}`, 'color: red')
console.log(`%cEqual Pressed = ${equalPressed}`, 'color: green ');
}

/* Calc Functions */
const calculate = () => {
    
    
    if((canTakeOperation !== false && firstNumber !== []) && ((operation.name !== divide) && (+displayNumber !== 0))) {
    takeSecondNumber = false;
        if(chainedOperations === true && equalPressed === false){
        equalPressed = false;
        takeSecondNumber = true;
    }else {
        equalPressed = true;
        takeSecondNumber = true;
        chainedOperations = false;
    }
    decimalTaken = false;
    console.log('%cEqual has been pressed', 'color: green');
    joinNumberArray();
    result = operate(operation, firstNumber, secondNumber);
    result = round(result);
    displayNumber = result /* || firstNumber */;
    updateScreen(' = ');
    firstNumber = [];
    secondNumber = [];
    firstNumber.push(result);
    console.log(`After Calc, firstNum = ${firstNumber}`);
    console.log(`After Calc, secondNum = ${secondNumber}`);
    console.log(`Display Number: ${displayNumber}`);
    console.log(`Result: ${result}`);
    console.log(`Take SecondNum = ${takeSecondNumber}`);
    } else if(operation == divide){
        alert("You cannot divide by zero!");
        window.location.reload();
    } else {
        return;
    }


};
const takeOperation = (operator) => {
    if ((secondNumber !== []) && (operation !== undefined && equalPressed == false)) {
        chainedOperations = true;
        calculate();
        firstNumber = [];
        firstNumber.push(result);
        displayNumber = result;
    }

    if(canTakeOperation === true || secondNumber === []) {
    takeSecondNumber = true;
    decimalTaken = false;
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
const takeNumber = (number) => {
    canTakeOperation = true;
    if(!takeSecondNumber && chainedOperations === false) {
        if(firstNumber.length < 16) {
        firstNumber.push(number); 
        removeCommasFromScreen();
        console.log(`First Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' +`Type: ` + typeof(displayNumber));
        updateScreen(number);
        } else {
            return;
        }
    } else if(secondNumber.length < 16){
        secondNumber.push(number);
        removeCommasFromScreen();
        console.log(`Second Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' + `Type: ` + typeof(displayNumber))
        updateScreen(number);
        secondNumberTaken = true;
    } else {
        return;
    }




    
};

const takeDecimal = (decimal) => {
    if(!takeSecondNumber && chainedOperations === false && decimalTaken === false) {
        if(firstNumber.length < 16) {
        firstNumber.push(decimal); 
        decimalTaken = true;
        removeCommasFromScreen();
        console.log(`First Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' +`Type: ` + typeof(displayNumber));
        updateScreen(decimal);
        } else {
            return;
        }
    } else if(secondNumber.length < 16 && decimalTaken === false){
        secondNumber.push(decimal);
        decimalTaken = true;
        removeCommasFromScreen();
        console.log(`Second Number: ${displayNumber}`);
        console.log(`Display Number: ${displayNumber}` + ' ' + `Type: ` + typeof(displayNumber))
        updateScreen(decimal);
        secondNumberTaken = true;
    } else {
        return;
    }
}


const round = (resultOfCalc) => {
    return Math.round(resultOfCalc * 1000000) / 1000000;
}

const joinNumberArray = () => {
    //Added the unary operator to change each number from a string to a number
    firstNumber = +firstNumber.join().replaceAll(',', '');
    secondNumber = +secondNumber.join().replaceAll(',', '');
};


const updateScreen = (screenText)=> {
    console.log(`Type of ScreenText = ${typeof(screenText)}`);
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


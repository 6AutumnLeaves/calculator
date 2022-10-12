//Variables
let firstNumber = [];
let secondNumber = [];
let displayNumber = undefined;
let operation = undefined;
let result = undefined;
let canTakeOperation = false;
let equalPressed = false;
let takeSecondNumber = false;
let secondNumberTaken = false;
let chainedOperations = false;
let decimalTaken = false;

//DOM Variables
const currentMath = document.getElementById("history");
const currentNumber = document.getElementById("current");


//operations 
const add  = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);
const operate = (operation, a, b) => operation(a, b);


//Clear and Delete
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
    decimalTaken = false;
    chainedOperations = false;
    updateScreen();
    clearScreen();
};
const clearScreen = () => {
    currentMath.textContent = '';
    currentNumber.textContent = 0;
}
const deleteNumber = () => {
    if (secondNumber.length !== 0){
        secondNumber.pop();
        if(secondNumber.length === 0) {
            decimalTaken = false;
        }
        currentMath.textContent = `${firstNumber.join('')}${pushOperatorSymbol()}`
        updateScreen(displayNumber = secondNumber.join(''))
        
    }else if(firstNumber.length !== 0){
        firstNumber.pop();
        if(firstNumber.length === 0) {
            decimalTaken = false;
        }
        updateScreen(displayNumber = firstNumber.join(''))
    }
    
};


/* Calc Functions */
const calculate = () => {
    
    
    if(((secondNumber.length !== 0 && canTakeOperation !== false)) && ((operation.name !== divide) && (+displayNumber !== 0))) {
        if(chainedOperations === true && equalPressed === false){
            equalPressed = false;
            takeSecondNumber = true;
        }else {
            equalPressed = true;
        takeSecondNumber = true;
        chainedOperations = false;
    }
    decimalTaken = false;
    joinNumberArray();
    result = operate(operation, firstNumber, secondNumber);
    result = round(result);
    displayNumber = result;
    updateScreen(' = ');
    firstNumber = [];
    secondNumber = [];
    operation = undefined;
    firstNumber.push(result);
} else if(operation == divide){
    alert("You cannot divide by zero!");
    window.location.reload();
} else {
        return;
    }

    
};

const takeOperation = (operator) => {
    if ((secondNumber.length !== 0) && (operation !== undefined)) {
        chainedOperations = true;
        console.log('%cchained operations is active', "color:red");
        calculate();
        firstNumber = [];
        equalPressed = false;
        secondNumber = [];
        firstNumber.push(result);
        displayNumber = result;
        updateScreen(displayNumber);
    }
    
    if(canTakeOperation === true || secondNumber === []) {
        takeSecondNumber = true;
        decimalTaken = false;
        operation = operator;
        currentMath.textContent = displayNumber;
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
            updateScreen(number);
        } else {
            return;
        }
    } else if(secondNumber.length < 16){
        secondNumber.push(number);
        removeCommasFromScreen();
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
            updateScreen(decimal);
        } else {
            return;
        }
    } else if(secondNumber.length < 16 && decimalTaken === false){
        secondNumber.push(decimal);
        decimalTaken = true;
        removeCommasFromScreen();
        updateScreen(decimal);
        secondNumberTaken = true;
    } else {
        return;
    }
}

const round = (resultOfCalc) => {
    return Math.round(resultOfCalc * 1000000) / 1000000;
}


//Updating Screen and Pushing information to Top or Bottom of display
const pushOperatorSymbol = () => {
    if(operation == add) {
        return '+';
    } else if(operation == subtract){
        return '-';
    } else if(operation == multiply){
        return 'x';
    } else if(operation == divide){
        if (secondNumber !== 0) {
        return '÷';
        }
} 
}
const joinNumberArray = () => {
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

//Keyboard Functionality



//operations 
const numberButtons = document.querySelectorAll(".number");
// let numbers = [];
let firstNumber = []
let secondNumber = []
let operation;
let result = 0;
let takeSecondNumber = false;


const add  = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);
const operate = (operation, a, b) => operation(a, b);

const clearNumbers = function() {
    console.log("Clear has been clicked!");
    firstNumber = [];
    secondNumber = [];
    takeSecondNumber = false;
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
};

const deleteNumber = () => {
    console.log("Delete has been clicked!");
    numbers.pop();
}

const takeNumber = function(number) {
    if(!takeSecondNumber) {
        firstNumber.push(number);
        console.log(`First Number: ${firstNumber}`);
    } else {
        secondNumber.push(number);
        console.log(`Second Number: ${secondNumber}`);
    }


    
};

const takeOperation = (operator) => {
    if(firstNumber !== []) {
    takeSecondNumber = !takeSecondNumber;
    operation = operator;
    console.log(`The operation is ${operation}`);
    console.log(`Take second number?:${takeSecondNumber}`);
    }
}

const calculate = () => {
    takeSecondNumber = false;
    joinNumberArray();
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
    console.log(`The calculation is: ${firstNumber} ${operation} ${secondNumber}`);
    result = operate(operation, firstNumber, secondNumber);
    console.log(`Result: ${result}`);
    // console.log(`The calculation is ${operate(operation, firstNumber, secondNumber)}`);
    // return operate(operation, firstNumber, secondNumber);


};
const joinNumberArray = () => {
    //Added the unary operator to change each number from a string to a number
    firstNumber = +firstNumber.join().replaceAll(',', '');
    secondNumber = +secondNumber.join().replaceAll(',', '');
    console.log('First Number Type:' + typeof(firstNumber))
    console.log('Second Number Type:' + typeof(secondNumber))
};


// const updateScreen = ()=>;

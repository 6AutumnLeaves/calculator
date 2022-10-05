//operations 
const numberButtons = document.querySelectorAll(".number");
// let numbers = [];
let firstNumber = []
let secondNumber = []
let operation;
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
    operation = operator.name;
    console.log(`The operation is ${operation}`);
    console.log(`Take second number?:${takeSecondNumber}`);
    }
}

const calculate = () => {
    takeSecondNumber = false;
    joinNumberArray();
    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
    firstNumber = [];
    secondNumber = [];
    // console.log(`The calculation is ${operate(operation, firstNumber, secondNumber)}`);
    // return operate(operation, firstNumber, secondNumber);


};
const joinNumberArray = () => {
    firstNumber = +firstNumber.join().replaceAll(',', '');
    secondNumber = +secondNumber.join().replaceAll(',', '');
    console.log('First Number Type:' + typeof(firstNumber))
    console.log('Second Number Type:' + typeof(secondNumber))
};


// const updateScreen = ()=>;

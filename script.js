




//operations 
const add  =(a, b) => (a + b).toFixed(2);
const subtract = (a, b) => (a - b).toFixed(2);
const multiply = (a, b) => (a * b).toFixed(5);
const divide = (a, b) => (a / b).toFixed(5);

const operate = (operator, a, b) => operator(a, b);

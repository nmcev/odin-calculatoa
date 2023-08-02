// Get all the number buttons
const numberButtons = document.querySelectorAll('.buttonNumber');
// get all operators buttons
const operatorButtons = document.querySelectorAll('.buttonOperator');
// get display screen 
const displayScreen = document.querySelector('.display-screen');
const equalButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');

const delButton = document.querySelector('.del-button');

let firstNumber = ''
let secondNumber = ''
let operator = ''
//functions

function calculate() {
  secondNumber = Number(secondNumber);
  firstNumber = Number(firstNumber);
  if (operator === "+") {
    return firstNumber += secondNumber;
  } else if (operator === "-") {
    return firstNumber -= secondNumber;
  } else if (operator === "x") {
    return firstNumber *= secondNumber;
  } else if (operator === "÷") {
    return firstNumber /= secondNumber;
  }
}


//evens listeners  
// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    // Check if an operator has already been selected
    if (operator === '') {
      firstNumber += buttonText;
    } else {
      secondNumber += buttonText;
    }
    // Update the display screen with the clicked number
    displayScreen.textContent += buttonText;
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    operator = button.textContent

    // Update the display screen with the clicked operator
    displayScreen.textContent += buttonText;
  });
});

equalButton.addEventListener('click', () => {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const result = calculate();
    displayScreen.textContent = result;
    firstNumber = result;
    secondNumber = '';
    operator = '';
  } else if (operator == '') {
  operator = '+';
    calculate(); // Call the calculate function to perform the default operation
    displayScreen.textContent = firstNumber; // Display the result
    operator = ''; // Reset operator after displaying the result
  }

});

clearButton.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  displayScreen.textContent = '';
});

delButton.addEventListener('click', () => {
  displayScreen.textContent = displayScreen.textContent.slice(0, -1);
});

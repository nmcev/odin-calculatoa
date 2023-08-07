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
    if (secondNumber == 0 && firstNumber == 0) {
      return "undefine"
    }
    if (secondNumber == 0) {
      return "Can't divide by zero";
    }
    return firstNumber /= secondNumber;
  } else if (operator == "%") {
    let remainder = Math.floor((firstNumber % secondNumber));
    return remainder;
  }
}

function performCalculation() {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const result = calculate();
    displayScreen.textContent = result;
    firstNumber = result;
    secondNumber = '';
  } else if (operator == '') {
    operator = '+';
    calculate(); // Call the calculate function to perform the default operation
    displayScreen.textContent = firstNumber; // Display the result
    operator = ''; // Reset operator after displaying the result
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
    if (firstNumber !== '' && secondNumber !== '') {
      performCalculation();
    }
    operator = buttonText;
    displayScreen.textContent += buttonText;
  });
});

equalButton.addEventListener('click', () => {
  performCalculation()
  operator = ''

});

clearButton.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  displayScreen.textContent = '';
});

delButton.addEventListener('click', () => {
  displayScreen.textContent = displayScreen.textContent.slice(0, -1);

  if (operator == '') {
    firstNumber = displayScreen.textContent
    console.log(firstNumber)
  } else {
    secondNumber = displayScreen.textContent
  }
});

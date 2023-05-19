// Get all the number buttons
const numberButtons = document.querySelectorAll('.buttonNumber');
// get all operators buttons
const operatorButtons = document.querySelectorAll('.buttonOperator');
// get display screen 
const displayScreen = document.querySelector('.display-screen');
const equalButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');


// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Update the display screen with the clicked number
    displayScreen.textContent += buttonText;
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Update the display screen with the clicked operator
    displayScreen.textContent += buttonText;
  });
});

equalButton.addEventListener('click', () => {
  const expression = displayScreen.textContent;
  const result = eval(expression); // Evaluate the expression using eval()
  displayScreen.textContent = result;//update the display
});

clearButton.addEventListener('click', () => {
  displayScreen.textContent = '';
});
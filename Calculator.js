function appendToDisplay(value) {
    const display = document.getElementById('display');
    const current = display.value;
    
    if (value === 'sqrt(') {
        display.value += 'Math.sqrt(';
    } else if (value === 'pow(') {
        display.value += 'Math.pow(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Handle special functions
    expression = expression.replace(/\^/g, '**'); // Replace ^ with **
    
    try {
        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

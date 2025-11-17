const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        let result = 0;

        // Detect operator
        if (expression.includes('+')) {
            let [num1, num2] = expression.split('+').map(Number);
            result = num1 + num2;
        } 
        else if (expression.includes('-')) {
            let [num1, num2] = expression.split('-').map(Number);
            result = num1 - num2;
        } 
        else if (expression.includes('*')) {
            let [num1, num2] = expression.split('*').map(Number);
            result = num1 * num2;
        } 
        else if (expression.includes('/')) {
            let [num1, num2] = expression.split('/').map(Number);
            if (num2 === 0) {
                throw new Error("Division by zero");
            }
            result = num1 / num2;
        } 
        else {
            throw new Error("Invalid expression");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

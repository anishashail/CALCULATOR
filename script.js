// Get result display element
const resultDisplay = document.getElementById("result");
let currentExpression = "";

// Append value to the current expression
function appendValue(value) {
    currentExpression += value;
    resultDisplay.value = currentExpression;
}

// Operation handling
function operation(operator) {
    try {
        switch (operator) {
            case 'sqrt':
                currentExpression = Math.sqrt(eval(currentExpression)).toString();
                break;
            case 'sin':
                currentExpression = Math.sin(eval(currentExpression)).toString();
                break;
            case 'cos':
                currentExpression = Math.cos(eval(currentExpression)).toString();
                break;
            case 'tan':
                currentExpression = Math.tan(eval(currentExpression)).toString();
                break;
            case 'log':
                currentExpression = Math.log10(eval(currentExpression)).toString();
                break;
            case 'ln':
                currentExpression = Math.log(eval(currentExpression)).toString();
                break;
            case 'pi':
                currentExpression += Math.PI.toString();
                break;
            case 'e':
                currentExpression += Math.E.toString();
                break;
            default:
                currentExpression += operator;
        }
        resultDisplay.value = currentExpression;
    } catch (error) {
        resultDisplay.value = "Error";
    }
}

// Clear display
document.querySelector(".clear").addEventListener("click", function () {
    currentExpression = "";
    resultDisplay.value = "";
});

// Equals function
document.querySelector(".equals").addEventListener("click", function () {
    try {
        currentExpression = eval(currentExpression).toString();
        resultDisplay.value = currentExpression;
    } catch (error) {
        resultDisplay.value = "Error";
    }
});

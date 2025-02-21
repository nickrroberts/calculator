let operator = undefined;
let args = [];
let display = [];
let result = 0;
let reset = false;

let numbersDisplay = document.getElementById("numbersDisplay");
let numbersBtns = document.getElementById("numbers");
let operatorsBtns = document.getElementById("operators");
numbersBtns.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        display.push(event.target.textContent);
        updateDisplay();
    }
});

operatorsBtns.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        let value = event.target.value
        args.push(Number(display.join("")));
        
        if (value !== "clear" && value !== "operate" ) {
            display = [];
            updateDisplay();
            operator = value;
        } 

        if (args.length > 1) {
            result = operate(operator, args); 
            display.push(result);
            updateDisplay();
            display = [];
            
        }
        if (value == "operate"){
            result = operate(operator, args); 
            display.push(result);
            updateDisplay();
            display = [];
            args= [];

        }
        if (value == "clear") {
            clearValues();
            updateDisplay();
            
        }
    }
})

function updateDisplay (reset = false) {
    if (display.length !== 0) {
        numbersDisplay.value = display.join("");
    } 
    if (reset === true) {
        numbersDisplay.value = 0;
    }
}

function clearValues () {
    reset = true;
    display = [];
    args = [];
    updateDisplay(reset);
}


function add (arr) {
   return arr.reduce((total, val) => total+val);
}

function subtract (arr) {
    return arr.reduce((total, val) => total-val);
}

function multiply (arr) {
    return arr.reduce((total, val) => total*val);
}

function divide (arr) {
    return arr.reduce((total, val) => total/val);
}

function operate (operator, numbers) {
    switch (operator) {
        case "add":
            return add(numbers);
        case "subtract":
            return subtract(numbers);
        case "multiply":
            return multiply(numbers);
        case "divide":
            return divide(numbers);
        default:
            console.log("Something went wrong in calculating.")
    }
}
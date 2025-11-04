//import readline module => used to read input from the command line (terminal) and write output to it. 
const readline = require("readline");

//sets up a prompt for user input and allows output to be shown int terminal. Creates an interface for reading input from the user and writing output to the teminal using Node.js built-in readline module.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//calculation function
function calculate(a, b, operator) {
    a = parseFloat(a); // Convert string to float
    b = parseFloat(b); 

    switch (operator) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return b !== 0 ? a/b : "Cannot divided by 0";
        default:
            return "Invalid operator.";
    }
}

rl.question("Enter ther first number : ", (firstNum)=> {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
        rl.question("Enter second number: ", (secondNum)=> {
            const result = calculate(firstNum,secondNum,operator);
            console.log(`Result: ${result}`);
            rl.close(); //Close the input stream
        });
    });
});


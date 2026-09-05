const args = process.argv.slice(2);

let operation = args[0];
let num1 = Number(args[1]);
let num2 = Number(args[2]);

console.log("Calculator Started");
console.log("Operation:", operation);
console.log("Numbers:", num1, num2);

if(operation === 'add'){
    console.log("Result:", num1 + num2)
}else if(operation === 'sub'){
    console.log("Result:", num1 - num2)
}else if(operation === 'multiply'){
    console.log("Result:", num1 * num2)
}else if(operation === 'divide'){
    if(num2 === 0){
        console.log("Cannot divide by zero")
    }else{
    console.log("Result:", num1 / num2)
    }
}else if(operation === 'mod'){
    console.log("Result:", num1 % num2)

}else{
    console.log("Invalid operation ")
}
console.log("Calculator Finished")
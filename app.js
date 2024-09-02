let firstnum = parseFloat(prompt("Please Enter First Number"));

let secondnum = parseFloat(prompt("Please Enter Second Number"));

let method = prompt("What method would you like perform? ( + , - , x , / ):");

let result;
if (method === "+") {
    result = firstnum + secondnum;
} else if (method === "-") {
    result = firstnum - secondnum;
} else if (method === "x") {
    result = firstnum * secondnum
} else if (method === "/") {
    if (secondnum !== 0 ){
        result = firstnum / secondnum
    } else {
        result = "Error! Division by zero."
    }
} else{
    result = "Invalid operation."
}
alert("The result is : " + result)
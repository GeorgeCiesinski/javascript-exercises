const fibonacci = function(fibonacciIndex) {

    // Negative Check
    if (fibonacciIndex < 0) {
        return "OOPS";
    }

    // Calculate fibonacci number at provided index
    let numArray = [0, 1];
    for (let i = 1; i < fibonacciIndex; i++) {
        const nextNum = numArray[0] + numArray[1];
        numArray[0] = numArray[1];
        numArray[1] = nextNum;
    }
    return numArray[1];
};

// Do not edit below this line
module.exports = fibonacci;

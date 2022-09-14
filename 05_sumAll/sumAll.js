const sumAll = function(num1, num2) {
    console.log(typeof("90"));
    if ((num1 < 0 || typeof(num1) != "number") || (num2 < 0 || typeof(num2) != "number")) return "ERROR";

    let min;
    let max;
    let sum = 0;
    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1; 
    }
    for (min; min<=max; min++) {
        sum += min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

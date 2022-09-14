const leapYears = function(year) {
    // Divisible by 4
    // If divisible by 100 check f divisible by 400

    if (year % 4 == 0 && year % 100 != 0) {
        return true
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

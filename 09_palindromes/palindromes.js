const palindromes = function (str) {
    const alphaString = str.replace(/\W|_/g, "").toLowerCase();  // String without punctuation or white space
    const reverseString = alphaString.split("").reverse().join("");  // Split into array, reverse, and join back into string
    return alphaString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

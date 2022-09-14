const reverseString = function(sentence) {
    let reverseArr = [];
    for (let i = sentence.length - 1; i < sentence.length && i >= 0; i--) {
        reverseArr.push(sentence[i]);
    }
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

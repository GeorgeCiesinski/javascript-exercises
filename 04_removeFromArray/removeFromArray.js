const removeFromArray = function(array, ...removeValues) {
    for (const value of removeValues) {
        const index = array.indexOf(value);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

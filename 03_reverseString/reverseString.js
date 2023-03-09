const reverseString = function(text) {
    reverseWordArr = text.split ("");
    let mapReverse = reverseWordArr.map(word => word.split("").reverse().join(""));
    return mapReverse;
};

// Do not edit below this line
module.exports = reverseString;

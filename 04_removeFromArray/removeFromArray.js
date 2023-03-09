const removeFromArray = function(values, ...toRemove) {
    return result = values.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

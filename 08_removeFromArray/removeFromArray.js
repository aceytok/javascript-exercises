const removeFromArray = function(arr, ...values) {
    return newArray = arr.filter(item => !values.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

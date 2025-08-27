const sumAll = function(a, b) {
    let total = 0;
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
}

    for (let i = start; i<= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

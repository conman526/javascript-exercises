const sumAll = function(x, y) {
    let sum = 0;
    if (typeof x == 'number' && typeof y == 'number') {
        if (x <= 0 || y <= 0) {
            return 'ERROR';
        } else if (x < y) {
            for (; x <= y; x++) {
                sum += x;
            }
        } else if (x > y) {
            for (; y <= x; y++) {
                sum += y;
            }
        } return sum;

    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;

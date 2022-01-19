const fibonacci = function(e) {
    let array = [0, 1];
    let sum = 0;
    if (e >= 0) {
        for (i = 1; i <= e; i++) {
            sum = array[i] + array[i-1];
            array.push(sum);
        }
        console.log(array[e]);
        return array[e];
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

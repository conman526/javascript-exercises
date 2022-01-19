const palindromes = function (input) {
    let replaced = input.replace(/[^\w\s]|_/g, "")
                           .replace(/\s+/g, "");
    lowerCase = replaced.toLowerCase();
    let reversed = lowerCase.split('').reverse().join('');
    console.log(lowerCase, reversed);
    if (reversed == lowerCase) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;

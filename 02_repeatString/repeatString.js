const repeatString = function(string, num) {
    let answer = '';
    for (let i = 0; i < num; i++) {
        answer += string;
    }
    if (num < 0) {answer = 'ERROR';}
    return answer;
};

// Do not edit below this line
module.exports = repeatString;

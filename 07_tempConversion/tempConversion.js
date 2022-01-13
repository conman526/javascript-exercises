const ftoc = function(tempf) {
  let temp = ((tempf - 32) * 5) / 9;
  if (temp % 1 === 0) {
    return temp;
  } else {
    return parseFloat(temp.toFixed(1));
  }
    
};

const ctof = function(tempc) {
  let temp = ((tempc * (1.8)) + 32);
  if (temp % 1 === 0) {
    return temp;
  } else {
  return parseFloat(((tempc * (1.8)) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

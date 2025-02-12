const sumAll = function(l,b) {
    if (!Number.isInteger(l) || !Number.isInteger(b)) return "ERROR";
    if (l < 0 || b < 0) return "ERROR";
    if (l > b) {
      const temp = l;
      l = b;
      b = temp;
    }
    let sum =  0;
    for(let i=l;i<=b;i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

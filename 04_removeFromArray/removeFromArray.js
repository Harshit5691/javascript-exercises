const removeFromArray = function(arr,...l) {
    const new_arr = [];
    arr.forEach((item) => {
        if (!l.includes(item)) {
            new_arr.push(item);
        }
    });
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;

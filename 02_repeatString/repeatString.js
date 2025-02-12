const repeatString = function(word,times) {
    let str = "";
    for(let i=0;i<times;i++){
        if(times<0){
            return 'ERROR';
        }
        str += word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;

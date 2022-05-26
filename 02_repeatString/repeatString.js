<<<<<<< HEAD
const repeatString = function(string,num) {
    let newString = '';
    if(num <0){
        newString = 'ERROR'
    }else {
        for (let i = 1; i <= num; i++){
            newString = newString.concat(string)
        }
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
=======
const repeatString = function(string,num) {
    let newString = '';
    if(num <0){
        newString = 'ERROR'
    }else {
        for (let i = 1; i <= num; i++){
            newString = newString.concat(string)
        }
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
>>>>>>> 1feaf175fd2f9a666f37f1d764506b6fdb57bd68

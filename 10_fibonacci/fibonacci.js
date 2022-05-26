const fibonacci = function(num) {
    let fibArray=[];
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    num = parseInt(num)
    // create numbers for amount in num
    if(num < 0){
        return 'OOPS'
    }else{
        fibArray.push(1)
        for(let i = 1; i < num; i++){
            nextNum = firstNum + secondNum
            fibArray.push(nextNum)
            firstNum = secondNum
            secondNum = nextNum
        }
    }
    return fibArray[num-1]
};

// Do not edit below this line
module.exports = fibonacci;

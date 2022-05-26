const palindromes = function (string) {
    let arrayStore = [];
    let arrayStoreBackward = [];
    let play = true;
    
    // store string into array
    for(let i = 0; i < string.length; i++){
        arrayStore.push(string[i].toLowerCase())
    }
    for(let j = (string.length-1); j>=0; j--){
        arrayStoreBackward.push(string[j].toLowerCase())
    }
    let storePunc =  arrayStore.join("")
    let storeBackward =  arrayStoreBackward.join("")
    let stringRemoveBackwardPunc =  storeBackward.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "']/g,"")
    let stringRemovePunc =  storePunc.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "']/g,"")
    console.log(stringRemoveBackwardPunc)
    console.log(stringRemovePunc)

    // check for same char
    while(play){
        for(let i = 0; i < stringRemovePunc.length; i++){
            if(stringRemovePunc[i] != stringRemoveBackwardPunc[i]){
                play = false
                return false
            }else if((i == stringRemovePunc.length - 1) && stringRemovePunc[i] == stringRemoveBackwardPunc[i]){
                play = false
                return true
            }
        }
    }
};

// Do not edit below this line
module.exports = palindromes;

<<<<<<< HEAD
const removeFromArray = function(arr, ...nums) {
=======
// [1, 2, 3, 4], 3, 2)).toEqual([1, 4])
>>>>>>> 1feaf175fd2f9a666f37f1d764506b6fdb57bd68

const removeFromArray = function(arr, ...nums) {

    let array = [];
    // iterate over array
    for (let i = 0; i<arr.length; i++){
        // iterate over nums
        for (let j = 0; j<nums.length; j++){
            if(nums.includes(arr[i]) === false && array.includes(arr[i]) === false ){
                array.push(arr[i])
            }   
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

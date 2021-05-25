// write a function "canSum(targetSum,numbers" that takes in a targetSum and an array of numbers as argruments

// the function shoul return a bool indicating wwhether or not it is possible to generate the targetSum using numbers from the array
// you may use all the elements of the array as many times as you want
// you may assume all the input nums are non negative
console.log(canSumTab(7,[2,3]))
console.log(canSumTab(7,[5,3,4,7]))

console.log(canSumTab(300,[7,14]))

console.log(canSumTab(8,[2,3,5]))

function canSumTab(target,array){
    let table=new Array(target+1).fill(0)

    table[0]=1
    for(let amount=0;amount<=target;amount++){
        for(let num of array){
            if( table[amount]){
            table[amount+num]=1
             }
        }
    }
    
    return table[target]
}

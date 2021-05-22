// write a function "canSum(targetSum,numbers" that takes in a targetSum and an array of numbers as argruments

// the function shoul return a bool indicating wwhether or not it is possible to generate the targetSum using numbers from the array
// you may use all the elements of the array as many times as you want
// you may assume all the input nums are non negative
//O(n):Sc
//O(n^m):TC
//decision Problem
console.log(canSumRecursive(7,[2,3]))
console.log(canSumRecursive(7,[5,3,4,7]))

console.log(canSumRecursive(300,[7,14]))

console.log(canSumRecursive(8,[2,3,5]))
function canSum(targetSum,array,i=0){
    if(i===array.length) return false
    else if(array[i]===targetSum) return true
   
    else {
        for(let j=i+1;j<array.length;j++){
            if((array[i]+array[j])===targetSum) return true
        }
       
       return canSum(targetSum,array,i+1)
    }
}


function canSumRecursive(targetSum,array){
    
    if(targetSum===0) return true
    if(targetSum<0) return false
    
        for(let i=0;i<array.length;i++){
        const newTargetSum= targetSum-array[i]
        
            if(canSumRecursive(newTargetSum,array)===true) return true
            
        
         }
    
    return false
}

function canSumDyanamic(targetSum,array,memo={0:true}){
   
   
    if(targetSum in memo) return memo[targetSum]
    if(targetSum===0) return true
    if(targetSum<0) return false
    else{ 
        for(let i=0;i<array.length;i++){
        let newTargetSum= targetSum-array[i]
        if(canSumDyanamic(newTargetSum,array,memo)===true)
            memo[targetSum]= true
        
    }
    console.log(memo)
    }
    memo[targetSum]= false
    return memo[targetSum]
}
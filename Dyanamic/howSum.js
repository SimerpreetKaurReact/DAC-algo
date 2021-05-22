//write a function "howSum(targetSum,numbers)" that takes in a  targetSum and an arrays of arguments
//the function should return an arrray containing any combination of elements that add up to exctly the target Sum.
// if there is sno combination taht adds up to the targetsum then return null
//console.log(howSumDyanamic(0,[1,2,3]))
//console.log(howSumDyanamic(7,[2,3]))
console.log(howSumDyanamic(7,[5,3,4,7]))
//console.log(howSumDyanamic(7,[2,4]))
//console.log(howSumDyanamic(300,[7,14]))
//dyanamic space )(m^2)
//tc: O(n+m^2)
//Combinatoric problem
function howSum(targetSum,numbers){

    if(targetSum===0) return []
    if(targetSum<0) return null
    
        for(let num of numbers){
            const newSum=targetSum-num
           const remainderResult=howSum(newSum,numbers)
           if(remainderResult!==null){
            
            return [ ...remainderResult, num]
           }
            
        }
        return null
    
}

function howSumDyanamic(targetSum,numbers,memoize={}){
    if(targetSum in memoize) return memoize[targetSum]
    if(targetSum===0) return []
    if(targetSum<0) return null
    
        for(let num of numbers){
            const newSum=targetSum-num
          const  remainderResult=howSumDyanamic(newSum,numbers,memoize)
           if(remainderResult!==null){
            memoize[targetSum]=[ ...remainderResult, num]
            return memoize[targetSum]
           }
            
        }
        memoize[targetSum]=null
        return memoize[targetSum]
    
}
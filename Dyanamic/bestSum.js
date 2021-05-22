//write a function "howSum(targetSum,numbers)" that takes in a  targetSum and an arrays of arguments
//the function should return an array containing the shortest combination of numbers taht add up to exactly the targetSum
//if there is a tie, return any one of the shortest
//optimization problem 
console.log(howSumDyanamic(7,[5,3,4,7]))
console.log(howSumDyanamic(8,[2,3,5]))
console.log(howSumDyanamic(100,[1,2,5,25]))

//console.log(howSumDyanamic(7,[2,4]))
function howSum(targetSum,numbers,store=[]){

    if(targetSum===0) return []
    if(targetSum<0) return null
    for(let num of numbers){
    const remainder=targetSum-num
    const remainderResult=howSum(remainder,numbers,store)
            if(remainderResult!=null){
                if(store===null||store.length> [ ...remainderResult, num].length||store!=[]){
                store= [ ...remainderResult, num]
                } 
               
        }
    }
    return store
}
// function howSum(targetSum,numbers){

//     if(targetSum===0) return []
//     if(targetSum<0) return null
    
//         for(let num of numbers){
//             const newSum=targetSum-num
//            const remainderResult=howSum(newSum,numbers)
//            if(remainderResult!==null){
            
//             return [ ...remainderResult, num]
//            }
            
//         }
//         return null
    
// }
function howSumDyanamic(targetSum,numbers,store=[],memoize={}){
 if(targetSum in memoize) return memoize[targetSum]
    if(targetSum===0) return []
    if(targetSum<0) return null
    for(let num of numbers){
    const remainder=targetSum-num
    const remainderResult=howSumDyanamic(remainder,numbers,store,memoize)
            if(remainderResult!=null){
                if(store===null||store.length> [ ...remainderResult, num].length||store!=[]){
                store= [ ...remainderResult, num]
                memoize[targetSum]=store
                } 
               
        }
    }
    memoize[targetSum]=store
    return memoize[targetSum]
}
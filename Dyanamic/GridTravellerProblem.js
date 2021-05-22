// say that you are a traveller ona 2D grid. You beigin in te top left corner and your goal is to travel to bottom-right corner.
// you may only move  down or right
// in how many ways can you travek to the goal on a grid with dimensions m*n
//tc:O(2^n+m)
//sc:O(n+m)
function gridTravellerRecursive(m,n){
    if(!m||!n) return 0
    if(m===1&&n===1) return 1
    else return gridTravellerRecursive(m-1,n)+gridTravellerRecursive(m,n-1)
}
function gridTraveller(m,n){
    if(!m||!n) return 0
    else{
        const ways=new Array(m+1).fill(null).map(_=>new Array(n+1).fill(null))
        console.log(ways)
        return gridTravellerHelper(m,n,ways)
    }
    
    
   
}
function gridTravellerHelper(m,n,ways){
    console.log(m,n,ways)
    if(!m||!n) return 0
    if(m===1&&n===1) return 1
    if(ways[m][n]!=null) return ways[m][n]
    //else if(m===1) ways[m][n]=n
    //else if(n===1) ways[m][n]=m
    
    else{
    ways[m][n] = gridTravellerHelper(m-1,n,ways)+gridTravellerHelper(m,n-1,ways)
     }
    return ways[m][n]
}

console.log(gridTravellerHelperWithKeys(0,1))
console.log(gridTravellerHelperWithKeys(1,1))
console.log(gridTravellerHelperWithKeys(1,2))
console.log(gridTravellerHelperWithKeys(2,1))
console.log(gridTravellerHelperWithKeys(2,2))
console.log(gridTravellerHelperWithKeys(2,3))
console.log(gridTravellerHelperWithKeys(18,18))

function gridTravellerHelperWithKeys(m,n,memo={}){
    const key=m+","+n
   
    
    if(key in memo) return memo[key]
    if(!m||!n)  return 0
    if(m===1&&n===1)  return 1
    //else if(m===1) ways[m][n]=n
    //else if(n===1) ways[m][n]=m
    
    else{
    memo[key] = gridTravellerHelperWithKeys(m-1,n,memo)+gridTravellerHelperWithKeys(m,n-1,memo)
     }
     
    return memo[key]
}
//memoization receipe
// 1. make it Work
//  ==> visualize as Tree
// implement tree as recursion
//test it
//2. make it effecient
// add a memo object
//add a base case to return memo values
//store return values into the memo

// Your function takes an array of integers (arr), and an integer (x). You need to find the position in
// arr that splits the array in two, where one side has as many occurrences of x as the other side has
// occurrences of any number but x (there was some additional info about edge cases, but that's the
// gist of it). So, given an array like this: [5, 5, 2, 3, 5, 1, 6] and x being "5", the function
// should return "4" (Position 4, holding the number "3" above is the point where you have 2 5's on
// the one side, and two "not fives" on the other.
console.log(splitArrays([5, 5, 2, 3, 5, 1, 6], 5))
console.log(splitArrays([1, 1, 1], 2))
console.log(splitArrays([], 1))
// test_cases = [
//     [[5, 5, 2, 3, 5, 1, 6], 5],//4
//     [[1, 1, 1], 2],//2
//     [[], 1],//-1
// ]

function splitArrays(A,x){

        if(A.length===0) return -1
        let mid= Math.round(A.length/2)
        return getNewMid(A,x,mid)
}
function getNewMid(A,x,mid){
    let finalMid=-1
    let countLeft=getcount(A.slice(0,mid),x, true)
    let countRight=getcount(A.slice(mid+1,A.length+1),x,false)
    
    //console.log("mid",mid,countLeft,countRight)
    if(countLeft===countRight){
        finalMid=mid
    }else if(countLeft>countRight){
        finalMid=getNewMid(A,x,mid-1)
    }else{
        finalMid=getNewMid(A,x,mid+1)
    }
    return finalMid
}
function getcount(A,x,flag){
    //console.log(A)
    count=0
    A.forEach(ele=>{if(ele===x&&flag===true)
        count++ 
        else if(ele!=x&&flag===false) count++})
        return count
}
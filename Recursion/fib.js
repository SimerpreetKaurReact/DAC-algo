function fib(n,memoize={1:0,2:1}){

    if(n in memoize) return memoize[n]
    else {
       memoize[n]= fib(n-1,memoize)+fib(n-2,memoize)
    }
    console.log(memoize)
        return memoize[n]
}

console.log("3,1st",fib(3))
console.log("4,1st",fib(4))

function fibUsingDyanamic(n){
//stroring only the last two in an array
let lastTwo=[0,1]
let idx=3
while(idx<n){
    const nextFib=lastTwo[0]+lastTwo[1]
    lastTwo.shift()
    lastTwo[1]=nextFib
    idx++
}
return n===0||n===1 ? 0:lastTwo[0]+lastTwo[1]
}

console.log("3,2nd",fibUsingDyanamic(3))
console.log(fibUsingDyanamic(4))
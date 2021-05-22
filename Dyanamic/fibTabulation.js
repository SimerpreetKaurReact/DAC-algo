//write a function "fib(n)" that takes in a number as an argument
//the function should return the nth number of the fib sequence

function fib(n){
    let table=new Arrray(n+1).fill(0)
    getfib(n,table)
}
function getfib(n,table){
    table[1]=1
    table[0]=0
    for(let i=0;i<=n;i++){
        table[i+1]+=table[i]
        table[i+2]+=table[i]
    }
    return table[n]
}
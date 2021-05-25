///visulaize tthe problem as a table
// size the table based on the inputs
// initialize the table with default value
//seed the trivial answer into the table, instance of the table whose answer is known
//iterate through the table
// fill further position s based on current position

//write a function "howSum(targetSum,numbers)" that takes in a  targetSum and an arrays of arguments
//the function should return an arrray containing any combination of elements that add up to exctly the target Sum.
// if there is sno combination taht adds up to the targetsum then return null

function howSumDyanamic(targetSum,array){
    let table=new Array(targetSum+1).fill(null)
    table[0]=[]


    for(current=0;current<=targetSum;current++){
        for(const ele of array){
            if(table[current]!==null){
                table[current+ele]=[...table[current],ele]
            }
           
        }
    }
    return table[targetSum]
}
console.log(howSumDyanamic(0,[1,2,3]))
console.log(howSumDyanamic(7,[2,3]))
console.log(howSumDyanamic(7,[5,3,4,7])) 
console.log(howSumDyanamic(7,[2,4]))
console.log(howSumDyanamic(300,[7,14]))
//write a function "howSum(targetSum,numbers)" that takes in a  targetSum and an arrays of arguments
//the function should return an array containing the shortest combination of numbers taht add up to exactly the targetSum
//if there is a tie, return any one of the shortest
//optimization problem 
console.log(bestSumDyanamic(7,[5,3,4,7]))
console.log(bestSumDyanamic(8,[2,3,5]))
console.log(bestSumDyanamic(100,[1,2,5,25]))

function bestSumDyanamic(targetSum,array){

    let table=new Array(targetSum+1).fill(null)

    table[0]=[]
    for(let current=0;current<=targetSum;current++){
        if(table[current]!==null){
            for(const num of array){
                if(table[current+num]!=null){
                    if(table[current+num].length>[...table[current],num].length){
                        table[current+num]=[...table[current],num]  
                    }
                }else{
                    table[current+num]=[...table[current],num]  
                }
             
            }
        }
    }
    return table[targetSum]
}
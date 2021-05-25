function SumDyanamic(targetSum,array){
    let table=new Array(targetSum+1).fill(null)
    table[0]=[]


    for(current=0;current<=targetSum;current++){
        for(const ele of array){
            if(table[current!==null]){
                table[current+ele]=[...table[current],ele]
            }
           
        }
    }
    return table[targetSum]
}
    
console.log(SumDyanamic(0,[1,2,3]))
console.log(SumDyanamic(7,[2,3]))
console.log(SumDyanamic(7,[5,3,4,7])) 
console.log(SumDyanamic(7,[2,4]))
console.log(SumDyanamic(300,[7,14]))
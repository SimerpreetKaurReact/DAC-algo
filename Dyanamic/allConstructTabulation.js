// write a function " allConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return a 2D array containing all of the ways the "target" can be constructed by concatinating elements of the "wordBAnk " array
//each element of the 2D arrray should represent one ombination that constructs the target
// you may reuse the elements of the wordBank as many times as needed

console.log(countConstructDyanamic("purple",["purp","p","ur","le","purpl" ]))
console.log(countConstructDyanamic("abcdef",["ab","abc","cd","def","abcd","c","ef"]))
console.log(countConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstructDyanamic("",["car","dog" ]))
console.log(countConstructDyanamic("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))

function countConstructDyanamic(target,wordBank){

let table=new Array(target.length+1).fill(0).map(()=> [])

table[0]=[[]]
 for(let current=0;current<=target.length;current++){
     
        for(const str of wordBank){
            if(target.slice(current,current+str.length)===str){
                const newCombinations=table[current].map(subArray=>[...subArray,str])
                table[current+str.length]=[...newCombinations,...table[current+str.length]]
            }
            
         }
     
 }
    return table[target.length]
}

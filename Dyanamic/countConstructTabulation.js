// write a function "countConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return number of ways the "target" can be constructed by concatinating elements of the "wordBAnk " array

// you may reuse the elements of the wordBank as many times as needed
console.log(countConstructDyanamic("purple",["purp","p","ur","le","purpl" ]))
console.log(countConstructDyanamic("abcdef",["ab","abc","cd","def","abcd"]))
console.log(countConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(countConstructDyanamic("",["car","dog" ]))
console.log(countConstructDyanamic("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))

function countConstructDyanamic(target,wordBank){

let table=new Array(target.length+1).fill(0)

table[0]=1
 for(let current=0;current<=target.length;current++){
     
     for(const str of wordBank){
        if(target.slice(current,current+str.length)===str){
            table[current+str.length]=table[current]+table[current+str.length]
        }
        
     }
    
 }
 
    return table[target.length]
}
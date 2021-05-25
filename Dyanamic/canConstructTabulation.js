// write a function " canConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return a boolean indicating whether or not the "target" can be constructed by concatinating elements of the "wordBAnk " array

// you may reuse the elements of the wordBank as many times as needed


console.log(canConstructDyanamic("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstructDyanamic("",["car","dog" ]))
console.log(canConstructDyanamic("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))
function canConstructDyanamic(target,wordBank){

let table=new Array(target.length+1).fill(0)

table[0]=1
 for(let current=0;current<=target.length;current++){
     if(table[current]=== 1){
     for(const str of wordBank){
        if(target.slice(current,current+str.length)===str){
            table[current+str.length]=1
        }
        
     }
    }
 }
return table[target.length]
}
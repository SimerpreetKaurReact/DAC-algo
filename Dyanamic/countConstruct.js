// write a function "countConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return number of ways the "target" can be constructed by concatinating elements of the "wordBAnk " array

// you may reuse the elements of the wordBank as many times as needed
console.log(canConstructDyanamic("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstructDyanamic("",["car","dog" ]))
console.log(canConstructDyanamic("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))
console.log(canConstructDyanamic("purple",["purp","p","ur","le","purpl" ]))


function countConstructRecursive(target,wordBank){
    
    if(target==="") return 1
    let count=0
    for(const word of wordBank){
        
        if(target.indexOf(word)===0){
            const suffix=target.slice(word.length)
            count=count+countConstructRecursive(suffix,wordBank)
        }
            
        
    }
    return count
}

function canConstructDyanamic(target,wordBank,memoize={}){
    if(target in memoize) return memoize[target]
    if(target==="") return 1
    let count=0
    for(const word of wordBank){
        if(target.indexOf(word)===0){
            const sufix=target.slice(word.length)
            count=count+canConstructDyanamic(sufix,wordBank,memoize)
            
            
        }
    }
    memoize[target]=count
    return count
}
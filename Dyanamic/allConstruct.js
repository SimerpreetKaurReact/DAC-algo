// write a function " allConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return a 2D array containing all of the ways the "target" can be constructed by concatinating elements of the "wordBAnk " array
//each element of the 2D arrray should represent one ombination that constructs the target
// you may reuse the elements of the wordBank as many times as needed
console.log(allConstructDyanamic("abcdef",["ab","abc","cd","def","abcd","ef","c"]))
console.log(allConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(allConstructDyanamic("",["car","dog" ]))
console.log(allConstructRecursive("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))
console.log(allConstructDyanamic("purple",["purp","p","ur","le","purpl" ]))

function allConstructRecursive(target,wordBank){
    let response=[]
    if(target==="") return [[]]
    
    for(const word of wordBank){
        
        if(target.indexOf(word)===0){
            const suffix=target.slice(word.length)

            const suffixWays=allConstructRecursive(suffix,wordBank)
        
           const targetWays= suffixWays.map(way=>[word, ...way])
            response.push(...targetWays)
        }
            
        
    }
    
    return response
}

function allConstructDyanamic(target,wordBank,memoize={}){
    if(target in memoize) return memoize[target]
    if(target==="") return [[]]
    let response=[]
    for(const word of wordBank){
        if(target.indexOf(word)===0){
            const sufix=target.slice(word.length)
            const suffixWays=allConstructDyanamic(sufix,wordBank,memoize)
            const targetWays=suffixWays.map(way=>[word,...way])
            response.push(...targetWays)
            
        }
    }
    memoize[target]=response
    return response
}
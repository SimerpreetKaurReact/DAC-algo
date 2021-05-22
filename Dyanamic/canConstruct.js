// write a function " canConstruct(target,wordBank)" that accepts a target string and an array of strings
// the function should return a boolean indicating whether or not the "target" can be constructed by concatinating elements of the "wordBAnk " array

// you may reuse the elements of the wordBank as many times as needed


console.log(canConstructDyanamic("abcdef",["ab","abc","cd","def","abcd"]))
console.log(canConstructDyanamic("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
console.log(canConstructDyanamic("",["car","dog" ]))
console.log(canConstructDyanamic("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["ef","eeef","eeeef","eeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeee" ]))
function canConstruct(target,wordBank){

   return canConstructRecursive(target,wordBank,0,target.length-1)

}
function canConstructRecursive(target,wordBank,k,i){
    console.log(target,wordBank,k,i)
    if(target==="") return true
    if(k>=i) return false
    for(const word of wordBank){
        let matchFound=true
        for(let j=0;j<word.length;j++){
            console.log(target[j],word[j])
            if(target[j]!=word[j]){
                matchFound=false
            }
        }
        if(matchFound) {

            if(canConstructRecursive(target.slice(word.length),wordBank,k+word.length-1,i)===true) return true
        }
    }
    return false
}
function optionConstructRecursive(target,wordBank){
    
    if(target==="") return true
    
    for(const word of wordBank){
        
        if(target.indexOf(word)===0){
            const suffix=target.slice(word.length)
            if(optionConstructRecursive(suffix,wordBank)===true) return true
        }
            
        
    }
    return false
}

function canConstructDyanamic(target,wordBank,memoize={}){
    if(target in memoize) return memoize[target]
    if(target==="") return true

    for(const word of wordBank){
        if(target.indexOf(word)===0){
            const sufix=target.slice(word.length)
            if(canConstructDyanamic(sufix,wordBank,memoize)===true){
            memoize[target]=true
            return true}
        }
    }
    memoize[target]=false
    return false
}
// A precedence rule is given as "P>E", which means that letter "P" is followed directly by the letter "E". 
// Write a function, given an array of precedence rules, that finds the word represented by the given rules.

// Note: Each represented word contains a set of unique characters, i.e. the word does not contain duplicate letters.

// Examples:
//findWord(["P>E","E>R","R>U"]) // PERU
//findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
// Message from Pedro Teixeira: ===========
// Test cases:
getWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
 //findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
 //findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
 //findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND
// ===========
// Test cases:

 //findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
// findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
//getWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
//getWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND

function findWord(S){
    let left=[]
  let s=S.reduce((acc,key)=>{
        console.log(acc,left)
           const currentPrecedence=key.split(">")
            let greater=currentPrecedence[0]
            let smaller=currentPrecedence[1]
            let m= acc.indexOf(smaller)
            let n= acc.indexOf(greater)
            if(acc.length===0){
                acc.push(greater,smaller)

            }
            else if(acc.includes(smaller)&&!(acc.includes(greater))){
                if(m>0){
                acc[acc.indexOf(smaller-1)]=greater
            }else acc.splice(0,0,greater)
            }
            else if(!(acc.includes(smaller))&&acc.includes(greater)){
                if( acc.length>=greater+1){
                    console.log("here",acc.indexOf(greater+1))
                    acc[acc.indexOf(greater+1)]=smaller
                }else {
                    acc.push(smaller)
                }
                
            }else if(m<0&&n<0&& acc.length>0){
                left.push(greater,smaller)
        }
           //console.log(acc)
            return acc
    },[])
    console.log(s,left)
    return s
}

function getWord(S){
    let memoize={}
    let word=[]
    let greaterLetters=[]
    let smallerLetters=[]
    let firstLetter
    for(let rule of S){
            const currentPrecedence=rule.split(">")
            let greater=currentPrecedence[0]
            let smaller=currentPrecedence[1]
            greaterLetters.push(greater)
            smallerLetters.push(smaller)
            memoize[greater]=smaller
    }
    console.log(memoize)
    lastLetter=getFirstLetter(smallerLetters,greaterLetters)
    firstLetter=getFirstLetter(greaterLetters,smallerLetters)
    word.push(firstLetter,lastLetter)
    let i=1
    while(true){
        if(!memoize[firstLetter]){
            break
        }
        word[i]=(memoize[firstLetter])
        firstLetter=word[i]
        i++
    }
    
    // while (true) {
    //     if (!currentLetter) {
    //       break;
    //     }
    //     word += currentLetter;
    //     currentLetter = memoize[currentLetter];
    //   }
      //let word=[...smallerLetters,...greaterLetters]
    
    // while(current===true){
       
    //         word=word+firstLetter
    //         current=memoize[current]
        
    // }
    console.log(word)
    return word

}
function getFirstLetter(a,b){
  const  letter=a.find(one=>!b.includes(one))
  
  return letter
}
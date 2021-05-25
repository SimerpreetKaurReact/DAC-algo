// Message from Pedro Teixeira: "Domino": We are given an S string, representing a domino tile chain.
//  Each tile has an L-R format, where L and R are numbers from the 1..6 range. The tiles are separated by a comma. 
//  Some examples of a valid S chain are:

// 1. "6-3"
// 2. "4-3,5-1,2-2,1-3,4-4"
// 3. "1-1,3-5,5-2,2-3,2-4"

// Devise a function that given an S string, returns the number of tiles in the longest matching group within S.
// A matching group is a set of tiles that match and that are subsequent in S.
//  Domino tiles match, if the right side of a tile is the same as the left side of the following tile. 
//  "2-4,4-1" are matching tiles, but "5-2,1-6" are not.

// domino("1-1,3-5,5-2,2-3,2-4") // should return 3.
// "Domino": We are given an S string, representing a domino tile chain. Each tile has an L-R format, where L and R are numbers from the 1..6 range. The tiles are separated by a comma. Some examples of a valid S chain are:

// 1. "6-3"
// 2. "4-3,5-1,2-2,1-3,4-4"
// 3. "1-1,3-5,5-2,2-3,2-4"

// Devise a function that given an S string, returns the number of tiles in the longest matching group within S. A matching group is a set of tiles that match and that are subsequent in S. Domino tiles match, if the right side of a tile is the same as the left side of the following tile. "2-4,4-1" are matching tiles, but "5-2,1-6" are not.

// domino("1-1,3-5,5-2,2-3,2-4") // should return 3.
//console.log(dominotSequence("6-3"))
//console.log(dominotSequence("4-3,5-1,2-2,1-3,4-4"))
console.log(newdominoSequence("1-1,3-5,5-2,2-3,2-4"))
console.log(newdominoSequence("1-1,3-5,5-2,2-3,2-4,3-4,4-4,4-2,2-3"))
function dominoSequence(S){
   let editedArray=[]
   editedArray.push(S.split("-"))
   count=1
   let length=0
    
    for(let i=1;i<editedArray[0].length;i++)
    {      let a=editedArray[0][i].split(",")
            if(a[0]===a[1]){
                    
                    count++
                    

                
            }else{
                if(count>length) length=count
                count=1
            }
            if(count>length) length=count
           
        
    }
    return length

    
}


function newdominoSequence(S){
  let s=S.split(",")
    if(!s.length) return 0
    let length=0
    let count=1
    let lastR=0
    s.map((str)=>{
            let tile=str.split("-")
            console.log(tile)
            let left=tile[0]
            let right=tile[1]
            if(lastR===left){
                count++
            }else{
                if(count>length) length=count
                count=1
            }
            lastR=right
            if(count>length) length=count
    })
    return length
}

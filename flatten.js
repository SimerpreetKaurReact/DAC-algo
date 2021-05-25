function flatten(array){
    
    let flat=[]
    for(const arr of array){
        if(Array.isArray(arr)){
                
                  flat=[...flat,...flatten(arr)]  
                
        }else flat.push(arr)
    }
  
       
    
 return flat
}
console.log(flatten([1, 2, 3, [4, 5, 6, 7, [8, 9]]]) )
console.log(flatten([9, 0, [1, 2, [3, 4], [5, 6], [7, [8]]]])) 
console.log(flatten([1, [2, [3, [4, [5, [6, [7, [8, [9, [0, [1, [2, [3, [4, [5, [6]]]]]]]]]]]]]]]]))
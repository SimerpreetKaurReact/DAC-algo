function binarySearch(array, target) {
    // Write your code here.

      return BS(array,target,0,array.length-1)
  }
  function BS(a,x,i,j){
      
          if(i===j){
              if (a[i]===x) return i
              else return -1
          }
          else {
              console.log(Math.floor((i+j)/2))
              const mid =Math.floor((i+j)/2)
              if(a[mid]==x){ return mid}
                  else if(x<a[mid]){
                      console.log(a,x,0,(mid-1))
                  return	BS(a,x,0,(mid-1))
                  }
                      else  if (x>a[mid]){
                          console.log(a,x,(mid+1),j)
                      return	BS(a,x,(mid+1),j)
                      }
          
          }
          
      }
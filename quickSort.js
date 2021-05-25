function quickSort(array) {
    
      quick(array,0,array.length)
      
      return array
  }
  function 	quick(a,p,q){
      if(p>=q) return a
      else{
          let m= partition(a,p,q)
          quick(a,p,m)
          quick(a,m+1,q)
          return a
      }
      
  }
  function partition(a,p,q){
      let x=a[p] 
      let i=p
      for(let j=p+1;j<q;j++){
          if(a[j]<=x){
              console.log("i,j",i,j)
              i++
              swap(i,j,a)
              
              console.log(a)
              
          }
          
          
      }
      swap(p,i,a)
          return i
  }
  function swap(left,right,a){
      
      let temp=a[right]
      a[right]=a[left]
      a[left]=temp
      return a
  }
  
  
  
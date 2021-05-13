// two Number sum DAC
function twoNumberSum(array, targetSum) {
    // Write your code here.
      let test=array.sort((a,b)=>a-b)
      let left = 0
      let right = test.length-1
      while(left<right){
      const currentSum=test[left]+test[right]
      if (currentSum ===targetSum){
          return [test[left],test[right]]
                          }
          else if(currentSum < targetSum){
              left++}
          else{
              right--
          }
      }
      return [];
      //this is greedy algo
   }




   //validate subsequence
   //give two non-empty array of integers, write a function that dtermines whether the second array is a subsequence of the first one
   // 
   function isValidSubsequence(array, sequence) {
    // Write your code here.
      let i=0
      const newArr=array.reduce((acc,ele)=>{
          if(ele===sequence[i]){
              acc.push(ele)
              i++
          }
          return acc
      },[])
      console.log(newArr)
  return newArr.length===sequence.length
  }

  //sorted squared array
  
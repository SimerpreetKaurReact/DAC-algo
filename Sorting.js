// Write a function

// function solution(A);

// that, given an array A consisting of N integers, returns the number of distinct values in array A.

// For example, given array A consisting of six elements such that:

//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
   let  distinct =0
  A= mergeSort(A)
   //threee elements
   //
  const newA= A.reduce((acc,ele)=>{
        if(acc!=ele) {
            acc=ele
            distinct++
        }
        return acc
   },-1)
   return distinct
}
function mergeSort(a){
    if(a.length<2){
    
    return a
    }
    else{
      let  mid=Math.floor((a.length)/2)
      let left =a.slice(0,mid)
      let right=a.slice(mid,a.length)
      return merge(mergeSort(left),mergeSort(right))
    }
}
function merge(left,right){
    let arr=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else arr.push(right.shift())
    }
   
    return [...arr,...left,...right]

}


//A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given a non-empty array A, returns the value of the maximal product of any triplet.

// For example, given array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
   A=mergeSort(A)
   let N=A.length-1
           let product=A[N]*A[N-1]*A[N-2]
    return product
}
function mergeSort(a){
    if(a.length<2) return a
    else{
let mid=Math.floor((a.length)/2)
    let left =a.slice(0,mid)
    let right =a.slice(mid,a.length)
    return merge(mergeSort(left),mergeSort(right))
    }
    

}
function merge(left,right){
    let arr=[]

    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }else {arr.push(right.shift())}
    }
    
    return [...arr,...left,...right]
}



// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.

// Write a function:

// function solution(A);

// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

// For example, given array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:

//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    triangularTrip =0
    A=mergeSort(A)
    
    let N=A.length
   
    for(let r=N-1;r>=0;r--){
        let q=r-1
        let p=q-1
        if(triangularTrip===0){
             while(p>=0||q>=0 ){
            if(A[p]+A[q]>A[r]&& A[q]+A[r]>A[p]&&A[r]+A[p]>A[q]){
                triangularTrip=1
            }
            q--
            p--
        }
        }
       
    }


    return triangularTrip
}

function mergeSort(a){
    if(a.length<2) return a
    else{
        let mid=Math.floor(a.length/2)
        let left = a.slice(0,mid)
        let right =a.slice(mid,a.length)
        return merge(mergeSort(left),mergeSort(right))
    }

}
function merge(left,right){
    let arr=[]
    while(left.length&&right.length){
    if(left[0]<right[0]){
        arr.push(left.shift())
    }else arr.push(right.shift())
}
    return [...arr,...left,...right]
}

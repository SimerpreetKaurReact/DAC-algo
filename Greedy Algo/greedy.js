// Given an array of jobs where every job has a deadline and associated profit if the job is finished before the deadline. It is also given that every job takes a single unit of time, so the minimum possible deadline for any job is 1. How to maximize total profit if only one job can be scheduled at a time.

// Input: Four Jobs with following 
// deadlines and profits
// JobID  Deadline  Profit
//   a      4        20   
//   b      1        10
//   c      1        40  
//   d      1        30
// Output: Following is maximum 
// profit sequence of jobs
//         c, a   


function printJobscheduling(arr,t){
        let n =arr.length

    //sort all jobs according to decreasing order of profit
    for(let i =0;i<n;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j][2]<arr[j+1][2]){
                let temp =arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    //to keep track of free time slots 
    let results=[]
    //to store results (sequence of jobs)
    let job=[]
    for(let i =0;i<t;i++){
        job[i]="-1"
        results[i]=false
    }


    //iterate through all the given jobs
    for(let i=0;i<arr.length;i++){
        //find free slot for this job
        //we start from last possible slot
        for(let j=(t-1,arr[i][1]);j>=0;j--){
            //free slot found
            if(results[j]===false){
                results[j]=true
                job[j]=arr[i][0]
                break
            }
        }
    }
    console.log(job);
}
// Driver COde
arr = [['a', 2, 100],  // Job Array
       ['b', 1, 19],
       ['c', 2, 27],
       ['d', 1, 25],
       ['e', 3, 15]];
 
console.log("Following is maximum profit sequence of jobs ");
console.log("<br>");
 printJobscheduling(arr, 3)
 newarr=[['a', 4, 20],  // Job Array
 ['b', 1, 10],
 ['c', 1, 40],
 ['d', 1, 30],]
 printJobscheduling(newarr, 4)
// Function Call

 


//find min waiting for a set of queries , representing the amount of time that query takes

function minimumWaitingTime(queries) {
    // Write your code here.
      //step1 as per greedy sort teh queries
      queries.sort((a,b)=>a-b)
      let Wt=0
      for(let i=0;i<queries.length;i++){
          const currentDuration = queries[i]
          const queriesLeft=queries.length-1-i
          Wt=Wt+(currentDuration*queriesLeft)
      }
      
    return Wt
  }
  
  
const q=[3,2,1,2,6]
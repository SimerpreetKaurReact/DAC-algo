//greedy approch 
//sort the activities according to their finishing time
//select the first activity from the sorted array and print it
//for the rest
// if the start time of this activity is greater than or equal to the finish time of previously selected 
//then selec this activity and print it
arr = [['a', 0, 6],  // Sort the activities 
        ['b', 3, 4],
        ['c', 1, 2],
        ['d', 5, 9],
        ['e', 5, 7],
        ['f', 8, 9]];

        function ActivitySelectionProblem(a){
            for(i=0;i<a.length;i++){
                console.log("here",a[i])
                for(j=i+1;j<a.length;j++){
                    if(a[i][2]>a[j][2] ){
                        swap(a,i,j)
                    }
                }
            }
            console.log(a)
               //select the first activity from sorted table and print it 
               //if start time of next activity is greater than or qual 
               let result=[]
               let acc=a[0][2]
               result.push(a[0])
               for(let i=0;i<a.length-1;i++){
                    if(a[i+1][1]>=acc){
                        acc=a[i][2]
                        result.push(a[i+1])
                    }
               }
               return result.length
        }
      function  swap(a,i,j){
          const temp= a[i]
          
          a[i]=a[j]
          a[j]=temp

        }

        console.log(ActivitySelectionProblem(arr))
        
        
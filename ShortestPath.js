
// There is a popular saying that goes: "The friends of my friends are my friends". 
// A friendship is represented in the form "PersonA:PersonB", which means that PersonA and PersonB are friends.
//  Given two such relations, for example, "PersonA:PersonB" and "PersonB:PersonC", and taking the saying into 
//  account means that PersonA is friends with PersonB and PersonC, PersonB is friends with PersonA and PersonC and PersonC 
//  is friends with PersonA and PersonB.
// Now, write a function that, given an array of such relations as the first parameter, calculates the total number 
// of friends for the array of people given as the second parameter.
// Examples:
withMapReduce(["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]) // Anne:2, Vinny: 1
withMapReduce(["Octavia:Zoltan", "Zoltan:Marko", "Marko:Diego", "Diego:Andres"], ["Octavia", "Diego"]) // Octavia: 4, Diego: 4
arrays = [
    [["Anne:Barbara","Barbara:Ivan", "Vinny:Vlad"], ["Anne", "Vinny"]],
    [["Octavia:Zoltan", "Zoltan:Marko", "Marko:Diego", "Diego:Andres"], ["Octavia", "Diego"]],
    [["Alessandro:Anna", "Anna:Anne", "Anne:Barbara", "Barbara:David", "David:Francis", "Francis:Eduardo", "Eduardo:Anna", "Eduardo:Alessandro", "Luis:Marko", "Joao:Vlad", "Vlad:Luka", "Luka:Nikola", "Nikola:Roman", "Vlad:Roman", "Vlad:Vinny", "Vinny:Roman", "Vlad:Andres", "Vinny:Ivan"], ["Barbara", "Joao"]],
    [["Vanja:Sergio", "Sergio:Pedro", "Pedro:Martin", "Martin:Pablo", "Pablo:Sergio", "Jelena:Ivan", "Jelena:Alan", "Alan:Tomislav"],["Tomislav", "Martin"]],
    [["Alvaro:Alex", "Roman:Nikola", "Octavia:Barbara", "Joao:Marko", "Luis:Vanja", "Gabriel:Gustavo", "Alan:Pablo", "Ivan:Andres", "Artem:Anne", "Martin:Alessandro", "Sebastian:Vinny", "Eduardo:Francis", "Zoltan:Vlad"], ["Zoltan", "Ivan"]]
]



function getFriends(friends,find,table={}){
    for(const friend of find){
        table[friend]=0
    }
    
    friends.map(friendPair=>{
        console.log("find",find)
        for(const friend of find){
        
        let eachFriendOfPair=friendPair.split(":")
       let rightFriend=eachFriendOfPair[1]
       let leftFriend=eachFriendOfPair[0]
            
               
                if(leftFriend===friend||rightFriend===friend){
                    table[friend]=table[friend]+1
                    getFriends(leftFriend!=friend? [leftFriend]:[rightFriend])
                    console.log("inside",friendsOffriend,onefr)
                }
            
            
            console.log("friendsOffriend",friendsOffriend)
        }
        
       
       
    })
console.log(table)
return table[friend]
}
function newgetFriends(friends,find,table={}){
    console.log("1st",find,table)
    let newTable={}
    for(const friend of find){
        newtable[friend]=0
        table[friend]=getFriendsHelper(friends,friend,table) 
    }
   
   return table

}  
function getFriendsHelper(friends,find,table) {
    console.log("2nd",friends,find,table)
    if(friends.length===0) return 0
        for(const friend of find ){
            console.log("3",find,table)
            for(let current=0;current<friends.length;current++){
                let eachFriendOfPair=friends[current].split(":")

                let rightFriend=eachFriendOfPair[1]
                let leftFriend=eachFriendOfPair[0]
                if(leftFriend===friend||rightFriend===friend){
                    table[friend]=table[friend]+1
                    console.log("newFriend",friends.slice(current,current+1),friends)
                    let newFriend=friends.splice(current,1)
                    let currentCount=getFriendsHelper(friends,(leftFriend!=friend? [leftFriend]:[rightFriend]),table)
                    table[friend]=table[friend]+currentCount
                    console.log("inside",table,eachFriendOfPair)
                }
            }
        }
        return table[find]
}


function withMapReduce(friends,find){
        let table={}
    for(const friend of find){
        table[friend]=0
    }
    let currentCount=0
        for (const i in find){
            console.log(i)
        friends.reduce((acc,pairOffriend)=>{
            let eachFriendOfPair=pairOffriend.split(":")

            let rightFriend=eachFriendOfPair[1]
            let leftFriend=eachFriendOfPair[0]
                    
            //console.log(`${leftFriend}`,rightFriend,acc,(acc.includes(rightFriend)),`${leftFriend}` in acc)
            if(acc.length){
                if( acc.includes(rightFriend)){
                    acc.push(leftFriend)
                    currentCount++
                }
                else if(acc.includes(leftFriend)){
                    acc.push(rightFriend)
                    currentCount++
                }
            }else if(find[i]===rightFriend){
                            acc.push(leftFriend)
                            currentCount++
            }else if(find[i]===leftFriend){
                        acc.push(rightFriend)
                        currentCount++
                    }       
                //console.log(acc)
                return acc
        },[])
        table[find[i]]=currentCount
        currentCount=0
    }
        console.log(table,currentCount)

}
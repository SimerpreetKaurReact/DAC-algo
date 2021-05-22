function hashStringToInt(s){
        let hash=17
        for(let i=0;i<s.length;i++){
               hash=hash* s.chart 
        }
        return hash
}
class HashTable{
    table =new Array(100)

    setItem=(key,value)=>{
            const idx= hashStringToInt(key)
            this.table[idx]=value
    }
    getItem=(key)=>{
        const idx=hashStringToInt(key)
        return this.table[idx]
    }
}
const myTable =new HashTable()
myTable.setItem("firstName","bob")
myTable.getItem("firstName")
console.log(myTable.getItem("firstName"))
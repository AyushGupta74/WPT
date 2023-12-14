let obj = { song :"dekha na hai re" , 
            singer:"kishore kumar",
            album :{
                  movie : "xyz",
                  year: 1980
            }
          }

//let obj2 = obj  //this will just create two references pointing to same obj
//let obj2 = {...obj} //this will create a copy of obj -- it is shallow copy 

let obj2 ={...obj, album:{...obj.album}}
obj2.song ="dekha na hai re socha na hai re"
console.log(obj.song,"\n",obj2.song)

obj2.album.year=2022
console.log(obj.album.year,"\n",obj2.album.year)


let arr = [10,20,30]
let arr2 = [100,arr]
//let arr2= [100,[10,20,30]]
//what is the length of arr2 ?
console.log(arr2.length)
//print 20 using arr2
console.log(arr2[1][1])

let arr3 = [100,...arr]
// arr3 = [100, 10,20,30]
//what is the length of arr3 ?
console.log(arr3.length)
//print 20 using arr3
console.log(arr3[2])
































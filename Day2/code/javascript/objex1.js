let obj = { fname:"prachi", 
            lname:"godbole",
            job:"trainer",
            address : {
                area :"ppp",
                city:"pune",
                state:"mah",
                pin:"411111"
            },
            skills:["core java","spring boot","javascript"],
            show:function(){
                console.log(this.fname,this.lname)
            }
          }

console.log(obj.fname,obj.lname, obj.job)
console.log(obj.address.city)
console.log(obj.skills[2])

//ANOTHER WAY to access properties  
console.log(obj["fname"])
console.log(obj["address"]["city"])
console.log(obj["address"].pin)

obj.show()
console.log(typeof(obj.show))

console.log(typeof(obj))
let rv = JSON.stringify(obj)
console.log(typeof(rv))
console.log(rv.fname)

let o =JSON.parse(rv)
console.log(typeof(o), o.fname)











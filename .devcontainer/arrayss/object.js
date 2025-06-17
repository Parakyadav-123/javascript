// singleton

//object literal
 const mysmb = Symbol("key1")

 
const js = {
    name : "parak" , //key : value
    age : 18,
    [mysmb] : "ykey" , //interview
    loca : "jaipur",
    email : "jjdjd@" ,
    "fullname" : "yadav" ,
}

console.log(js.email); //not generallyused

console.log(js[mysmb])
Object.freeze(js) //no further changes can be applied
js.email=" yadav.paarak"
console.log(js)






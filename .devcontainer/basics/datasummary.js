//primitive

//7 type : String , Number Boolean , null , undefined , Symbol, BigInt

const id = Symbol("123")
const iid = Symbol(123)
// define unique things

console.log(id === iid);



 //reference (non primitive) 

 //aray , Objects , Functions

 const heros = ["ninja", "shaktiman", "doga"] // return type  object function do chatgpt
 let myobj = {
    name: "pararl",
    agr : 22
 }

  const myfunction = function(){
    console.log("hello");
    

 }
 console.log(typeof myfunction);
  console.log(typeof heros);

  

// ++++++++++++++++++++++++++++++

let myyoutube = "parakyoutube"
let anothername = myyoutube

anothername= "chaiorcode"
console.log(myyoutube);
console.log(anothername);

let user ={
   email : "suer@gmail.com" , 
   upi : "eerr"

}



let user2 = user

user2.email = "parak@gmail"
console.log(user.email);
console.log(user2.email);


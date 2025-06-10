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


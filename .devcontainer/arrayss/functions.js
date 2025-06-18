//  function myspace(){
//     console.log("helllo");
    
//  }
//  myspace() //basic

function addtwonum ( Number1 , Number2){ //parametrs
    // console.log(Number1 + Number2);
    

}
const res = addtwonum(2,3) //arguments //res value will be undefined because fun does not returned anything

function addtwonums( Number1 , Number2){ //parametrs
    // console.log(Number1 + Number2);
    let result = Number1 + Number2 
    return result
    // console.log("never get executed after return satatment");
    

}
// addtwonums(2,5)
const result =  addtwonums(2,5) //scope
// console.log(result)

function loginuse(username = "sam" ){
    if(username === undefined){
        console.log("please enter useename")
        return
    }
    return ' ${username} just login '
}
// console.log(loginuse("psr"))
// console.log(loginuse())

function calculatecart (num1){
    return num1

}
console.log(calculatecart(3));

function calculatecarts (...num1){ //rest operator return an array
    return num1

}
console.log(calculatecarts(3 , 5 ,6)); //return array

function calculatecar ( val1 , val2 , ...num1){ //rest operator return an array
    return num1

}
console.log(calculatecar(3 , 5 ,6,7,9 ,8)); //

// const user = {
//   name : "scd" ,
//   price :11
// }

function abc (anyobj){
    console.log(`user name , ${anyobj.name} and prrice is , ${anyobj.price}`);
    
}
//  abc(user)
 abc({                //direct obj pass we can do
    name : "paral" ,
    price : 33
 }

 )

 const arr = [10,129,34,555,3] //can pass array to functions as well
function mynewarr(array){
    return array[2]
}
console.log(mynewarr(arr));

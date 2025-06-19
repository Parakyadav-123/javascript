let a =10

var c =56

// console.log(a);

// console.log(c);
let d =4 
if(true){
    let d =29
    // console.log(d);
    const b =32
    var  n =45
}
// console.log(d);
// console.log(b);
// console.log(n);


function one (){
    const username ="abc"
    function two (){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}
one ()


if(true){
    const us ="oop"
    if(true){
        const websited =" youtube"
        //  console.log(us + websited);
    }
    // console.log(
    // websited); //out of scope
    
}
// console.log(us);


// +++++++++ intersting +++++++++++=
addone (5) //no error 
function addone (num){
    return num +1
}
// addone (5)
addtwo(3) //error the way we declare
const addtwo = function(num){
    return num +3
}
// addtwo(3)
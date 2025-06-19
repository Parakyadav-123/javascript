const user= {
    name : "pap" ,
    price : 22 , 
    welcome_mess : function(){
        // console.log(`${this.name} , welcome to webxite`);
        //  console.log(this);
           
    }

}

// user.welcome_mess()
// user.name ="ssam"
// user.welcome_mess()
// console.log(this);

// function chai (){
    let username = "parak"
    // console.log(this);
    
    // console.log(this.username); //only ussed in object
    
// }
// chai()

const chai = function(){
    // console.log(this);
    

}
chai()

const chaii = () => {
    console.log(this);
    
}
chaii()

///arrow func

// () => {}

const addone = (n1, n2) => {
    return  n1 +n2

}
console.log(addone(2,3));

//explicite way 
// const add = (m1,m2) => (m1 +m2) //{return}  //(no return)
const add = (m1,m2) => ({namee : "ff"}) //object return
 
console.log(add(6,7));




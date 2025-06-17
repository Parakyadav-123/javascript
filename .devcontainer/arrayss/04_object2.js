//construtor ,  singleton

const tinder = new Object() //singleton object
const tinderuser ={} //not a singlr ton obj

tinder.name= "parak"
tinder.id= 123
// console.log(tinder);

const regularuser ={  //nesting obj
    email : "ss@gmail.com" ,
     fullname :{
        usernameefullname : {
            firstname : "parak" ,
            lastanme :"yadav"
        }
     }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.usernameefullname);
// console.log(regularuser.fullname.usernameefullname);

const obj1 ={1:"a" , 2 :"B" , 3:"c"}
const obj2 ={6:"h" , 4 :"d" , 5:"f"} //concatinate


const obj3 = Object.assign({} , obj1 , obj2) //(taget , source)
console.log(obj3);

const obj4 ={ ...obj1, ...obj2}  //seprade methode to concatinate
console.log(obj4);  




const user =[ //array of object
{
    id:1 ,
    email : "ffff@",
} ,

{
    id:1 ,
    email : "ffff@",
} ,
{
    id:1 ,
    email : "ffff@",
}]
user[1].email
console.log(tinder);
console.log(Object.keys(tinder)); //return type array
console.log(Object.values(tinder)); //return type array
console.log(Object.entries(tinder)); //return type array and each element has kkey and values

console.log(tinder.hasOwnProperty("name")); //check wheter key is avaible or not

//destructuring

const course ={
    coursename : "js" ,
    price : "999"
     
}
// course.coursename

const {coursename : instructor} = course

console.log(coursename);
console.log(instructor);

//json //api
// {
//     "name" : "parak" ,
//     "cousename" : "js" ,
//     "price" : "free" ,
// }

//api can be in array form
[
    {

    } ,
    {

    } ,
]









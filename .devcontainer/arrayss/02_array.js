const hero =["ironman" , "spiderman" , "thor"]
const dc =["ij" , "ss" , "uu"]
//  hero.push(dc) //concat can be use

//  console.log(hero);
//  console.log(hero.length);
 const allhero = hero.concat(dc)
 console.log(allhero); //return new array

 const alllneehro=[...hero, ...dc] //seperate

 console.log(alllneehro);

 const anotherarr = [1,2,3,[4,5,6],7,[8,9,10,[7,8]]]
 const flatarr = anotherarr.flat(Infinity)
 console.log(flatarr);
 

 console.log(Array.isArray("parak"));
 console.log(Array.from("parak"));
 console.log(Array.from({name : "parak"})); //interesting case interview
 let sc =100
 let sc2 =200
 let sc3 =400

 console.log(Array.of(sc , sc2 , sc3));
 
 
 
 

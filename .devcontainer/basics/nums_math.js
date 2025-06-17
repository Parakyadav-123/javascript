 const score = 400

 const balance = new Number(100)
 console.log(balance);
 console.log(balance.toString().length);
 console.log(balance.toFixed(2));

 const othernum = 3.999
 console.log(othernum.toPrecision(3));

 const hundreds = 1000000
 console.log(hundreds.toLocaleString());
 console.log(hundreds.toLocaleString('en-IN'));
 
 // ++++++++ maths +++

 console.log(Math);
 console.log(String);

 console.log(Math.abs(-5)); //only -ve to +  
 console.log(Math.round(4.5)); // floor ceil 
 
 console.log(Math.max(34 ,44,33,22,67)); //also min

 console.log(Math.random()); //comes 0 -1 between
 console.log(Math.random() * 10 +1); //comes 1 - 10

 const min = 10
 const max =20

console.log(Math.floor( Math.random() * (max  -min +1) +min ));

 
 



 
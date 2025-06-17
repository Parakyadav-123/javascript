const name = "parak"
const repocount = 50

console.log(name + repocount + "yadav");
//  this is outdated

console.log('helllo my name is ${name} and my count is ${ repocount} ');
//not run error

const gamename =new String('parak') 
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(name.charAt(4));

console.log(gamename.indexOf('r'));

const newstring = gamename.substring(0 , 2)
//last no value not included

console.log(newstring);

const anotherstring = gamename.slice(1 , 3)
console.log(anotherstring);

const newstring1 = "   hiteshh    "
console.log(newstring1);
console.log(newstring1.trim());


const url ="https://google.com"
console.log(url.replace('gl', '3'));
console.log(url.includes('google'));

console.log(gamename.split('a'));

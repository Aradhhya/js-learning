const name = "Aradhya"
const repoCount = 50

//console.log(name + repoCount + "value");  // however this is not the perfect method
 
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('aradhyah')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('5'));
//console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4) //doesnot include negative
console.log(newString);
const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "   Aman    "

console.log ( newStringOne);
console.log ( newStringOne.trim( ));

const url = "https://aradhya.com/aradhya%20sharma"
console.log(URL.replace('%20' , '-'))  //[search, replace]

console.log(url.includes('anything')) // =>false(not present)

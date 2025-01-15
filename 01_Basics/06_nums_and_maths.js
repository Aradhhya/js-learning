const score = 555
console.log(score);

const info = new Number(123)
console.log(info);   // => it will display the type (number) 

console.log(info.toString());   // => it will change the value to string
console.log(info.toString().length);  // => it will give the length of the string
console.log(info.toFixed(2));  // => 100.00

const otherNumber = 123.578
console.log(otherNumber.toPrecision(4));

const num = 1000000
console.log(num.toLocaleString()); // => US standard type changes
console.log(num.toLocaleString('en-IN'));  // => indian standard

///++++++++++++++++++++ maths  ++++++++++++++++++++++++++++++++++++++// 

console.log(Math);  //  => Oblect [Math]{}
console.log(Math.abs(-5));    // => 5
console.log(Math.round(5.6));  // => 6
console.log(Math.ceil(4.3));  // => 5
console.log(Math.floor(5.9));  // => 5
console.log(Math.min(6,3,5,4)); // => returns minimum value
console.log(Math.max(9,12,45,67));  // => returns maximum value
 
console.log(Math.random());  // => values will be between 0 and 1 0r o or 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);   //=> roundoff to lowest value

const min = 10
const max = 20

console.log( Math.floor ( Math.random() * ( max - min + 1 )) + min)

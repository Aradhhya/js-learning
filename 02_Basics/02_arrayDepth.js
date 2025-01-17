const marvel_heros = [ "thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

 // marvel_heros.push(dc_heros)  // =>// => [ "thor" , "Ironman" , "spiderman" ["superman" , "flash" , "batman"]]

 //console.log(marvel_heros); 
  //console.log(marvel_heros [3][2]);  // => batman
  
  // const all_heros = marvel_heros.concat(dc_heros)
   // console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // => firstly break all the elements seperately and then makes an array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // it can be 1 or 2 also instead of infinity
console.log(real_another_array);  //  another_array.flat(1) =>[1,2,3,4,5,6,7,6,7] 
                                   //  another_array.flat(2)  => [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("Aradhya"))  // => false , it is an string
console.log(Array.from("Aradhya")) // => 'A','r','a','d','h','y','a',
console.log(Array.from({name: "hitesh"})) // interesting and answer will be =>[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // => [ 100,200,300]



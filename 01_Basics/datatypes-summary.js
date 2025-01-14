//symbol =>to make any value unique
//   primitive dataTypes
 // 07 types: String, Number, Boolean, null, undefined, symbol,BigInt
   const id = symbol('123')
   const anotherId = symbol('123')
   console.log(id == anotherId);    // =>false
     
    const bigNumber = 2349676950n 
    console.log(typeof bigNumber);     // => undefined
 // Reference(Non primitive data type)
   // Types: Array, Objects, Functions
   // JavaScript  is dynamically typed language because changes can be done during runtime

   const heros =["shaktiman", "naagraj","doga"]   //  => Arrays
    let myObj= {
      name : "Aradhya",
      age : 20 ,
    }               //object


    const myFunction = function(){
        console.log(Hello);
    }
   

        // Type of operator       undefined,boolean,string=>undefined,boolean,string
         //                       null  => object                            
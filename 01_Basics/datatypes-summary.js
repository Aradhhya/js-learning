//symbol =>to make any value unique
//   primitive dataTypes
 // 07 types: String, Number, Boolean, null, undefined, symbol,BigInt
   const id = Symbol('123')
   const anotherId = Symbol('123')
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
         
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         ///https://262.ecma-international.org/5.1/#sec-11.4.3
         
         // stack (primitive), Heap ( Non-primitive)

         let myYtname = "aradhya.com"
         let anothername = myYtname
         anothername ="xyz.com"
         console.log(anothername);
         console.log(myYtname)

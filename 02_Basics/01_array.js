      // Array

      const arr = [1,4,7,8,9]   // => type of arrr : object
      const myHeros = [ "shaktiman " , "amitabh bachan"]

      const arr2 = new Array( 1,2,3,4)
       // console.log(arr2[3]);

       // Array methods

        // arr.push(14)
        // arr.push(67)   => add the value but at last
        // arr.pop()       => deletes the value but from last
        // console.log(arr);

       //  arr.unshift(100)  // => add the element from the first index
       //  arr.shift()     // => removes the element from first index

        // console.log(arr.includes(9));  // => tells whether the given number is present or not if not then returns false
         //console.log(arr.indexOf(7));  // => 2

        // const newArr = arr.join()  // => converts the array into string 
         //console.log(newArr);
         //console.log( typeof newArr);  // => string

             /// slice   , splice
              
             console.log(" A" , arr)
             const myn1 = arr.slice(1,3) // => counts index and then print the value [4,7]
             
             console .log("  B " , arr)  // here array do not change
             console.log(myn1);
             const myn2 = arr.splice(1,3) // => only the element whose index is given that only comes [4,7,8]
           
             console .log("  c " , arr)  // array changes to [1,9]
             console.log(myn2); /// [4,7,8]


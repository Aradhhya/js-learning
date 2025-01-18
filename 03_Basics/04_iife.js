//   Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se bchne ke liye iife ka use krte h 
// jo function immediately execute ho jaaye => iief
(function chai(){
    // named IIFE
      console.log(`DB CONNECTED`);
})();

 //  => (function definition)( function execution)

 (   (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
 })('Aradhya');
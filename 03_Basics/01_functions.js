function myName(){
    console.log("A")
    console.log("R") 
    console.log("A")
    console.log("D")
    console.log("H")
    console.log("Y")
    console.log("A")
}
      // myName()
      // function addTwoNumbers(num1 , num2){  // function parameters
      //   console.log( num1 + num2)
      // }
      // addTwoNumbers(3 , 4)   // value which is passed during function call is called arguments  //  => 7
      // addTwoNumbers( 3, "4")  // => 34
      // addTwoNumbers( 3, "a")  // => 3a

      function addTwoNumbers(num1 , num2){
      // let result = num1 + num2;
      // return result
      return num1 + num2;
      }
      const result = addTwoNumbers( 4 , 5)
       //console.log("Result:" , result);
        
       
      function userLoginMessage(username){
        if(username===undefined){  // if(!username){}
        console.log("Please enter a username")
        return  // => if this return will work then there will be no code further read
      }
         return `${username} just logged in`
      }
       //console.log(userLoginMessage("Aradhya"));  // => Aradhya just logged in
        // console.log(userLoginMessage(""));  //  => just logged in
        //console.log(userLoginMessage());  // => undefined just logged in (if statement isnotused then )


        function  calculateCartPrice(...num1){ //=> ... =it is called rest operator or spread operator
          return num1
        }
        // console.log(calculateCartPrice(200,400,600))  // => it will give an array[200,400,600]

      // function  calculateCartPrice( val1, val2, ...num1){
      //     return num1
      //   }
      //   console.log(calculateCartPrice(200,400, 500, 600)) // =>it will read as [500,600] because 200 will go to val1 and 400 will go to val2
          
      const user = {
        username: "Aradhya",
        price: "free",
      }
      function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
      }

       // handleObject(user)
       handleObject({
        username: "Ram",
        price:499,
       })

       const arr =[ 200,300,400,500]

       function returnValue(getArray){
        return getArray[3]
       }

      // console.log(returnValue(arr));
        console.log(returnValue([200,300,400,500]));
       
const user = {
    username:"Aradhya",
    price: 999,
    welcomeMessage : function (){
        console.log( ` ${this.username} , Welcome to the website`);
         //console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "sitaRam"
// user.welcomeMessage()
     //console.log(this) // => it will give empty value =>{} because we are inside node environment and global scope of this is empty
/*   if the same console.log(this) is written 
in browser the windows  appear as a global object */


// function one(){
//     let username = "Aradhya"
//     console.log(this.username);  // => undefined
// }
// one()

// const one = function(){
//     let username = "Aradhya"
//     console.log(this.username);
// }
// one()   // => it iwill also give output as undefined

const one = () =>{  // this is called arrow function 
     username="Aradhya"
     console.log(this.username);  // => undefined
     console.log(this);   // => {} (this will be the output)
}
  // one()

    // () => {}  : this is called arrow function

    // const addTwo = ( num1 , num2 ) => {   // if curly braces is used then [return] should be written
    //     return num1+ num2  => when we are using return then it is called explicit return
    // }
    // console.log(addTwo(7,8))  // => normal use
     
     //  const addTwo = ( num1 , num2 ) = num1+ num2   // => this  is called implicit return  (answer will be same)
    
      // console.log(addTwo(7,8))

     // const addTwo = ( num1 , num2 ) = (num1+ num2)  // => no need to write return
    // the above technique is used in react
     // console.log(addTwo(7,8))

    // const addTwo = ( num1 , num2 ) = {username:"Aradhya"} 
    // console.log(addTwo(7,8))  // => undefined

     const addTwo = ( num1 , num2 ) = ({username:"Aradhya"} )
     console.log(addTwo(7,8))  // => it should always be wrapped in parenthesis to return any object

     const arr = [ 4,5,6,7,8]
     arr.forEach(()  => {})
     arr.forEach(() =>[])
     arr.forEach( function()  {})
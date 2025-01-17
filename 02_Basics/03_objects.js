  // Objects can be declared in two ways : as a (literals) and as a (constructor) 
    // singleton => using constructor it is made (it is an object in itself)
    // singleton is not made if it is made with the help of literals

    // Object literals
     // Object.create // =>  constructer method

     const mykey = Symbol("key1")

     const jsUser = { 
        name: "Aradhya",
        "fullName": "Aradhya Sharma",
        [mykey]: "mykey1",  // as a symbol type it is used
         ///  mykey: "mykey1" // as a string it is used    => V *VI***
        age: 20,
        location: "Raipur",
        email: "aradhyagmail.com",
        isLoggedIn: false,
        lastLoginDays:[ "Mondays" , "Saturday"]
     }
        
        console.log(jsUser.name);  // => However this is not a good method
        console.log(jsUser["email"])  // => Another way to access the elements of the objects
        console.log(jsUser.fullName)
        console.log(jsUser["fullName"])
        console.log(jsUser[mykey]);  // as a symbol type answer will be there
        

        jsUser.email= "aradhya@gmail.com" // =>for changing the element of an object
          // Object.freeze(jsUser) // now no amendements can be done further
        jsUser.email = "aradhya@chatgpt.com"
        console.log(jsUser); // => only one time email will change and no further amendement will bw done

        jsUser.greeting = function(){
            console.log("Hello JS user")
        }
        jsUser.greetingTwo = function(){
            console.log(`Hello JS user ${this.fullName}`)
        }
         // console.log(jsUser.greeting);  => it will give undefined value
           console.log(jsUser.greeting());
           console.log(jsUser.greetingTwo())
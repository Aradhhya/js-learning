 // const tinderUser = new Object()   // => it works a singleton
 const tinderUser = {}   // woks as non-singleton

 tinderUser.Id = "123klmn"
 tinderUser.name = "Ram"
 tinderUser.isLoggedIn = false
   // console.log(tinderUser);

   const regularUser = {
    email: "aradhya@gmail.com",
    fullName : {
        userfullName :{
            firstName: "Aradhya",
            lastName: "Sharma",
        }
    }
   }
     // console.log(regularUser.fullName.userfullName.firstName)

     const obj1 ={ 1: "a" , 2: "b"}
     const obj2 = { 3: "a" , 4: "b"}
      // const obj3 = {obj1 ,obj2}
     // const obj3 = Object.assign(obj1,obj2)  // not a good method
      //const obj3 = Object.assign({} , obj1, obj2)
     const obj3 ={...obj1, ...obj2}

       // console.log(obj3)

       const users =[
        {
            id: 1,
            email:"abc.com"
        },
        {
            id: 2,
            email:"abcdef.com"
        },
        {
            id: 3,
            email:"xyz.com"
        },
         ]
          //console.log(users[2].email) => xyz.com
        //  console.log(tinderUser)
         // console.log(Object.keys(tinderUser));
         // console.log(Object.values(tinderUser));
        // console.log(Object.entries(tinderUser));  // converts the individual(keys:values) into array

          // console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true
        //  console.log(tinderUser.hasOwnProperty('isLogged'))  // false

         const course ={
            coursename:" JS tutorials",
            price: "1999",
            courseInstructor: "Hitesh sir",
         }
          // course.courseInstructor
        //   const {courseInstructor} = course
        //   console.log(courseInstructor)   // =>Another method is given below
          const {courseInstructor: instructor} = course
          console.log(instructor);

            //const navbar = ({company}) => { // destructuring is being done

         // }
         //   navbar( company = " aradhya")// not a javascript concept

          // {  //json  => both key and value is string
          //  name : "Aradhya",
          //  coursename : "JS tutorials",
          //  price: "Free"
            //  }   // => JSON as object

            [
                {},
                {},
                {},
            ]    // => JSON as array


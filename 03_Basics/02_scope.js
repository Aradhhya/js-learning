// let a = 5;
// const b = 6;
// var c = 7;
// // => {} it is called scope
// console.log(a)
// console.log(b)
// console.log(c)
// var c = 300 ; // => it is called global scope and values will be available inside block scope as well but vice versa is not true
if (true){  // => inside if whatever is written is called block scope
    let a = 5;
    const b = 6;
  //  console.log("INNER:" , a);
  //  var c = 7;
}
  // console.log(a) // => error
 //  console.log(b)  // => error
 //  console.log(c)  // => anser will be 7 (variable is being used)


      function one(){
        const username=  "Aradhya"
        
        function two(){
            const website = "youtube"
         //  console.log(username);
        }
         //  console.log(website);  // => it is not accessible because it is in block scope
          two()
        } 
        // one()

        if(true){
            const username = "Aradhya"
            if (username=="Aradhya"){
                const website ="Youtube"
              //  console.log(username + website);
            }
           // console.log(website);
        }
        // console.log(username);

        //  ++++++++++++++++++++ INTERESTING  ++++++++++++++++++

        function addone(num){
            return num+1
        }
        addone(5)
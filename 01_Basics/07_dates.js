  /// Dates

  let myDate = new Date()  // => here myDate is a type of object
  console.log(myDate.toString());
  console.log(myDate.toDateString());
  console.log(myDate.toLocaleString());
  console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
//   console.log(myCreatedDate.toDateString());  // => Mon Jan 23 2025
   

  let myCreatedDate = new Date (" 2025-02-05")
  console.log(myCreatedDate.toLocaleString());

  let myTimeStamp = Date.now()
  console.log(myTimeStamp) ;
  console.log(myCreatedDate.getTime()) ;
  console.log(Math.floor(Date.now()/1000));
  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth()+1);  // Month 
  console.log(newDate.getDay());  // day 
   
console.log(`The day is ${newDate.getDay()} and the time is ${newDate}`)

newDate.toLocaleString('default',{
     weekday: "long",
})  // press ctrl + space
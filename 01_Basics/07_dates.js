  /// Dates

  let myDate = new Date()  // => here myDate is a type of object
  console.log(myDate.toString());
  console.log(myDate.toDateString());
  console.log(myDate.toLocalString());
  console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
//   console.log(myCreatedDate.toDateString());  // => Mon Jan 23 2025
   

  let myCreatedDate = new Date (" 2025-02-05")
  console.log(myCreatedDate.toLocalString());

  let myTimeStamp = Date.now

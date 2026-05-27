switch(expression){

   case value1:
      code
      break;

   case value2:
      code
      break;

   default:
      code
}


let day = 3;

switch(day){

   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

   case 3:
      console.log("Wednesday");
      break;

   default:
      console.log("Invalid Day");

}   

let day = 2;

switch(day){

   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

}

//fall through method
let day = 2;

switch(day){

   case "monday":
   case "tuesday":
   case "wednesday":
      console.log("weekday");
   case "sunday":
      console.log("weekend");
   default:
      console.log("not a day");
      
}
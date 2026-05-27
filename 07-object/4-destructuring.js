
//Object Destructuring

// let obj = {
//     id:1,
//     name1:"Kesavan"
// }

// console.log( obj.name2 );

// let {name1,id} = obj

// console.log(  id,name1 );
//------------------------------------------------------


//Nested Object Destructuring

// let nestObj = {
//     id:1,
//     name1 : "Murugesan",
//     bankDetails : {
//         accName : "Murugan",
//         accNo : 123456,
//         branch : "xyz"
//     }
// }

// let {id,name1, bankDetails: { accName, accNo, branch  } } = nestObj

// console.log( nestObj.bankDetails.accNo );
// console.log( name1, branch );
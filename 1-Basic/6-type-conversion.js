// string

console.log("hi" +1);
console.log("hi" +true);
console.log("hi" +undefined);
console.log("hi" +null);
console.log("hi" +{});
console.log("hi"+[1,2]);

// anything+string===string+anything ====>string


// number 

console.log(10+true);
//11 
console.log(10+undefined);
//nan
console.log(10+null);
// 10+0=10
console.log(10+[1]);
//101 array is converted to string

console.log(10+{});
//string
console.log(10+``);
//string

//Boolean

console.log( 10  + true );
console.log( true + undefined ); //Nan
console.log( true + null ); // 1 + 0 == 1

console.log(  10 == '10'  );//10==10 true covert to num

console.log(   10 - 'abc'  );//nan
console.log( 10 - '' ); // 10 - 0 = 10


//Explicit Conversion


console.log( 10 + Number( "10" ));//20
console.log( Number( "" ) );//0
console.log( Number( "abc" ) );//nan
console.log( Number( true) );//1
console.log( Number( false ) );//0
console.log(  Number( undefined ) );//nan
console.log(  Number( [1] ) );//1
console.log(  Number( [1,2] ) );//nan  first covert to sting and then num 
console.log(  Number( {} ) );//nan

//Boolean is method,object,constructor
console.log( Boolean( "" )  );//false
console.log( Boolean( "123" )  );//true

console.log( Boolean( -10 )  );//true
console.log( Boolean( 0 )  );//false
console.log( Boolean( undefined )  );//false
console.log( Boolean( null )  );//false
console.log( Boolean( [] ) );//true
console.log( Boolean( [1] ) );//true
console.log( Boolean( {} ) );//true

console.log( Boolean( Infinity ) );//true
console.log( Boolean( -Infinity ) );//true
console.log( Boolean( NaN ) );//false

console.log( String() );//it is a constructor

console.log("hi");

console.log(  "bg" > "bb" );

// let a = 10;

// console.log( window.a )





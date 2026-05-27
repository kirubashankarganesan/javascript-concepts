// PROMISE
// Definition : Promise is used to handle asynchronous operations

// Promise has 3 states
// 1. Pending
// 2. Resolved (Success)
// 3. Rejected (Failure)


// ----------------------------------------------------
// CREATING PROMISE

let newPromise = new Promise((resolve, reject) => {

    let dataRecieved = false;


    if (dataRecieved) {

        resolve("Data Recieved");

    }

    else {

        reject("Data Not Recieved");

    }

});


// ----------------------------------------------------
// then()
// Definition : Executes when promise is resolved

// catch()
// Definition : Executes when promise is rejected

// finally()
// Definition : Executes always


newPromise

.then((message) => {

    console.log("Success : " + message);

    return "Next Success : " + message;

})


.then((nextMessage) => {

    console.log(nextMessage);

})


.catch((error) => {

    console.log("Failure : " + error);

})


.finally(() => {

    console.log("End");

});


/*
CURRENT VALUE :

dataRecieved = false


OUTPUT :

Failure : Data Not Recieved

End


Explanation :

Promise rejected

So catch() executes

finally() always executes
*/


// ----------------------------------------------------
// IF dataRecieved = true

/*
OUTPUT :

Success : Data Recieved

Next Success : Data Recieved

End


Explanation :

Promise resolved

First then() executes

Returned value goes to next then()

finally() executes at end
*/


// ----------------------------------------------------
// CALLBACK FUNCTION
// Definition : Function passed as argument to another function


function fetchProfile(successCallBack, errorCallback) {

    let dataRecieved = true;


    if (dataRecieved) {

        successCallBack("Data Recieved");

    }

    else {

        errorCallback("Data Not Recieved");

    }

}


// ----------------------------------------------------
// CALLBACK EXECUTION

fetchProfile(

    (message) => {

        console.log(message);


        fetchProfile(

            (nextMessage) => {

                console.log("Next Message : " + nextMessage);

            },

            (nextError) => {

                console.log("Next Error : " + nextError);

            }

        );

    },


    (error) => {

        console.log(error);

    }

);


/*
OUTPUT :

Data Recieved

Next Message : Data Recieved
*/


// ----------------------------------------------------
// CALLBACK HELL
// Definition : Nested callbacks make code difficult to read

/*
fetchProfile(
    ()=>{
        fetchProfile(
            ()=>{
                fetchProfile(
                    ()=>{
                    }
                )
            }
        )
    }
)

This is called Callback Hell
*/


// ----------------------------------------------------
// WHY PROMISE IS BETTER

/*
Promise Advantages :

1. Cleaner code

2. Avoid callback hell

3. Better error handling

4. Chaining possible using then()
*/


// ----------------------------------------------------
// PROMISE FLOW

/*
Pending
   ↓

Resolved  → then()

Rejected  → catch()

finally() → always executes
*/
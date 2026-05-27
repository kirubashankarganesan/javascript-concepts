// ASYNC / AWAIT
// Definition : async/await is used to handle promises in synchronous-looking way


// ----------------------------------------------------
// CREATING PROMISE

let newPromise = new Promise((fulfilled, failure) => {

    let dataRecieved = false;


    if (dataRecieved) {

        fulfilled("Data Fetched Successfully");

    }

    else {

        // failure("Data Not Found")

        throw new Error("Search Proper Data");

    }

});


// ----------------------------------------------------
// async FUNCTION
// Definition : async makes function return promise automatically

// await
// Definition : await pauses execution until promise resolves


async function executePromise() {

    try {

        let message = await newPromise;

        let newMessage = await newPromise;

        console.log(message);

        console.log(`Next Message: ${newMessage}`);

    }

    catch (error) {

        console.log(error.message);

    }

    finally {

        console.log("End");

    }

}


// ----------------------------------------------------
// FUNCTION CALL

executePromise();

console.log("Last");


/*
CURRENT VALUE :

dataRecieved = false
*/


// ----------------------------------------------------
// OUTPUT

/*
Last

Search Proper Data

End
*/


// ----------------------------------------------------
// WHY "Last" PRINTS FIRST

/*
executePromise() is asynchronous

JavaScript does not wait

So next line executes immediately

console.log("Last")

prints first
*/


// ----------------------------------------------------
// STEP BY STEP EXECUTION

/*
1. Promise created

2. dataRecieved = false

3. Error thrown

4. executePromise() called

5. await waits for promise

6. Meanwhile synchronous code runs

7. "Last" printed

8. Promise rejected

9. catch() executes

10. finally() executes
*/


// ----------------------------------------------------
// IF dataRecieved = true

/*
OUTPUT :

Last

Data Fetched Successfully

Next Message: Data Fetched Successfully

End
*/


// ----------------------------------------------------
// IMPORTANT POINTS

/*
async
-------
Makes function asynchronous


await
-------
Waits for promise result


try
-----
Handles success


catch
-------
Handles error


finally
---------
Always executes
*/


// ----------------------------------------------------
// DIFFERENCE BETWEEN throw and reject

/*
reject("Error")
----------------
Rejects promise manually


throw new Error("Error")
-------------------------
Throws actual JavaScript error
*/
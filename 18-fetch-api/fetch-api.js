// FETCH API
// Definition : fetch() is used to make HTTP requests to server/API


// ----------------------------------------------------
// FETCH USING THEN & CATCH

fetch("https://fakestoreapi.com/users/abcd")

.then((response) => {

    // response.ok
    // true  -> success
    // false -> failed request

    if (!response.ok) {

        throw new Error("Data Not Found");

    }

    return response.json();

})

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(error.message);

});


/*
OUTPUT :

Data Not Found


Explanation :

URL is invalid

/users/abcd does not exist

response.ok becomes false

Error thrown

catch() handles error
*/


// ----------------------------------------------------
// FETCH USING ASYNC / AWAIT

async function fetchData() {

    try {

        let response = await fetch(

            "https://fakestoreapi.com/users",

            {

                method: "PUT"

            }

        );


        if (!response.ok) {

            throw new Error("Data Not Found");

        }


        let data = await response.json();

        console.log(data[0]);

    }

    catch (error) {

        console.log(error.message);

    }

}

fetchData();


/*
IMPORTANT :

PUT method is mainly used for updating data

Some APIs may not allow PUT here

So response may fail
*/


// ----------------------------------------------------
// IF REQUEST FAILS

/*
OUTPUT :

Data Not Found
*/


// ----------------------------------------------------
// IF REQUEST SUCCEEDS

/*
OUTPUT : (Example)

{
  id: 1,
  email: '...',
  username: '...'
}

Explanation :

response.json()

converts JSON response into JavaScript object
*/


// ----------------------------------------------------
// STEP BY STEP FLOW

/*
1. fetch() sends request to API

2. API sends response

3. response.ok checked

4. response.json() converts data

5. data printed

6. If error occurs catch() handles it
*/


// ----------------------------------------------------
// IMPORTANT FETCH METHODS

/*
GET
-----
Fetch data


POST
------
Send new data


PUT
-----
Update existing data


DELETE
--------
Delete data
*/


// ----------------------------------------------------
// DIFFERENCE

/*
then() / catch()
-----------------
Promise chaining method


async / await
---------------
Cleaner modern syntax
Looks synchronous
*/
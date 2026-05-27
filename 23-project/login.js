// LOGIN PAGE JAVASCRIPT
// Simple validation and welcome message

let loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    if (email === "" || password === "") {

        alert("Please Fill All Fields");

        event.preventDefault();

    }

    else {

        alert("Login Successful");

    }

});


// ----------------------------------------------------
// REMEMBER ME CHECKBOX

let remember = document.getElementById("remember");

remember.addEventListener("change", function () {

    if (remember.checked) {

        console.log("Remember Me Enabled");

    }

    else {

        console.log("Remember Me Disabled");

    }

});


// ----------------------------------------------------
// INPUT FOCUS EFFECT

let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {

    input.addEventListener("focus", function () {

        input.style.border = "2px solid green";

    });

    input.addEventListener("blur", function () {

        input.style.border = "1px solid #ccc";

    });

});
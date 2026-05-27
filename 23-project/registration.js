// REGISTRATION PAGE JAVASCRIPT
// Dynamic registration and validations

let registerForm = document.querySelector("form");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let course = document.getElementById("course").value;


    if (name === "" || phone === "") {

        alert("Please Fill All Details");

        return;

    }


    if (phone.length != 10) {

        alert("Mobile Number Must Be 10 Digits");

        return;

    }


    alert(

        "Registration Successful\n\n" +

        "Name : " + name + "\n" +

        "Course : " + course

    );

});


// ----------------------------------------------------
// LIVE COURSE MESSAGE

let selectCourse = document.getElementById("course");

let messageBox = document.getElementById("message");


selectCourse.addEventListener("change", function () {

    messageBox.value =

        "I am interested in " +

        selectCourse.value;

});


// ----------------------------------------------------
// INPUT EFFECTS

let allInputs = document.querySelectorAll("input, textarea, select");

allInputs.forEach((element) => {

    element.addEventListener("focus", function () {

        element.style.backgroundColor = "#f0fff0";

    });

    element.addEventListener("blur", function () {

        element.style.backgroundColor = "white";

    });

});


// ----------------------------------------------------
// TABLE ROW HOVER EFFECT

let tableRows = document.querySelectorAll("tbody tr");

tableRows.forEach((row) => {

    row.addEventListener("mouseover", function () {

        row.style.backgroundColor = "#dff0d8";

    });

    row.addEventListener("mouseout", function () {

        row.style.backgroundColor = "white";

    });

});
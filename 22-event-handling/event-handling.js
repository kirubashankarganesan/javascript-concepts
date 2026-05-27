// EVENT HANDLER vs EVENT LISTENER
// Definition : Both are used to handle browser events


// ----------------------------------------------------
// SELECTING BUTTONS

let button1 = document.getElementById("listener");

let button2 = document.getElementById("handler");


// ----------------------------------------------------
// EVENT LISTENER
// Definition : addEventListener() allows multiple events

button1.addEventListener("click", function () {

    console.log("First Listener");

});

button1.addEventListener("click", function () {

    console.log("Second Listener");

});

button1.addEventListener("click", function () {

    console.log("Third Listener");

});


/*
OUTPUT WHEN BUTTON CLICKED :

First Listener
Second Listener
Third Listener


Explanation :

All listeners execute

Because addEventListener supports multiple events
*/


// ----------------------------------------------------
// EVENT HANDLER
// Definition : onclick handles only one event at a time

button2.onclick = function () {

    console.log("First Handler");

};

button2.onclick = function () {

    console.log("Second Handler");

};


/*
OUTPUT WHEN BUTTON CLICKED :

Second Handler


Explanation :

Second onclick replaces first onclick

Only latest handler works
*/


// ----------------------------------------------------
// SELECT IMAGE AND PARAGRAPH

let image = document.querySelector("img");

let para = document.querySelector("p");


// ----------------------------------------------------
// mouseover EVENT
// Definition : Executes when mouse enters element

image.addEventListener("mouseover", function () {

    image.src = "img2.jpeg";

    para.innerText = "Im a Leaf";

});


/*
OUTPUT :

Image changes to img2.jpeg

Paragraph changes to :

Im a Leaf
*/


// ----------------------------------------------------
// mouseout EVENT
// Definition : Executes when mouse leaves element

image.addEventListener("mouseout", function () {

    image.src = "img3.jpeg";

    para.innerText = "Im a Flower";

});


/*
OUTPUT :

Image changes to img3.jpeg

Paragraph changes to :

Im a Flower
*/


// ----------------------------------------------------
// HTML STRUCTURE

/*
<h1> Event Handler vs Event Listener </h1>

<img src="img1.jpeg">

<p> Im a butterfly </p>

<button id="listener"> Listener </button>

<button id="handler"> Handler </button>
*/


// ----------------------------------------------------
// DIFFERENCE BETWEEN HANDLER & LISTENER

/*
EVENT HANDLER
---------------
Uses onclick

Only one function possible

New handler replaces old handler


EVENT LISTENER
---------------
Uses addEventListener()

Multiple functions possible

All listeners execute
*/


// ----------------------------------------------------
// COMMON EVENTS

/*
click
-------
Mouse click


mouseover
-----------
Mouse enters element


mouseout
----------
Mouse leaves element


keydown
---------
Keyboard key press


submit
--------
Form submit
*/
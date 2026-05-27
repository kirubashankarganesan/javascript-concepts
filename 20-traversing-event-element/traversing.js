// DOM TRAVERSING
// Definition : DOM traversing is used to move between parent, child and sibling elements


// ----------------------------------------------------
// PARENT TRAVERSING

function traversingParent() {

    let getParent = document.querySelector(".child1");


    // parentElement
    // Definition : Returns parent HTML element

    console.log(getParent.parentElement);


    // parentNode
    // Definition : Returns parent node

    console.log(getParent.parentNode);


    let getParent1 = document.querySelector("html");


    console.log(getParent1.parentElement);

    console.log(getParent1.parentNode);

}


/*
OUTPUT :

<div class="parent">...</div>

<div class="parent">...</div>

null

#document


Explanation :

html has no parent element

But parent node is document
*/


// ----------------------------------------------------
// NODE TYPES

/*
Node Types :

1. Element Node
   Example : <div>

2. Text Node
   Example : spaces / text

3. Attribute Node
   Example : class="parent"

4. Document Node
   Example : document
*/


// ----------------------------------------------------
// CHILD TRAVERSING

function selectChild() {

    let getElementByClass = document.querySelector(".parent");


    // childElementCount
    // Definition : Returns only element count

    console.log(getElementByClass.childElementCount);


    // childNodes
    // Definition : Returns all nodes

    console.log(getElementByClass.childNodes);


    // children
    // Definition : Returns only child elements

    console.log(getElementByClass.children);


    // firstChild
    // Definition : Returns first node

    console.log(getElementByClass.firstChild);


    // firstElementChild
    // Definition : Returns first element

    console.log(getElementByClass.firstElementChild);


    // lastChild
    // Definition : Returns last node

    console.log(getElementByClass.lastChild);


    // lastElementChild
    // Definition : Returns last element

    console.log(getElementByClass.lastElementChild);

}


/*
OUTPUT : (Example)

3

NodeList(9) [...]

HTMLCollection(3) [...]

#text

<div class="child1">Content-1</div>

#text

<ol>...</ol>


Explanation :

childNodes includes text spaces also

children includes only elements
*/


// ----------------------------------------------------
// SIBLING TRAVERSING

function selectSiblings() {

    let child1 = document.querySelector(".child1");


    // nextSibling
    // Definition : Returns next node

    console.log(child1.nextSibling);


    // nextElementSibling
    // Definition : Returns next element

    console.log(child1.nextElementSibling);


    // previousSibling
    // Definition : Returns previous node

    console.log(child1.previousSibling);


    // previousElementSibling
    // Definition : Returns previous element

    console.log(child1.previousElementSibling);


    // ------------------------------------------------
    // CREATE NEW ELEMENT

    let input = document.querySelector("input");


    let newElement = document.createElement("li");


    newElement.innerText = input.value;


    let orderList = document.querySelector("ol");


    // append()
    // Definition : Adds element at end

    orderList.append(newElement);


    input.value = "";

}


/*
OUTPUT :

#text

<div class="child2">Content-2</div>

#text

null


Explanation :

Text spaces are also nodes

child1 has no previous element
*/


// ----------------------------------------------------
// insertBefore()

function insertOne() {

    let input = document.querySelector("input");


    let newElement = document.createElement("li");


    newElement.innerText = input.value;


    let orderList = document.querySelector("ol");


    // insertBefore(newElement, existingElement)

    orderList.insertBefore(

        newElement,

        orderList.children[3]

    );

}


/*
Explanation :

New li inserted before 4th child
*/


// ----------------------------------------------------
// HTML STRUCTURE

/*
<div class="parent">

    <div class="child1">Content-1</div>

    <div class="child2">Content-2</div>

    <div class="child3">Content-3</div>

</div>


Parent :
---------
.parent


Children :
-----------
child1
child2
child3


Siblings :
-----------
child1 ↔ child2 ↔ child3
*/


// ----------------------------------------------------
// BUTTON EVENTS

/*
ondblclick
------------
Double click event


onclick
---------
Single click event
*/


// ----------------------------------------------------
// IMPORTANT DOM METHODS

/*
querySelector()
----------------
Select first matching element


createElement()
----------------
Creates new HTML element


append()
----------
Adds element at end


insertBefore()
---------------
Inserts element before another element
*/  
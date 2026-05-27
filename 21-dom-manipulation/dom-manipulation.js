// DOM MANIPULATION
// Definition : DOM manipulation is used to create, modify, delete and style HTML elements dynamically


function manipulateElements() {


    // ------------------------------------------------
    // createElement()
    // Definition : Creates new HTML element

    let newListElement = document.createElement("li");


    console.log(newListElement);


    /*
    OUTPUT :

    <li></li>

    Explanation :
    Empty li element created
    */


    // ------------------------------------------------
    // Selecting Input Element

    let input = document.querySelector("input");


    /*
    Example Input :

    JavaScript
    */


    // ------------------------------------------------
    // innerText
    // Definition : Sets only visible text

    newListElement.innerText = input.value;


    /*
    OUTPUT :

    <li>JavaScript</li>
    */


    // ------------------------------------------------
    // innerHTML
    // Definition : Reads HTML tags also

    // newListElement.innerHTML = "<a>Link</a>Item-5"


    /*
    OUTPUT :

    <li>
        <a>Link</a>Item-5
    </li>
    */


    // ------------------------------------------------
    // textContent
    // Definition : Treats everything as plain text

    // newListElement.textContent = "<a>Link</a>Item-5"


    /*
    OUTPUT :

    <li>
        <a>Link</a>Item-5
    </li>

    displayed as text only
    */


    // ------------------------------------------------
    // Selecting Ordered List

    let orderList = document.querySelector("ol");


    // ------------------------------------------------
    // append()
    // Definition : Adds element at end

    // orderList.append("Text Node", newListElement)


    /*
    OUTPUT :

    Item-1
    Item-2
    Item-3
    JavaScript
    */


    // ------------------------------------------------
    // insertBefore()
    // Definition : Inserts before specified element

    // orderList.insertBefore(
    //     newListElement,
    //     orderList.children[2]
    // )


    /*
    OUTPUT :

    Item-1
    Item-2
    JavaScript
    Item-3
    */


    // ------------------------------------------------
    // replaceChild()
    // Definition : Replaces existing child

    // orderList.replaceChild(
    //     newListElement,
    //     orderList.children[2]
    // )


    /*
    OUTPUT :

    Item-1
    Item-2
    JavaScript
    */


    // ------------------------------------------------
    // removeChild()
    // Definition : Removes specified child

    // orderList.removeChild(orderList.children[0])


    /*
    OUTPUT :

    Item-2
    Item-3
    */


    // ------------------------------------------------
    // remove()
    // Definition : Removes complete element

    // orderList.remove()


    /*
    OUTPUT :

    Ordered list completely removed
    */


    // ------------------------------------------------
    // DYNAMIC CSS STYLING

    newListElement.style.color = "green";

    newListElement.style.textShadow =
        "10px 10px 1px white";


    /*
    OUTPUT :

    Text color becomes green
    Text shadow applied
    */


    // ------------------------------------------------
    // appendChild()
    // Definition : Adds child element at end

    orderList.appendChild(newListElement);


    /*
    FINAL OUTPUT :

    Item-1
    Item-2
    Item-3
    JavaScript


    Explanation :

    New li element added dynamically
    */


    // ------------------------------------------------
    // prepend()
    // Definition : Adds element at beginning

    // orderList.prepend("Text Node", newListElement)


    /*
    OUTPUT :

    JavaScript
    Item-1
    Item-2
    Item-3
    */

}
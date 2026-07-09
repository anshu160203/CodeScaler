// 1.Selecting Elements

/* 1. To select a element by its id  
   when to use:- when the element has a unique ID

<h1 id="title">Hello</h1>
let heading = document.getElementById("title");
console.log(heading);
*/

/* 2. To select all elements with the same class
   when to use:- when multiple elements share a class

   let items = document.getElementsByClassName("box");
*/

/* 3. To select elements by HTML tag
   when to use:- when you want all <p>,<div>,<img> etc.

   let paragraphs = document.getElementsByTagName("p");
*/

/* 4. To select elements with the same name attribute
   when to use:- mainly with forms

    <input name="gender"></input>
    let gender = document.getElementsByName("gender");
*/

/* 5. to return the first matching element
   when to use:- when using CSS selectors

    let btn = document.querySelector(".btn");
    let title = document.querySelector("#title");
    let box = document.querySelector(".box");
    let anshu = document.querySelector("div");
*/

/* 6. to returns all matching elements
        when to use:- when you need multiple elements
    return a node list

    let boxes = document.querySelectorAll(".box")
*/


// 2. Changing Content

/* 1. to change inner HTML
   it changes inner HTML

    box.innerHTML = "<h2>Welcome</h2>";
*/

/* 2. to change inner text
    changes only visible text

    box.innerText = "Hello";
*/

/* 3. to change text content
   it changes all text

    box.textContent = "Himanshu";
*/


// 3. Changing Style

/* 1. use when changing CSS from JavaScript

    box.style.color = "red";
    box.style.backgroundColor = "yellow"
*/


// 4. Attributes

/* 1. getAttribute()
   gets an attribute value

    img.getAttributes("src")
*/

/* 2. setAttribute()
   adds or updates an attribute

    img.setAttribute("src", "image.jpg");
*/

/* 3. removeAttribute()
   removes an attribute

    input.removeAttribute("disabled");
*/

/* 4. hasAttribute()
   checks whether an attribute exists

    input.hasAttribute("required");
*/


// 5. Creating & Removing Elements

/* 1. createElement()
   Creates a new element

    let p = document.createElement("p");\
*/

/* 2. append()
  Adds one or more nodes to the end

    parent.append(child);
*/

/* 3. appendChild()
   adds  a single child node

    parent.appendChild(child);
*/

/* 4. prepend()
  adds a node at the beginning

    parent.prepend(child);
*/

/* 5. before()
   inserts before the current element

    element.before(newElement);
*/

/* 6. after()
   insert after the current element

    element.after(newElement);
*/

/* 7. replaceWith()
   replaces an element

    oldElement.replaceWith(newElement);
*/

/* 8. remove()
  deletes the elements

    element.remove();
*/


// 6. Events

/* 1. addEventListner()
  preferred way to attach events

    button.addEventListner("click", function () {
        alert("Clicked");
    });
*/

/* 2. removeEventListner()
   removes an event listner

    button.removeEventListner("click", myFunction);
*/
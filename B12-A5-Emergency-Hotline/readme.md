


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Returns: A single element (only one, since IDs must be unique). Returns: A live HTMLCollection (array-like object) of all elements with that class.
- Returns: The first element that matches a CSS selector. Returns: A static NodeList (array-like object) of all elements matching the CSS selector.
Usage: To get multiple elements with flexible selectors.

Return type: NodeList (can use forEach directly).

---

### 2. How do you create and insert a new element into the DOM?

let newDiv = document.createElement("div");
// Add text
newDiv.textContent = "Hello, I’m a new div!";

// Add class
newDiv.className = "box";

// Add attribute
newDiv.setAttribute("id", "myDiv");
document.body.appendChild(newDiv);
let reference = document.getElementById("main");
document.body.insertBefore(newDiv, reference);
let container = document.getElementById("main");

// Add at the end
container.append(newDiv);

// Add at the beginning
container.prepend(newDiv);

---
### 3.What is Event Bubbling and how does it work?
Event bubbling means that when an event (like click) happens on an element, it first runs the handler on that element, and then it "bubbles up" — triggering the same event on all of its ancestor (parent, grandparent, etc.) elements up to the document.
<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.body.addEventListener("click", () => {
  console.log("Body clicked");
});

---
### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a pattern where instead of attaching event listeners to multiple child elements, you attach a single event listener to their parent element, and use event bubbling to detect which child triggered the event.

👉 In short: Listen on the parent, act on the child.
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>

---
### 5.What is the difference between preventDefault() and stopPropagation() methods?
event.preventDefault()

Purpose: Prevents the default action of an element from happening.

Does NOT stop the event from bubbling up the DOM.

Examples:
// Prevent link navigation
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // stops browser from opening the link
  console.log("Link clicked but not opened");
});

// Prevent form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // stops form from submitting
  console.log("Form submit stopped");
});
event.stopPropagation()

Purpose: Stops the event from bubbling (or capturing) further up/down the DOM tree.

The event still does its default action, unless you also call preventDefault().

 Example:
 document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // event won’t reach parent
  console.log("Child clicked (stopped bubbling)");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
---
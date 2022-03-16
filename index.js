// // Write your code here!
// const newEl = document.createElement("div"); // Create DOM elements "Programmatically"
// console.log (newEl);
// document.body.append(newEl) //append or add new element created. Result should be an empty <div></div>


// const newMain = document.getElementById("main") // here we are creating a new element with an "id"
// newMain.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"; 
// console.log(newMain)

// // const content = element.innerHTML;
// // element.innerHTML = content;

// const newUl = document.createElement("ul"); // here we are crreating a new <ul> as a child to the <div> and giving some content to the new <div> created on the above code
// for (let i = 0; i< 3; i++){
//     const li = document.createElement("li"); // here we are creating a new <li>
//     li.textContent = (i + 1).toString();
//     newUl.append(li); // here we are appeding the new <li> as a child to the new <ul>
// }
// newEl.append(newUl) // here we are adding the new <ul> as a child to <div> created on the above code

// const element = document.getElementById("main"); 
// element.style.height = "300px"; // change properties on the DOM nodes using style
// element.style.backgroundColor = "#27647B";
// element.textContent = "You've changed what's on the screen!";
// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;
// element.className = "pet-listing dog";
// element.classList.remove("dog");
// element.classList.add("cat", "sale");

// const ul = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);


// const newH = document.createElement("h1") // Create DOM elements
// console.log(newH)
// document.body.append(newH) //append or add new element created
// document.body.removeChild(newH) //remove element. You must add parent element in this case"body" to remove it's child

// const main = document.querySelector('main')
// document.body.removeChild(" main")

document.querySelector("main#main").remove(); // no longer has DOM node 'main#main

let newHeader = document.createElement('h1') // has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = "victory"; //  points to node 'h1#victory'
newHeader.innerHTML = "YOUR-NAME is the champion" // has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside




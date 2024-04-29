
/* Select elements from HTML using CSS selectors.
The below querySelector() call will match the first <a> element that appears in the document. 
If you wanted to match and do things to multiple elements, you could use Document.querySelectorAll(), 
which matches every element in the document that matches the selector, and stores references to them 
in an array-like object called a NodeList

Document.getElementById(), which selects an element with a given id attribute value, e.g. <p id="myId">My paragraph</p>. 
The ID is passed to the function as a parameter, i.e. const elementRef = document.getElementById('myId').*/

const l = document.querySelector("a");

l.textContent = "Mozilla Developer Network";

l.href = "https://developer.mozilla.org";

/* grabbing a reference to our <section> element */
let sect = document.querySelector("section");

/* create a new paragraph using Document.createElement() */
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

/* append the new paragraph at the end of the section */
sect.appendChild(para);

/* add a text node */
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);

/* grab a reference to the paragraph the link is inside, and append the text node to it */
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

/* move the paragraph with the link inside it to the bottom of the section
This moves the paragraph down to the bottom of the section. You might have thought it would make a second copy
of it, but this is not the case — linkPara is a reference to the one and only copy of that paragraph. If you 
wanted to make a copy and add that as well, you'd need to use Node.cloneNode() instead. */
sect.appendChild(linkPara);

/* Remove a node */
sect.removeChild(linkPara);

/* When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove() */
linkPara.remove();
/* This method is not supported in older browsers. They have no method to tell a node to remove itself, 
so you'd have to do the following:
linkPara.parentNode.removeChild(linkPara); */

/*
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
*/

/* Element.setAttribute() takes two arguments, the attribute you want to set on the element, and 
the value you want to set it to */

para.setAttribute("class", "highlight");
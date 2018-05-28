var p1=document.createElement("p"); // Creates a new HTML element object p1
var p2=document.createElement("p"); // Creates a new HTML element object p2

function callBack(){
	
    /* Used innerText property to change the inner text of element object p1 */
	p1.innerText="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
	p1.style.color="purple"; // Used style.color property to change the style color of new HTML element object p1
	document.body.appendChild(p1); // Add a new HTML element object p1 as child
	
    /* Used innerText property to change the inner text of element object p2 */
	p2.innerText="A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.";
	p2.style.color="red"; // Used style.color property to change the style color of new HTML element object p2
	document.body.appendChild(p2); // Add a new HTML element object p2 as child
	
	/* Used body.backgroundColor or body.bgColor property to change the body background color of HTML element body */
	document.body.bgColor="lightgrey";
}

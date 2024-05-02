
//get the current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//get the date the document was last modified
const moddate = new Date(document.lastModified);

document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);
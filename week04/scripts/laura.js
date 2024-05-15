// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the HTML
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
var lastModified = new Date(document.lastModified);

// Set the last modified date in the HTML
document.getElementById("lastmodified").innerHTML = lastModified


//select HTML elements and assign to constants
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

//create event listener for the hamburger menu button
//toggle the show class on/off for the nav menu and button, when the button is clicked
hamButton.addEventListener('click', function(){
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

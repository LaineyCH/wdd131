//get the current year
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
//get the date the document was last modified
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

//select HTML elements and assign to constants
const hamButton = document.querySelector('#mobile-menu-button');
const navigation = document.querySelector('nav');

//create event listener for the hamburger menu button
//toggle the open class on/off for the nav menu and button, when the button is clicked
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});
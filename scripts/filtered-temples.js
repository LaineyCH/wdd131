
//get the current year
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
//get the date the document was last modified
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);

//select HTML elements and assign to constants
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// select menu buttons
const homeButton = document.querySelector('#home-button');
const oldButton = document.querySelector('#old-button');
const newButton = document.querySelector('#new-button');
const largeButton = document.querySelector('#large-button');
const smallButton = document.querySelector('#small-button');

// select page heading
const pageHeading = document.querySelector('#page-heading');

//create event listener for the hamburger menu button
//toggle the open class on/off for the nav menu and button, when the button is clicked
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const temples = [
    {
        templeName: "London England Temple",
        location: "Newchapel, Surrey, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-784251-wallpaper.jpg"

    },
    {
        templeName: "Johanesburg South Africa Temple",
        location: "Johannesburg, Gauteng, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"

    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Roma, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/7-Rome-Temple-2160340.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
    },
];

let filteredTemples = temples;

document.addEventListener('DOMContentLoaded', function () {
    generate_temple_cards("home");
    homeButton.classList.toggle('active');
    pageHeading.textContent = "Temples | Home";
}, false);

function changeActive(activePhrase) {
    // change active class on nav buttons
    homeButton.classList.remove('active');
    oldButton.classList.remove('active');
    newButton.classList.remove('active');
    largeButton.classList.remove('active');
    smallButton.classList.remove('active');

    switch (activePhrase) {
        case "home":
            homeButton.classList.add('active');
            break;
        case "old":
            oldButton.classList.add('active');
            break;
        case "new":
            newButton.classList.add('active');
            break;
        case "large":
            largeButton.classList.add('active');
            break;
        case "small":
            smallButton.classList.add('active');
            break;
        default:
    }
}

function generate_temple_cards(filterPhrase) {
    /* Filter temple array: Home - displays all | Old - temples built before 1900 | New - temples built after 2000 | 
    Large - temples larger than 90000 square feet | Small - temples smaller than 10000 square feet */
    switch (filterPhrase) {
        case "home":
            filteredTemples = temples;
            pageHeading.textContent = "Temples | Home";
            break;
        case "old":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) < 1900);
            pageHeading.textContent = "Old Temples | Built Before 1900";
            break;
        case "new":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) > 2000);
            pageHeading.textContent = "New Temples | Built After 2000";
            break;
        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            pageHeading.textContent = "Large Temples | Greater than 90000 sq ft";
            break;
        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            pageHeading.textContent = "Small Temples | Less than 10000 sq ft";
            break;
        default:
            filteredTemples = temples;
            pageHeading.textContent = "Temples | Home";
    };

    changeActive(filterPhrase);

    const htmlTemples = filteredTemples.map(
        (temple) =>
            `<div id="templeCard">
            <h3>${temple.templeName}</h3>
            <table>
                <tr>
                    <th>Location:</th>
                    <td>${temple.location}</td>
                </tr>
                <tr>
                    <th>Dedicated:</th>
                    <td>${temple.dedicated}</td>
                </tr>
                <tr>
                    <th>Size:</th>
                    <td>${temple.area} sq ft</td>
                </tr>
            </table>
            <img data-src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" height="200"
            width="320">
        </div>`
    );
    document.getElementById("temples").innerHTML = htmlTemples.join('');

    // remove the data-src attribute when the image has loaded
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

// create event listeners for menu selections

homeButton.addEventListener('click', () => {
    generate_temple_cards("home");
});

oldButton.addEventListener('click', () => {
    generate_temple_cards("old");
});

newButton.addEventListener('click', () => {
    generate_temple_cards("new");
});

largeButton.addEventListener('click', () => {
    generate_temple_cards("large");
});

smallButton.addEventListener('click', () => {
    generate_temple_cards("small");
});

// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato", "Chocolate"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

const foodItem = document.querySelector("#favorite-foods")
const placesItem = document.querySelector("#places-lived")

/* Take a food string and embed in html  */
function embedFoodString(food) {
    return `<li>${food}</li>`;
};

/* Take place and place length strings and embed in html */
function embedPlaceStrings(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }


/* Produce HTML template: transform our list by looping over it calling the template function once 
for each item in the list. The function should return all of the HTML strings flattened into one long string */
function produceTemplate(list, callbackFunc) {
    const htmlTemplate = list.map(callbackFunc);
    return htmlTemplate.join(" ");
};

foodItem.innerHTML = produceTemplate(
    myInfo.favoriteFoods, 
    embedFoodString
);

placesItem.innerHTML = produceTemplate(
    myInfo.placesLived,
    embedPlaceStrings
  );


/* FOR EACH 
myInfo.favoriteFoods.forEach((favFood) => {
        
    let favFoodLi = document.createElement("li");
    favFoodLi.textContent = favFood;
    document.querySelector("#favorite-foods").appendChild(favFoodLi);
});
*/

/*  MAP 
function mapFavFood(favFood) {
    return `<ul>${favFood}</ul>`
};

let favFoodList = myInfo.favoriteFoods.map(mapFavFood);

document.querySelector("#favorite-foods").innerHTML = favFoodList.join("");
*/

/* MAP Lambda
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((favFood) => `<ul>${favFood}</ul>`).join("");
*/
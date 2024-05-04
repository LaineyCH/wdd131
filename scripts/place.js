//get the current year
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

//get the date the document was last modified
const moddate = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);


let temp = 32;
let wind = 11;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
};

document.querySelector("#wind-chill").textContent = (temp <= 10 && wind >= 4.8) ? calculateWindChill(temp, wind) : "N/A";

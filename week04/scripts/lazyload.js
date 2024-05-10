//get the current year
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

//get the date the document was last modified
document.getElementById("lastmodified").innerHTML = new Date(document.lastModified);


// remove the data-src attribute when the image has loaded (see notes)
[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});

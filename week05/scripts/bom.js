let scriptureInput = document.querySelector("#favchap");
let addButton = document.querySelector("button");
let scriptureList = document.querySelector("#list");
let message = document.querySelector("#message");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

addButton.addEventListener('click', () => {
    addScripture();
});

scriptureInput.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        addScripture();
    }
});

function addScripture() {
    if (scriptureInput.value.trim() !== '') {
        displayList(scriptureInput.value);
        chaptersArray.push(scriptureInput.value);
        setChapterList();
        scriptureInput.value = '';
        scriptureInput.focus();
    }
}

function displayList(item) {
    const listElement = document.createElement('li');
    listElement.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";

    deleteButton.addEventListener('click', function () {
        scriptureList.removeChild(listElement);
        deleteChapter(listElement.textContent);
        scriptureInput.focus();
    });

    scriptureList.append(listElement);
    listElement.append(deleteButton);
}

function setChapterList() {
    localStorage.setItem('myScriptureList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myScriptureList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the "x"
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}




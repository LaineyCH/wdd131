let scriptureInput = document.querySelector("#favchap");
let addButton = document.querySelector("button");
let scriptureList = document.querySelector("#list");

addButton.addEventListener('click', addScripture);

function addScripture() {
    if (scriptureInput.value.trim() !== '') {
        const listElement = document.createElement('li');
        listElement.textContent = scriptureInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";

        deleteButton.addEventListener('click', function () {
            scriptureList.removeChild(listElement);
            scriptureInput.focus();
        });

        scriptureList.append(listElement);
        listElement.append(deleteButton);

        scriptureInput.value = '';
        scriptureInput.focus();
    } else {
        scriptureInput.focus();
    }
};

scriptureInput.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        addScripture();
    }
});

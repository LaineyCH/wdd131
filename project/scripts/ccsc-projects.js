// select project type buttons
const allButton = document.querySelector('#all-button');
const quiltButton = document.querySelector('#quilt-button');
const bagButton = document.querySelector('#bag-button');
const dressButton = document.querySelector('#dress-button');
const decorButton = document.querySelector('#decor-button');
// select page heading
const projectsHeading = document.querySelector('#projects-heading');

// projects object array
const projects = [
    {
        projectName: "Hexie Flower Hot Pad",
        description: "A delightful and colorful hand sewn project that can be used as a hot pad, or decoratively in the home.",
        designer: "Elaine Henson",
        imageSrc: "images/hexie-pad.webp",
        imgWidth: "400",
        imgHeight: "300",
        projectUrl: "#",
        type: "decor",
    },
    {
        projectName: "Diagonal Box Pouch",
        description: "A Japanese style pouch that can be made in three sizes.",
        designer: "Elaine Henson",
        imageSrc: "images/box-pouch.webp",
        imgWidth: "400",
        imgHeight: "300",
        projectUrl: "#",
        type: "bag",
    },
    {
        projectName: "Strip Pieced Quilt",
        description: "Make this beautiful quilt using a strip piecing technque.",
        designer: "Elaine Henson",
        imageSrc: "images/quilt.webp",
        imgWidth: "300",
        imgHeight: "400",
        projectUrl: "#",
        type: "quilt",
    },
    {
        projectName: "Amberley Dress",
        description: "A stunning classic handbag that can be made from leather or fabric.",
        designer: "Sussex Seamstress",
        imageSrc: "images/amberley-dress.webp",
        imgWidth: "300",
        imgHeight: "400",
        projectUrl: "https://www.sussexseamstress.com/patterns/p/amberley-dress-pattern",
        type: "dress",
    },
    {
        projectName: "Camel Quilt Block",
        description: "Founation Paper Pieced - this camel is a beautiful quilt block.",
        designer: "Joe June and Mae",
        imageSrc: "images/camel-block.webp",
        imgWidth: "400",
        imgHeight: "300",
        projectUrl: "https://www.joejuneandmae.com/store/p124/Camel_-_PDF_pattern____.html",
        type: "quilt",
    },
    {
        projectName: "Roo Art Pouch",
        description: "A Zipper Pouch that opens wide into a tray.",
        designer: "Elaine Henson",
        imageSrc: "images/roo-pouch.webp",
        imgWidth: "400",
        imgHeight: "300",
        projectUrl: "#",
        type: "bag",
    },
    {
        projectName: "Rope Projects",
        description: "Various projects sewn from cotton rope, from bowls and trivets to bags and more!",
        designer: "Elaine Henson",
        imageSrc: "images/rope-bowl.webp",
        imgWidth: "400",
        imgHeight: "300",
        projectUrl: "#",
        type: "decor",
    },
    {
        projectName: "Orchidee Blouse",
        description: "A smart but comfortabl blouse made with woven fabric.",
        designer: "Deer and Doe",
        imageSrc: "images/orchidee-blouse.webp",
        imgWidth: "400",
        imgHeight: "400",
        projectUrl: "https://closetcorepatterns.com/products/orchidee-blouse-dress-pattern?variant=40683457740934",
        type: "dress",
    },
    {
        projectName: "Star Quilt Block",
        description: "Founation Paper Pieced - a stunning woven effect star.",
        designer: "Joe June and Mae",
        imageSrc: "images/star-block.webp",
        imgWidth: "300",
        imgHeight: "400",
        projectUrl: "https://www.patchworksquare.com/index.php?function=DisplaySheet&sheet=woven-star-quilt-block#google_vignette",
        type: "quilt",
    },
    {
        projectName: "Bird Ornament",
        description: "Make these adorable bird decorations for your Christmad tree, home decoartion, gifts, etc.",
        designer: "Amy Loyall",
        imageSrc: "images/bird.webp",
        imgWidth: "300",
        imgHeight: "400",
        projectUrl: "#",
        type: "decor",
    },
    {
        projectName: "Leather Handbag",
        description: "A stunning classic handbag that can be made from leather or fabric.",
        designer: "Elaine Henson",
        imageSrc: "images/leather-bag.webp",
        imgWidth: "300",
        imgHeight: "400",
        projectUrl: "#",
        type: "bag",
    }
]

let filteredProjects = [];

document.addEventListener('DOMContentLoaded', function () {
    generate_project_cards("all");
}, false);

function changeActive(activePhrase) {
    // change active class on nav buttons
    allButton.classList.remove('active');
    quiltButton.classList.remove('active');
    bagButton.classList.remove('active');
    dressButton.classList.remove('active');
    decorButton.classList.remove('active');

    switch (activePhrase) {
        case "all":
            allButton.classList.add('active');
            break;
        case "quilt":
            quiltButton.classList.add('active');
            break;
        case "bag":
            bagButton.classList.add('active');
            break;
        case "dress":
            dressButton.classList.add('active');
            break;
        case "decor":
            decorButton.classList.add('active');
            break;
        default:
    }
}

function generate_project_cards(filterPhrase) {
    switch (filterPhrase) {
        case "all":
            filteredProjects = projects;
            projectsHeading.textContent = "All Projects";
            break;
        case "quilt":
            filteredProjects = projects.filter((project) => project.type === "quilt");
            projectsHeading.textContent = "Quilting Projects";
            break;
        case "bag":
            filteredProjects = projects.filter((project) => project.type === "bag");
            projectsHeading.textContent = "Bag Patterns";
            break;
        case "dress":
            filteredProjects = projects.filter((project) => project.type === "dress");
            projectsHeading.textContent = "Dressmaking Patterns";
            break;
        case "decor":
            filteredProjects = projects.filter((project) => project.type === "decor");
            projectsHeading.textContent = "Decorative Projects";
            break;
        default:
            filteredProjects = projects;
            projectsHeading.textContent = "All Projects";
    };
    changeActive(filterPhrase);
    const htmlProjects = filteredProjects.map(
        (project) =>
            `<a class="project-link" href="${project.projectUrl}" target="_blank">
                <div class="project-card">
                    <div class="project-info">
                        <h3>${project.projectName}</h3>
                        <p>${project.description}</p>
                    </div>
                    <img class="project-img" data-src="${project.imageSrc}" alt="${project.projectName}" loading="lazy" width="${project.imgWidth}">
                    <p>Designer:<br>${project.designer}</p>
                </div>
            </a>`
    );
    document.getElementById("projects-content").innerHTML = htmlProjects.join('');
    // remove the data-src attribute when the image has loaded
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

// create event listeners for menu selections
allButton.addEventListener('click', () => {
    generate_project_cards("all");
});
quiltButton.addEventListener('click', () => {
    generate_project_cards("quilt");
});
bagButton.addEventListener('click', () => {
    generate_project_cards("bag");
});
dressButton.addEventListener('click', () => {
    generate_project_cards("dress");
});
decorButton.addEventListener('click', () => {
    generate_project_cards("decor");
});
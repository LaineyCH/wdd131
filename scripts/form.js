/* Products Array */
const products = [
    {
        id: "fc - 1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc - 2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs - 1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac - 2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj - 1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

/* Create an array of the product names and capitalise each word */
function CapitaliseName(name) {
    const words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
};

/* create HTML for the select options and send to the product-select element */
function mapProducts() {
    const productsHtml = products.forEach((product) => {
        let name = CapitaliseName(product.name);
        let id = product.id;
        document.getElementById("product-select").innerHTML +=
            `<option value="${id}" aria-label="${name}">${name}</option>`
    })
};

mapProducts();
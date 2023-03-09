const bandsList = document.querySelector("#bands");

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
];

const compareFn = (a, b) => {
    let nameA = a;
    let nameB = b;
    if (containsArticle(a)) {
        nameA = a.split(" ")[1];
    }
    if (containsArticle(b)) {
        nameB = b.split(" ")[1];
    }
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    }
    return 0;
};

const containsArticle = (name) => {
    name = name.toLowerCase();
    name = name.split(" ");
    const regex = /^the\b|^an\b|^a\b/i;
    return regex.test(name[0]);
};

bands.sort(compareFn);

bands.forEach((band) => {
    const bandItem = document.createElement("li");
    bandItem.textContent = band;
    bandsList.appendChild(bandItem);
});

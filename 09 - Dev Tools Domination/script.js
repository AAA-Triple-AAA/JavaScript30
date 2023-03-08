const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "bad");

let adj = "better";
console.log(`I am ${adj}`);

// Styled
console.log(
    "%c I am some great text",
    "font-size: 40px; color: green; background: black"
);

// warning!
console.warn("Bruh now");

// Error :|
console.error("even worse");

// Info
console.info("This is an info message");

// Testing
console.assert(1 === 2, "1 is not equal to 2");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.groupCollapsed("Adrian");

console.count("Adrian");
console.count("Adrian");
console.count("Adrian");
console.count("Adrian");

console.groupEnd("Adrian");

// timing
console.time("fetching-data");
fetch("https://api.github.com/users/AAA-Triple-AAA")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching-data");
        console.log(data);
    });

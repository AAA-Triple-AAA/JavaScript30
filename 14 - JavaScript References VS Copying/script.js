// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
// Copy, not reference, works with strings and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
// and we want to make a copy of it.
const team = players;

team[3] = "Lux";

console.log(players[3] == team[3]); // true
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

const team3 = [].concat(players); // New array and concat the old one to it.

const team4 = [...players]; // ES6 Spread

const team5 = Array.from(players); // using Array.from functuion

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80,
    social: {
        twitter: "wesbos",
        facebook: "wesbos",
    },
};

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
// Start with empty object, pass the object you wish to copy, and the attributes you wish to add to the new object copy.

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// Poor mans deep clone
const dev2 = JSON.parse(JSON.stringify(person));

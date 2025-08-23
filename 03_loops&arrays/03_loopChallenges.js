// challenge 1
let chai = ["green tea", "balck tea", "chai", "oolong tea"]
let selectedChai = []

for(let i = 0; i < chai.length; i++) {
    if (chai[i] === "chai") {
        break
    }
    selectedChai.push(chai[i])
}

// challenge 2
let cities = ["london", "new york", "udaipur", "lahore"]
let cityVisited = []

for(let t = 0; t < cities.length; t++) {
    if(cities[t] === 'lahore') {
        continue
    }
    cityVisited.push(cities[t])
}

// challenge 3: FOR OF
let numbers = [1,2,3,4,5], smallNum = []

for (const num of numbers) {
    if (num === 4) {
        break
    }
    smallNum.push(num)
}
// console.log(smallNum);

// challenge 4
let chai1 = ["green tea", "herbal tea", "adrak chai", "masala chai"], preferredChai = []
for(const chai of chai1) {
    if (chai === "herbal tea") {
        continue
    }
    preferredChai.push(chai)
}
console.log(preferredChai);

// challenge 5: Objects
let citiesPopulation = {
    "London": 12000,
    "New York": 132000,
    "Paris": 3432223,
    "Berlin": 224222
}
let cityPopulation = {}
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
// // Object.freeze -> interview questions

for (const city in citiesPopulation) {
    // learn this on your own else we will cover it later
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    // }
    // key => value 
    if (city === "Berlin") {
        break
    }
    cityPopulation[city] = citiesPopulation[city]
}

// challenge 6
let Population = {
    "Sydney": 30000,
    "Delhi": 10000000,
    "Chennai": 50000000
}
let cityAbove3 = {}

for(const city in Population) {
    // console.log(city); // returns key 
    // console.log(Population[city]); // returns values
    if(Population[city] < 3000000) {
        continue
    }
    cityAbove3[city] = Population[city]
}

// challenge 7: FOREACH: for each loop require a call back function
chai = ["green tea", "balck tea", "chai", "oolong tea"]
let availableTea = []

chai.forEach(tea => {
    if(tea === 'chai') {
        // continue; we cannot use continue keyword here: continue, break as the keywords for loop not for a function.
        return 
    }
    availableTea.push(tea)
});

// challenge 8
let places = ["Berlin", "Tokya", "New York", "Paris"]
let newPlaces = []

// each city is treated as an individual functions
places.forEach((city) => {
    if (city === 'Paris') {
        return
    }
    newPlaces.push(city)
})
console.log(newPlaces);

// challenge 9
let num = [2,5,7,9], newNum = []
for(let i = 0; i < num.length; i++) {
    if(num[i] == 7) {
        continue
    }
    newNum.push(num[i] * 2)
}
console.log(newNum);

// challenge 10
chai = ["green tea", "balck tea", "chai", "oolong tea", "jasmine tea"]
let shortTeas = []

for(const tea of chai) {
    if(tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas);

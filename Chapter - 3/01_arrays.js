// 'use strict'; striclt check our declaration
// Arrays
// flavors = ["green tea", "black tea", "oolong tea"]
// challenge 1
let teaflavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaflavors[0]

// challenge 2
cities = ["London", "Tokyo", "Udaipur", "Chennai"] // this will treated as var -> Scope error
let favCity = cities[2]
console.log(favCity);

// challenge 3
let teatypes = ["green tea", "black tea", "oolong tea"]
teatypes[1] = "jasmine tea"
console.log(teatypes);

// challenge 4
let citiesVisited = ["Chennai", "Udaipur", "Mumbai"]
citiesVisited.push("Pune")
console.log(citiesVisited);
citiesVisited.push("Delhi", 0) // we can add multiple values
console.log(citiesVisited);

// challenge 5
let teaOrders = ["chai", "matcha", "earl grey", "oolong"]
console.log(teaOrders.pop())
console.log(teaOrders);

// challenge 6
let popularTea = ["green tea", "oolong tea", "chai"]
// behaviour with numbers
// let var1 = 5;
// let var2 = var1;
// var1 = 9
// console.log(var2);

// with arryas: changes reflect in both the arrays
// bcs arrays are copied with reference 
let softCopy = popularTea
popularTea.pop()
console.log(softCopy);
console.log(popularTea);

// challenge 7: HardCopy
let topCities = ["Berlin", "Singapore", "New York"]
let hardCopy = [... topCities] // syntac used to create hard copy: WAY 1
topCities.pop()
console.log(topCities);
console.log(hardCopy);

let hardCopyCities = topCities.slice();
topCities.pop()
console.log(topCities);
console.log(hardCopyCities);

// challenge 8:
let euroCities = ["Pairs", "Rome"]
let asiaCities = ["Udaipur", "Delhi"]
// this will result in a string 
let worldCities = euroCities + asiaCities // Pairs,RomeUdaipur,Delhi
console.log(worldCities);
worldCities = [euroCities, asiaCities] // 2D array
console.log(worldCities);
worldCities = euroCities.concat(asiaCities)
console.log(worldCities);

// challenge 9:
let teaMenu = ["masala chai", "adarak chai", "lemon chai", "elon tea"]
// here in length we don't put parantehsis
let menuLength = teaMenu.length
console.log(menuLength);

// challenge 10:
let cityBucketList = ["Udaipur", "Delhi", "Chennai"]
console.log(cityBucketList.includes("london"));

 
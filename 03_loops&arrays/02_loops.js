console.log("Jai Shree Ram!");

/*
    loops: while loop, for loop, do-while loop

    - While: While the condition is truthy, the code from the loop body is executed.

    while (condition) {
        // code
        // so-called "loop body"
    }

    - do...while: this loops run atleast one time before checking the condition.

    do {
        // loop body
    } while (condition);

*/
// if checks for one time while loops checks again n again 
// GuideLines for loops:
// keyword -> while, do-while, for, for-of, for-each, for-in
// termination CSSConditionRule, loop can be infinite
// execution statements (body of loop)

// challenge 1: Find the sum of the first five numbers.
let i = 1, sum = 0
while (i <= 5) {
    sum = i + sum
    i++
}
console.log(sum);

// challenge 2
let j = 5
let arr = []
while(j > 0) {
    arr.push(j)
    j--
} 
console.log(arr);

// challenge 3: User Input: Prompt is not available in Node.js, review this once
// let teaCollection = []
// let tea;
// do {
//    tea = prompt("Enter your Favourite Tea: (type 'stop' to end the loop)")

//    if (tea !== 'stop') {
//     teaCollection.push(tea)
//    }
// } while(tea !== 'stop');

// challenge 4
let num = 0, k = 1
do {
    num = num + k
    k++;
} while(k < 4);
console.log(num);

// challenge 5 
let arr1 = [5,10,15], arr2 = []

for(let l = 0; l < arr1.length; l++) {
    arr2.push(arr1[l] * 2)
}
console.log(arr2);

// challenge 6 
let cities = ["london", "new york", "tokyo", "dlegi"]
let cityList = []

for(let d = 0; d < cities.length; d++) {
    cityList.push(cities[d])
}
console.log(cityList);

// if checks for one time while loops checks again n again 
// GuideLines for loops:
// keyword -> while, do-while, for, for-of, for-each, for-in
// termination CSSConditionRule, loop can be infinite
// execution statements (body of loop)

// challenge 1 
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

// challenge 3
let teaCollection = []
let tea;
do {
   tea = prompt("Enter your Favourite Tea: (type 'stop' to end the loop)")
} while(tea == 'stop');

// challenge 4
// challenge 5 
// challenge 6 
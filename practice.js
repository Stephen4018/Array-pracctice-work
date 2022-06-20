//This is the question on FizzBuzz already done by the grace of God
const output = [];
let count = 1;

while(count <= 100) {
    if(count % 3 ===0 && count % 5 ===0) {
        output.push("FizzBuzz");

    } else if (count % 3 ===0) {
        output.push("Fizz")
    } else if(count % 5 ===0) {
        output.push("Buzz");
    } else {

        output.push(count);
    }

    count++
}
console.log(output[59])
//End of the FizzBuzz code



//  var people = ["chuks", "adams", "jenas", "steve", "duff", "jasper"];
// let i = 0;
// for (;people[i];) {
//     console.log("hi my name is " + people[i])
//     i++
// }
//  while(i < people.length) {
// console.log("hi my name is " + people[i])
// i++
//  }
// // var numberof = people.length;
// var random = Math.floor(Math.random() * people.length);
// var newMan = people[random];
// console.log(newMan + " is going for lunch today")

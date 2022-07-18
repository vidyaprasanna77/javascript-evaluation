let numbers= [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
let uniquenumbers = [...new Set(numbers)];

console.log(uniquenumbers);




// another approach using filter method
// let numbers = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];

// let uniqueNumbers = numbers.filter((n, index) => {
//   return numbers.indexOf(n) === index;
// });

// console.log(uniqueNumbers);

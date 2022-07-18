// foreach
let arr1 = [1,2,3,4,5];
let returnValue = arr1.forEach((num) => console.log(num * num));
console.log(arr1);                //[1,2,3,4,5]
console.log(returnValue);              //undefined

// map 
let arr2 = [1, 2, 3, 4, 5];
let returnValue1 = arr2
    .map((num) => num * 2)
    .map((num) => num.toString())
    .map((string) => '$' + string );

console.log(arr2);                 // [1,2,3,4,5]
console.log(returnValue1);         // ['$2','$4','$6','$8','$10']

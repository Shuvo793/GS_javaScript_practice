let arr = ['ami','amra','amago','tumi','tomara'];

console.log(arr);

//use slice

let arr1 = arr.slice(2,4);
console.log(arr1);

// use slice with nagative value

let arr2 = arr.slice(-3,-1);
console.log(arr2);

//slice start_value length > array_length

let arr3 = arr.slice(20,3);
console.log(arr3);// empty array

//slice end_value length > array_length

let arr4 = arr.slice(3,10);
console.log(arr4);
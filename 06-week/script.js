let arr=[1,2,3,4,5,6,7,8,9,10];

// push
arr.push(11);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// shift
arr.shift();
console.log(arr);

// unshift
arr.unshift(0);
console.log(arr);

// splice
arr.splice(1,2); // start index, delete count, returns deleted elements,make changes in original array
console.log(arr);

// slice
let n=arr.slice(1,3); // start index, end index, returns new array
console.log(n);

// reverse
arr.reverse();
console.log(arr);   

// sort
arr.sort((a,b)=>(a-b)); // returns sorted array
console.log(arr);

// join
let str=arr.join("*");
console.log(str);

// split

let arr1=str.split("*");
console.log(arr1);

// find
let n1=arr.find((value,index,arr)=>value>5); // returns first element satisfying the condition
console.log(n1);

// findIndex
let n2=arr.findIndex((value,index,arr)=>value>5); // returns index of first element satisfying the condition
console.log(n2);

// every
let n3=arr.every((value,index,arr)=>value>=0); // returns true if all elements satisfy the condition
console.log(n3);

// some
let n4=arr.some((value,index,arr)=>value>15); // returns true if any element satisfy the condition
console.log(n4);

// reduce
let n5=arr.reduce((total,value,index,arr)=>total+value); // returns reduced value
console.log(n5);

// reduceRight
let n6=arr.reduceRight((total,value,index,arr)=>total+value); // returns reduced value
console.log(n6);

// filter
let n7=arr.filter((value,index,arr)=>value>5); // returns filtered array
console.log(n7);

// map
let n8=arr.map((value,index,arr)=>value*2); // returns mapped array
console.log(n8);    

// forEach
arr.forEach((value,index,arr)=>console.log(value));

// includes
let n9=arr.includes(5); // returns true if element is present
console.log(n9);

// indexOf
let n10=arr.indexOf(5); // returns index of first element satisfying the condition
console.log(n10);

// lastIndexOf
let n11=arr.lastIndexOf(5); // returns index of last element satisfying the condition
console.log(n11);

// concat
let n12=arr.concat(11,12,13); // returns new array
console.log(n12);

let narr=[{name:"a"},{name:"b"},{name:"c"}];
// keys
let n13=narr.keys(); // returns keys of array as iterator object 
console.log(n13);

// values
let n14=narr.values(); // returns values of array as iterator object 
console.log(n14);

// entries
let n15=narr.entries(); // returns entries of array as iterator object 
console.log(n15);

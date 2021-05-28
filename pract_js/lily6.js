console.log('this is lily practise session of javascript 6');
const marks = [23,34,44,55,66];
const juice = ['banana','shake','redchille','blueberry'];
const mixed = ['str',55,66,[2,4]];
const arr = new  Array(34,55,66,'shake');
console.table(arr);
console.table(mixed);
console.log(juice[2]);
// array has 2 thing, property and method
console.log(arr.length); //property
console.log(Array.isArray('jhghgj')); //method
arr[0] = 'liliiy';
let arrelement = arr[0]; //element first element of array by liliiy
console.log('element :',arrelement);
console.log(arr);
//index of method or modifyin it
let value = marks.indexOf(55);
marks.unshift(1009); //add in first position
marks.push(23); //add in last
marks.pop(); //eleminate one from end
marks.shift(); //eleminate first from array
marks.splice(1,2); // 1st se start kr k second element tk k element ko deletet kr dega
marks.reverse() //reverese
console.log(marks);

//object 
let myobj ={
    name:'lili',
    home:'gaya',
    food:'all',
    isActive : true,
}
console.log(myobj)




















//type conversion and type coercion
console.log('welcome to my javascript practise');
let myVar;
// myVar = 45; output is "number"
myVar = String(45); //integer is converted into string
console.log(myVar, (typeof myVar));

let booleanVar = String(true); //boolean is converted into string
console.log(booleanVar,(typeof booleanVar));
//finding todays date 
let date = String(new Date());
console.log(date,(typeof date));
//array
let arr = String([1,2,3,4]);
console.log(arr.length,(typeof arr));

let i = 9; //toString can be used for converting{booleAN,new Date()}
console.log(i.toString())
//number function
let stri = Number("695"); //6k95 output NaN NOT A NUMBER
stri = Number("695");
console.log(stri,(typeof stri));
//parseInt function convert in natural no. not decimal
let number = parseFloat('78.78'); //parsefloat gives point k baad ka value also
console.log(number,(typeof number)); 
//toFixed() function
let num = parseFloat('78.78');
console.log(num.toExponential(8),(typeof num)); 

//coercion
let mystr = "679" //string
let mynum = 90;  //number
console.log(mystr +mynum); //67990  for sum, chnge both in no by removing cotation
console.log('lily2');
//how to make variables and use it in js
//var,let,const {we have declared the variable but didnt assigned it any value}
var name = `"lily" is smart`;
var exam = 'first semester';
var marks = 8.80;
console.log(name,exam,marks);
//variable cant start with number,start with letter,number,_$,case sensitive
var home = 'BIHAR'; //it is global variable here
console.log(home);
//use of const
const friend = 'juhi';
// friend = 'juhi';
console.log('juhi');
//use of let, things in bracket have their power within bracket
{
let home = 'pizza'; //here pizza is output not bihar as pizza is local variable
console.log(home);
}
console.log(home); //here bihar is output as it is not in bracket
//array
const arr1 = [1,2,23,3,4];
arr1.push(2,3); //we can add something but cant declare it again
console.log(arr1)

//  case type
// 1. PascalCase
// 2.camelCase
// 3. kebab-case
// 4. snake_case
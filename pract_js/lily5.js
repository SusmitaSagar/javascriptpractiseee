console.log("lily practise 5th");
const name = `lily`;
const greeting = `goood morning `;
console.log(greeting + name);
 
let html;
html = "<h1>this is smartest lillyy</h1>"+"<p>if this para works</p>";
html = html.concat(`billi`,`lily`); //add the strings
console.log(html) ;
console.log(html.length);
console.log(html.toLocaleUpperCase()); //convert in uppercase
//for the word rank
console.log(html[4]);
console.log(html.indexOf('lillyy'))
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3)) ;
console.log(html.endsWith('ly')); //bollean 
console.log(html.includes(`is`));
console.log(html.substring(4,6));
console.log(html.slice(0,5))
//break string in pieces and add in araay
console.log(html.split(' '));
console.log(html.replace(`is`,`sssssss`)); //replace only first occurance
//execute html in js
let food1 = 'pizaaaa';
let food2 = 'apple';
let myHtml = `Hello ${name} 
              <h1>this is bottle </h1>
              <p> you like ${food1} and
               ${food2} `;//template literalas
document.body.innerHTML = myHtml;












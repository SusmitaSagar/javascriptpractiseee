console.log('ckmobile');

const message = (name) => {
    console.log(`${name} is good`)
}
message('ckmobile')
console.log(global)
global.setTimeout(() =>{
    console.log('timeout with global')
} ,3000)
setTimeout(() =>{
    console.log('timeout without global')
} ,3000)
console.log(__dirname);
console.log(__filename);
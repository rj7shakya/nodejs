const fs = require('fs');

// const book = {
//   title:'Ego is enemy',
//   author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// const bookObject = JSON.parse(bookJSON);

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);


const cdata = JSON.parse(fs.readFileSync('1-json.json').toString());
cdata.name = "rj";
cdata.age="21";
console.log(cdata);
const cbuffer = JSON.stringify(cdata);
fs.writeFileSync('1-json.json',cbuffer);
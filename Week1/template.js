let fname = 'Zulfikar';
let lname = 'Rahman';
let age = prompt("Masukkan umur Zulfikar Rahman!");

//Old Ways
//let result = fname + ' ' + lname + 'is' + age + 'years old';
//alert(result);

//Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);
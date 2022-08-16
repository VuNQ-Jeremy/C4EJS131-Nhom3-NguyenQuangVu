// let greeting = 'Hello. My name is John';
// console.log('ky tu y:', greeting.charAt(8));

// let str1 = 'The morning is upon us.';
// console.log('chuoi gia tri is upon us:', str1.slice(11,22));

// let str2 = 'Hello ';
// let str3 = 'World';
// console.log('chuoi moi gia tri Hello World: ', str2.concat(str3));

// Cho 1 chuỗi : "Hôm nay ngày thứ 7"

// BTVN1: -> "hôm nay Ngày thứ 7"
// BTVN2: -> "hômnay ngày thứ 8"

// string literal,
// string concat,
// lowercase
// string join

let string = 'Hôm nay ngày thứ 7'
let a = string[0].toLowerCase();
let b = string.slice(1,7);
let c = string[8].toUpperCase();
let d = string.slice(9);
console.log (a+b+' '+c+d);

let string1 = string.replace(7,8)
let a1 = string1[0].toLowerCase();
let b1 = string1.slice(1,3);
let c1 = string1.slice(4,7);
let d1 = string1.slice(8);

console.log (a1+b1+c1+d1);
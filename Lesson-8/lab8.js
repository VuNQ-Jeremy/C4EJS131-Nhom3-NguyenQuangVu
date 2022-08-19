// const x = true/false;
// const y = true/false;

// if (x == y) {
//     console.log ('Đèn đang tắt');
// } else {
//     console.log ('Đèn đang bật');
// }


//Tính tổng S = 1 + 2 + 3 + ... +101

let S = 0;
let i = 0;

while (i <= 101) {
    i++;
    if (i%2 !=0) {
        S = S + i;
    }
}
console.log (S);

let S1 = 0;
let i1 = 1;

while (i1 <= 1000) {
    i1++;
    S1 = S1 + 1/i1;
}
console.log (S1);

let S2 = 0;

for (let i2 = 0; i2 <= 100; i2++) {
    if (i2%2 == 0) {
        S2=S2-i2
    } else {
        S2=S2+i2
    }
}
console.log (S2);

let S3 = 1;
for (let i3 = 1; i3 <= 20; i3++) {
    S3=S3*i3;
}
console.log (S3);

let S4 = 0;

for (let i4 = 1; i4 <= 99; i4++) {
   if (i4%2 == 0) {
        S4 = S4 - i4/(i4+1);
   } else {
        S4 = S4 + i4/(i4+1);
   }
}
console.log (S4);

let S5 = 100;
for (let i5 = 100; i5 >0; i5--) {
    S5 = 1+1/S5;
}
console.log (S5);
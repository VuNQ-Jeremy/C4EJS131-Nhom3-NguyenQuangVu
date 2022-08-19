let S1 = 0;
for (let i = 100; i > 0; i--) {
    S1 = Math.sqrt(S1 + i)
}
console.log('Tổng S1 là:',S1);



for (let i = 1; i*i <= 10000; i++) {
    console.log('các số chính phương từ 1-10000', i,':',i*i)
}
function numberOneTriangle(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push("*");
        console.log(arr.join(""));
    }
}
console.log(numberOneTriangle(5));
let x = 6;
let y = '6';
let isLoading = true;
let a = true;
let b = false;


// value comparison

console.log (
    x == y
);

// value and datatype comparison

console.log (
    x !== y
);

// AND &&
// 1 false = false
// all true = true

console.log (a && b);

// OR ||
// 1 true = true
// all false = false

console.log (a || b);


let num = 2;

if (num < 0) {
    console.log ('num <0');
} else if (num >0) {
    console.log ('num >0');
} else {
    console.log ('num=0');
}

console.log ('finish');
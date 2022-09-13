document.getElementById("submit").addEventListener("click",function(event){event.preventDefault()
});

function prime() {
    let string = [];
    let a;
    let b;
    let numberA = parseFloat(document.getElementById('numberA').value);
    let numberB = parseFloat(document.getElementById('numberB').value);
    for (i = numberA; i <= numberB; i++) {
        b = 0;
        for (a = 1; a <= i; a++) {
            if(i % a == 0) {
                b = b + 1;
            }            
        }
        if(b==2){
            string.push(' '+i);
        }
    }
    document.write("Các số nguyên tố trong khoảng là: ", string);
}
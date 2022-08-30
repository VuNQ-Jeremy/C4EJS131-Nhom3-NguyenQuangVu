// document.getElementById('btn1').addEventListener('click',colorChange);

function colorChange() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#'+randomColor;
}

// document.getElementById('btn2').addEventListener('click',addUp);

let i = 0;
function addUp() {
    i += 1;
    document.getElementById('btn2').innerHTML = i;
}
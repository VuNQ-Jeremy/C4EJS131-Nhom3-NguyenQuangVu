// let childElement = document.getElementsByClassName('child');
// console.log('childEmelent:', childElement);

//Query selector

// let childElm = document.querySelectorAll('.child');
// console.log('childElm:', childElm);

// let secondChildElm = document.getElementById('second-child');
// //edit inner text
// secondChildElm.innerHTML = 'Third child';

// //edit attribute style
// secondChildElm.style = 'background-color: green';

// //edit style
// secondChildElm.style.backgroundColor = 'violet';

// //DOM Create or remove Element

const todoList = ['Homework', 'Shopping', 'Listening']; // API
// Create Element
let ul = document.createElement('ul'); //tag: ul
for (let i = 0; i <todoList.length; i++) {
    const li = document.createElement('li'); 
    //<li> Homework <li>
    li.innerHTML = todoList[i];
    // Add Element
    ul.appendChild(li);
}

document.body.appendChild(ul);

// Remove ELement

ul.removeChild(document.getElementsByTagName('li')[1]);
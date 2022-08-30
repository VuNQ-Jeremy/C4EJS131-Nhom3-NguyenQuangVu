// Task 1

let user = {
    name: 'Hieu',
    age: 18,
    appearance: {
        hairColor: 'black',
        skinColor: 'yellow',
        height: 170,
        weight: 68
    }
}

function getKeys(object, results = []) {
    let keys = results;
    for (let key in object) {
        keys.push(key);
        if (typeof object[key] === 'object'){
            getKeys(object[key], keys)
        }
    }
    return keys;
}

// console.log(getKeys(user));

// Task 2

let array = [13, 15, 17, 19];

function insertElement(array, index, element) {
    array.splice(index, 0, element);
    return array;
}

console.log(insertElement(array, 0, 14));
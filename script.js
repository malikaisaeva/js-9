

let user = {
    name: 'Malika',
    surename: 'Isaeva',
    age: 15,
    school: 35,
    class: 9,
    address: 'sattepo',
    phone: 998915561095,
    travel: {
        visa: ['Rossia', 'Turkey']
    }
}

let car = {
    name: 'captiva',
    number: 'U947NA',
    color: 'milk',
    year: 2017
}

let newObject = Object.assign({}, user, {car})
let keys = Object.keys(newObject)
let bio = Object.values(newObject)

let arr = keys.concat(bio)

console.log(newObject);
console.log(arr);

let types = {
    String: [arr.filter(String)],
    number: [arr.filter(Number)],
    object: [arr.filter(Object)]
}

console.log(types);


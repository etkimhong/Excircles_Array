
const newArr = [
    {name: "alice", age: 22},
    {name: "bob", age: 22},
    {name: "cher", age: 15},
    {name: "jack", age: 22},
];

function filterAdults(arr){
    return newArr.filter(user => user.age<18);
}
console.log(filterAdults(newArr));
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);

console.log(myMap.get('name')); // Alice
console.log(myMap.size); // 2

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
  // name: Alice
  // age: 25
});

myMap.delete('name');
console.log(myMap.size); // 1

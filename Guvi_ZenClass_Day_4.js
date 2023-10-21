const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myObject = { a: 1, b: 2, c: 3 };
for (const key in myObject) {
  console.log(key, myObject[key]);
}

for (const value of myArray) {
  console.log(value);
}

myArray.forEach((value,index) => {
  console.log(value,index);
});
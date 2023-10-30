//Print odd numbers in an array using an anonymous function:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,5];

(function() {
  console.log("Odd numbers in the array:");
  for (let number of numbers) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
})();

//Convert all the strings to title caps in a string array using an anonymous function:

const stringArray = ["apple", "banana", "cherry"];

(function() {
  const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log("Title-cased strings:");
  console.log(titleCapsArray);
})();


//Sum of all numbers in an array using an anonymous function:


(function() {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  console.log("Sum of all numbers:", sum);
})();

//Return all the prime numbers in an array using an anonymous function:


(function() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  const primeNumbers = numbers.filter(num => isPrime(num));
  console.log("Prime numbers in the array:");
  console.log(primeNumbers);
})();

//Return all the palindromes in an array using an anonymous function:

const words = ["level", "apple", "rotor", "banana"];

(function() {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  const palindromes = words.filter(word => isPalindrome(word));
  console.log("Palindromes in the array:");
  console.log(palindromes);
})();

//Return median of two sorted arrays of the same size using an anonymous function:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

(function() {
  const mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);
  const len = mergedArray.length;
  const median = (mergedArray[Math.floor(len / 2)] + mergedArray[Math.ceil(len / 2)]) / 2;
  console.log("Median of two sorted arrays:", median);
})();

//Remove duplicates from an array using an anonymous function:

(function() {
  const uniqueNumbers = [...new Set(numbers)];
  console.log("Array with duplicates removed:");
  console.log(uniqueNumbers);
})();

//Rotate an array by k times using an anonymous function:

const array = [1, 2, 3, 4, 5];
const k = 2;

(function() {
  const rotatedArray = array.slice(k).concat(array.slice(0, k));
  console.log("Rotated array by", k, "times:");
  console.log(rotatedArray);
})();
//Print odd numbers in an array using an arrow function:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = () => {
  console.log("Odd numbers in the array:");
  numbers.forEach(number => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};

printOddNumbers();


//Convert all the strings to title caps in a string array using an arrow function:

const stringArray = ["apple", "banana", "cherry"];

const convertToTitleCaps = () => {
  const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log("Title-cased strings:");
  console.log(titleCapsArray);
};

convertToTitleCaps();


//Sum of all numbers in an array using an arrow function:


const sumOfNumbers = () => {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  console.log("Sum of all numbers:", sum);
};

sumOfNumbers();

//Return all the prime numbers in an array using an arrow function:



const returnPrimeNumbers = () => {
  const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  };

  const primeNumbers = numbers.filter(num => isPrime(num));
  console.log("Prime numbers in the array:");
  console.log(primeNumbers);
};

returnPrimeNumbers();
//Return all the palindromes in an array using an arrow function:

const words = ["level", "apple", "rotor", "banana"];

const returnPalindromes = () => {
  const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  };

  const palindromes = words.filter(word => isPalindrome(word));
  console.log("Palindromes in the array:");
  console.log(palindromes);
};

returnPalindromes();

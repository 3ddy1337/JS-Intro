console.log("Hallo World!");
console.log('Hallo "Welt"'); //Alternativ [Maskieren] "Hallo \"Welt\"" = Hallo "Welt"
console.log("Hallo World"[0]); //0 = Erstes Zeichen
console.log(false.toString()); //Der eventuell einzige Fall eine Methoden oder Properties auf ein Boolean anzuwenden
console.log(1 + 1.5);
console.log(1 - 1.5);
console.log(1 * 1.5);
console.log(1 / 1.5);
console.log(1 == 1); //true
console.log(1 != 1); //false
console.log(1 > 1); //false
console.log(1 >= 1); //true
console.log(1 < 1); //false
console.log(1 <= 1); //true
console.log(1 < 2 && 3 > 2); //true
console.log(1 < 2 || 2 > 2); //true
console.log(3 < 2 || 2 > 2); //false
console.log(!(1 < 0)); //true
console.log("E" + "t" + "i");
// Error! Make it work
console.log("Hallo");
// Error! Make it work
console.log("That doesn't work");
// should return true. Change only the operator to fix it.
console.log(50 + 2 === 52);
// should be false. Change only the operator to fix it.
console.log("333" === 333);
// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);
// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);
console.log(25 / 5 && 50 / 10 === 5);

// First Functions ***********************************************************

// welcomeMsg

function welcomeMsg(a) {
  return "Welcome " + a + "!";
}
console.log(welcomeMsg("Etienne"));

// calcGrossPrice

function calcGrossPrice(a, b) {
  return a * (1 + b);
}

console.log(calcGrossPrice(20, 0.19).toFixed(1));
console.log(calcGrossPrice(40, 0.16).toFixed(1));

// Negative to positive number *****************************************

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

// name.length ****************************************************************

let userName = "Brad";
userName = "Jenna";
userName = "Etienne";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(userName);
console.log(getUserNameLength(userName));
console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// typeof ****************************************************************

const isString = function (data) {
  return typeof data === "string";
};

console.log(isString("Hello")); // true
console.log(isString(3)); // false
console.log(isString(undefined)); // false
console.log(isString("")); // true
console.log(isString("John" + "Doe")); // true

console.log(typeof "Hello");

// If statements **************************************************************

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// oddEven function - by using Remainder (%) **************************************

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4)); // result should be even
console.log(oddEven(3)); // result should be odd
console.log(oddEven(-1)); // result should be odd
console.log(oddEven(10)); // result should be even

// oldYoung function ***************************************************************

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27)); // result should be young person
console.log(oldYoung(6)); // result should be children
console.log(oldYoung(-1)); // result should be invalid parameter
console.log(oldYoung(86)); // result should be elder person
console.log(oldYoung("Zwölf"));

// Increment operator **************************************************************

let count = 0;

console.log(count++); // First count and than +1
console.log(count); // New count
console.log(++count); // first +1 than count
console.log(++count); // first +1 than count
console.log(count); // New count

for (let index = 0; index < 3; index += 1) {
  console.log(index);
}

// find Char in word ***************************************************************

function findFirstCharPosition(word, char) {
  let result;

  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar === char) {
      result = index;
      break;
    }
  }
  return result;
}

console.log(findFirstCharPosition("Etienne", "n"));

// oddNumbers function ************************************************************

function oddNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0) {
    return "Invalid parameters. Only positive integers are allowed.";
  }

  // i = index

  let result = "";
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      if (result !== "") {
        result += ",";
      }
      result += i;
    }
  }
  return result;
}

console.log(oddNumbers(0, 4)); // result should be: 1,3
console.log(oddNumbers(10, 33)); // result should be: 11,13,15,17,19,21,23,25,27,29,31,33
console.log(oddNumbers(9, 12)); // result should be: 9,11

// charCount function **************************************************************

function charCount(word, char) {
  if (char.length !== 1) {
    console.log("The second parameter must be a single character.");
    return;
  }

  // Convert both the word and the character to lowercase for case insensitivity
  word = word.toLowerCase();
  char = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(charCount("hello", "l")); // result should be: 2
console.log(charCount("mama", "m")); // result should be: 2
console.log(charCount("Resümee", "e")); // result should be: 3

// removeItem function ***************************************************************

/*
Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.
 */

// TODO: Implement the removeItem function

function removeItem(arr, index) {
  const newArray = arr.slice();
  newArray.splice(index, 1);
  return newArray;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 0));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 2));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// sumOfCharacter function ************************************************************

/*
Implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.
// TODO: Implement the sumOfCharacters function
*/

function sumOfCharacters(arr) {
  let sum = 0;

  for (let item of arr) {
    if (typeof item === "string") {
      sum += item.length;
    }
  }

  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

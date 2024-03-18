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

// First Functions

function welcomeMsg(a) {
  return "Welcome " + a + "!";
}
console.log(welcomeMsg("Etienne"));

function calcGrossPrice(a, b) {
  return a * (1 + b);
}
console.log(calcGrossPrice(20, 0.19).toFixed(1));
console.log(calcGrossPrice(40, 0.16).toFixed(1));

// Negative Number to positive number

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

// name.length

let userName = "Brad";
userName = "Jenna";
userName = "Etienne";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(getUserNameLength(userName));
console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

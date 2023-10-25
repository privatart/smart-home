//HomeWork #2

// Завдання 1
let a = 1;
let b = 8;
let c = 12;
console.log(a <= b || b <= c);

// Завдання 2
let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x, y);
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x + Math.asin(y);
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// Завдання 3
let isAdult = prompt("Enter your age");
answer =
  isAdult >= 18
    ? alert("You are an adult person")
    : alert("You are too young, sorry");

// Завдання 4

function mostWanted(numbersArray) {
  const newShortArr = [];
  const counter = {};

  //підрахунок кількості входжень кожного числа циклу
  for (let number of numbersArray) {
    if (counter[number] === undefined) {
      counter[number] = 1;
    } else {
      counter[number]++;
    }
  }

  let maxNumber;
  let maxCounter = 0;

  //пошук найбільшої кількості входжень
  for (let number in counter) {
    if (counter[number] > maxCounter) {
      maxNumber = number;
      maxCounter = counter[number];
    }
  }
  newShortArr.push(maxNumber); // запис найчастішого числа у масив

  // фільтрація вхідного масива на найчастіше число. Прийшлось перевести його у стрінг, по іншому не працювало 
  let newFilteredArray = numbersArray.filter(
    (number) => number.toString() !== maxNumber
  );

  console.log(newShortArr);
  console.log(newFilteredArray);

  return [newShortArr, newFilteredArray];
}

mostWanted([4, 5, 2, 1, 6, 5, 3, 5, 2, 5]);

// Завдання 5
let sideA = +prompt("Задано трикутник. Введіть довжину його 1-ї сторони:");
// + перед prompt переводить String у Number
let sideB = +prompt("Введіть довжину його 2-ї сторони:");
let sideC = +prompt("Введіть довжину його 3-ї сторони:");
let square = (sideA + sideB + sideC) / 2;
// Перевірка чи введені значення це числа, які більше 0
if (
  Number.isInteger(sideA) &&
  sideA > 0 &&
  Number.isInteger(sideB) &&
  sideB > 0 &&
  Number.isInteger(sideC) &&
  sideC > 0
) {
  console.log(`Площа трикутника: ${square.toFixed(3)}`);
  // Перевірка чи одна зі сторін дорівнює іншій
  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log(
      `Трикутник зі сторонами ${sideA}, ${sideB} та ${sideC} є прямокутним.`
    );
  } else {
    console.log(
      `На жаль трикутник зі сторонами ${sideA}, ${sideB} та ${sideC} не є прямокутним.`
    );
  }
} else {
  console.log("Incorrect data");
}

// Завдання 5 - 2й метод вирішення з масивом:
const valuesArray = [];
valuesArray[0] = +prompt("Задано трикутник. Введіть довжину його 1-ї сторони:");
valuesArray[1] = +prompt("Введіть довжину його 2-ї сторони:");
valuesArray[2] = +prompt("Введіть довжину його 3-ї сторони:");
let squareTriangle = (valuesArray[0] + valuesArray[1] + valuesArray[2]) / 2;
// Перевірка чи введені значення це числа, які більше 0
if (valuesArray.every((value) => Number.isInteger(value) && value > 0)) {
  console.log(`Площа трикутника: ${squareTriangle.toFixed(3)}`);
  // Перевірка чи одна зі сторін дорівнює іншій
  if (
    valuesArray[0] == valuesArray[1] ||
    valuesArray[0] == valuesArray[2] ||
    valuesArray[1] == valuesArray[2]
  ) {
    console.log(
      `Трикутник зі сторонами ${valuesArray[0]}, ${valuesArray[1]} та ${valuesArray[2]} є прямокутним.`
    );
  } else {
    console.log(
      `На жаль трикутник зі сторонами ${valuesArray[0]}, ${valuesArray[1]} та ${valuesArray[2]} не є прямокутним.`
    );
  }
} else {
  console.log("Incorrect data");
}

// Завдання 6
function calc(numberA, numberB, op) {
  switch (op) {
    case 1:
      return numberA - numberB;
      break;
    case 2:
      return numberA * numberB;
      break;
    case 3:
      return numberA / numberB;
      break;
    default:
      return numberA + numberB;
      break;
  }
}
console.log(calc(15, 41, 0)); //  56

// Завдання 7
function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(findUnique([1, 2, 3, 5, 3])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true

// Завдання 7
// варіант 2: функція порівнює довжину масива з кількістю унікальних елементів
// (це робить конструктор Set)

function findUnique2(arr) {
  return arr.length !== new Set(arr).size;
}
console.log(findUnique2([1, 2, 3, 5, 3])); // false
console.log(findUnique2([1, 2, 3, 5, 11])); // true

// Завдання ***

function create(pass) {
  return function (userPass) {
    return userPass === pass;
  };
}
const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom")); // true
console.log(tom("pass_for_tom")); // false
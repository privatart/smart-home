// HomeWork 3

// Завдання 1

function compact(arr) {
  newArr = new Set(arr);
  console.log(newArr);
}
compact([5, 3, 4, 5, 6, 6, 4, 7, 3, "text", "another text", "text"]);

// Завдання 2

function createArray(start, end) {
  array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  console.log(array);
}
createArray(3, 9);

// Завдання 3

function logOutDigits(a, b) {
  for (let i = a; i <= b; i++) {
    for (let y = 1; y <= i - a + 1; y++) {
      console.log(i);
    }
  }
}
logOutDigits(3, 7);

// Завдання 4

function randArray(k) {
  array = [];
  for (let i = 1; i <= k; i++) {
    array.push(Math.floor(Math.random() * 500) + 1);
  }
  console.log(array);
}
randArray(6);

/// Завдання 5
function arraysOfTypes(arr) {
  arrayString = [];
  arrayNumber = [];
  arrayFlat = arr.flat(); // ств. новий масив з всіма елементами вхідного, в т.ч. елементами підмасива
  for (let i = 0; i < arrayFlat.length; i++) {
    if (typeof arrayFlat[i] == "string") {
      arrayString.push(arrayFlat[i]);
    }
    if (typeof arrayFlat[i] == "number") {
      arrayNumber.push(arrayFlat[i]);
    }
  }
  console.log(arrayString);
  console.log(arrayNumber);
}

arraysOfTypes([
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
]);

// Завдання 6
// продубльоване у домашці №2

// Завдання 7
// продубльоване у домашці №2

// Завдання 8

const timeNow = new Date();
const hourNow = timeNow.getHours();

// Варіант 1
if (hourNow >= 5 && hourNow < 11) {
  alert("Доброго ранку");
} else if (hourNow >= 11 && hourNow < 17) {
  alert("Доброго дня");
} else if (hourNow >= 17 && hourNow < 23) {
  alert("Доброго вечора");
} else {
  alert("Доброї ночі");
}

//Варіант 2
if (hourNow >= 5 && hourNow < 11) {
  alert("Доброго ранку");
}
if (hourNow >= 11 && hourNow < 17) {
  alert("Доброго дня");
}
if (hourNow >= 17 && hourNow < 23) {
  alert("Доброго вечора");
}
if (hourNow >= 23 && hourNow < 5) {
  alert("Доброї ночі");
}
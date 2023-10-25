// HomeWork 4

// Завдання 1

function sumSliceArray(arr, first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    console.log("Допоміжні аргументи функції не є числами!");
  } else if (first >= arr.length || second >= arr.length) {
    console.log("Допоміжні аргументи функції більші за довжину масиву!");
  } else {
    let sum = arr[first] + arr[second];
    console.log(`Сума чисел з масиву: ${sum}`);
    return sum;
  }
}
sumSliceArray([5, 3, 4, 5, 6, 6, 4, 7, 3], 45, 2);

// Завдання 2

try {
  function checkAge() {
    const userName = prompt("Please enter your name:");
    const userAgeData = prompt("Please enter your age:");
    const userAge = parseInt(userAgeData);
    const userStatus = prompt(
      "Please enter your status (admin, moderator or user):"
    );
    if (isNaN(userAge)) {
      throw new TypeError(
        "Invalid age. You entered not a number in age field!"
      );
    } else if (userName === "" || userAge === 0 || userStatus === "") {
      throw new Error("The field is empty! Please enter necessary information");
    } else if (
      userStatus !== "admin" &&
      userStatus !== "moderator" &&
      userStatus !== "user"
    ) {
      throw new EvalError(
        "Invalid status. Please enter valid status (admin, moderator or user)!"
      );
    } else if (userAge < 18 || userAge > 70) {
      throw new RangeError("Sorry, your age is out of range");
    } else {
      alert("You can continue watching Netflix");
    }
  }
  checkAge();
} catch (error) {
  alert(error.stack);
}

// Завдання 3

try {
  function calcRectangleArea(width, height) {
    width = prompt("Please enter the width of the rectangle:");
    height = prompt("Please enter the height of the rectangle:");

    let widthValue = parseFloat(width);
    let heightValue = parseFloat(height);

    if (isNaN(widthValue) || isNaN(heightValue)) {
      throw new TypeError("You entered not a number!");
    } else if (widthValue <= 0 || heightValue <= 0) {
      throw new RangeError(
        "You entered number that is equal or less than zero"
      );
    } else if (widthValue === heightValue) {
      throw new Error("You entered data for square, not a rectangle!");
    } else {
      rectangleArea = widthValue * heightValue;
      alert(`Rectangle area is ${rectangleArea}`);
    }
  }
  calcRectangleArea();
} catch (error) {
  alert(error.stack);
}

// Завдання 4
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = message;
  }
}

try {
  function showMonthName(month) {
    const monthDate = new Date();
    month = prompt("Please enter sequence number of your favourite month");
    monthDate.setMonth(month - 1);
    const monthName = monthDate.toLocaleString("en-US", { month: "long" });
    if (month.trim() === "") {
      throw new MonthException("Enter something, please!");
    } else if (month <= 0 || month > 12) {
      throw new MonthException("Entered value out of range (1-12)!");
    } else if (isNaN(month)) {
      throw new MonthException("You have to enter a number!");
    } else {
      console.log(monthName);
    }
    return monthName;
  }
} catch (error) {
  console.log(error.stack);
}
showMonthName();

// Завдання 5
// якщо необхідно тут було використати Try/Catch то нічого не виходило, 
// одразу після від'ємного значення (помилки) викидало до блоку Catch.

function showUser(id) {
  const userID = {};
  if (id < 0) {
    console.log("ERROR. ID must not be negative: " + id);
  } else {
    userID.id = id;
    return userID;
  }
}

function showUsers(ids) {
  let finalArray = [];
  for (let i = 0; i < ids.length; i++) {
    const user = showUser(ids[i]);
    if (user) {
      finalArray.push(user);
    }
  }
  console.log(finalArray);
  return finalArray;
}

showUsers([7, -12, 44, 22, -11, 8, 945]);

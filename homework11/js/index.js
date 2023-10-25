// HomeWork 11

// Завдання 11-1

function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(message));
      }, delay);
    });
  }
  
  getPromise("test message", 3000);
  
  // Завдання 11-2
  function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      if (arr.every((element) => typeof element === "number")) {
        resolve(
          arr.reduce((totalValue, currentValue) => totalValue * currentValue, 1)
        );
      } else {
        reject("Error! Incorrect array!");
      }
    });
  }
  
  calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
  calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));
  // "Error! Incorrect array!"
  
  // Завдання 11-3
  
  new Promise(function (resolve, reject) {
    const number = prompt("Please enter a number");
    if (isNaN(number)) {
      reject();
    } else {
      resolve(number);
    }
  })
    .catch(function (error) {
      return new Promise(function (resolve, reject) {
        const number = prompt("Please enter a number");
        if (isNaN(number)) {
          reject(prompt("Please enter a number"));
        } else {
          resolve(number);
        }
      });
    })
    .then(function (result) {
      console.log(result);
    });
  
    
  // Завдання 11-4
  
  const delay = (i, time) =>
    new Promise((resolve) => setTimeout(() => resolve(i), time));
  
  async function showNumbers(array) {
    const sortArray = array.sort((a, b) => a - b);
    for (let i = 0; i < sortArray.length; i++) {
      let time = Math.floor(Math.random() * 3000) + 1000;
      const number = await delay(sortArray[i], time);
      console.log(time);
      console.log(number);
    }
  }
  showNumbers([5, 2, 8, 1, 4]);  
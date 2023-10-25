// HomeWork 10

// Завдання 10-1
let names1 = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  
  let { first: f, second: s, third: x, fifth = "Name №5" } = names1;
  
  console.log(f); // "Tom"
  console.log(x); // "Ray"
  console.log(fifth); // "Name №5"
  
  // Завдання 10-2
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let { names, ages } = data;
  
  let [name1, name2, name3, name4] = names;
  let [age1, age2, age3, age4] = ages;
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  
  // Завдання 10-3
  function mul(...values) {
    let filteredValues = values.filter((element) => typeof element === "number"); // залишаємо лише цифри
    if (filteredValues.length == 0) {
      return 0;
    } else {
      return filteredValues.reduce(
        (currentMul, currentValue) => currentMul * currentValue
      );
    }
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0
  
  // Завдання 10-4
  
  let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => this.data + "");
    },
  };
  
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => (this.result = callback());
    },
  };
  
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
  
  // Завдання 10-5
  // keysArray.forEach((key, index) => newMap.set(key, valuesArrays[index])); // гарний варіант але не мій
  function mapBuilder(keysArray, valuesArrays) {
    const newMap = new Map();
    for (i = 0; i < keysArray.length; i++) {
      newMap.set(keysArray[i], valuesArrays[i]);
          }
    return newMap;
  }
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map);
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"
  
  // Завдання 10-6
  
  let arr = [];
  
  for (let i = 0; i <= 2; i++) {
    arr[i] = function () {
      console.log(i);
    };
  }
  
  arr[0](); // 0
  arr[arr.length - 1](); // 2
// HomeWork 5

// Завдання 1

class Circle {
  constructor(xCenter, yCenter, radius) {
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.radius = radius;
  }
  circleLength() {
    const circleLength = (2 * Math.PI * this.radius).toFixed(2); // для читабельності два знака після коми
    console.log(circleLength);
    return circleLength;
  }

  static statCircleLength(radius) {
    const circleLength = (2 * Math.PI * radius).toFixed(2);
    console.log(circleLength);
    return circleLength;
  }

  copyObject() {
    return { ...this }; // ...this це метод створення поверхневої копії

  }

  static createCircleObject(xCenter, yCenter, radius) {
    let newCircleObject = {
      xCenter,
      yCenter,
      radius,
    };
    return newCircleObject;
  }

  circleObjectToString() {
    const objectToString = JSON.stringify(this); // переведення об'єкта у стрічку
    return objectToString;
  }

  static pointInsideCircle(xPoint, yPoint, xCenter, yCenter, radius) {
    if ((xPoint - xCenter) ** 2 + (yPoint - yCenter) ** 2 <= radius ** 2) {
      console.log("Your point is inside our circle!");
    } else {
      console.log("Your point is outside our circle!");
    }

  }
}

Circle.statCircleLength(7); // виклик статичної функції

const circle1 = new Circle(20, 18, 6);
circle1.circleLength();
console.log(circle1.circleObjectToString());

const circle2 = circle1.copyObject();
console.log(circle2);

const circle3 = Circle.createCircleObject(21, 34, 8);
console.log(circle3);

Circle.pointInsideCircle(18, 23, 16, 20, 20);


// Завдання 2
function propsCount(currentObject) {
  console.log(Object.keys(currentObject).length);
}

// для прикладу
const leader = {
  name: "General",
  age: 59,
  soldiersNicks: ["Brave", "Force", "Train"],
  city: "Kyiv",
};

propsCount(leader);

// Завдання 3

class Person {
  constructor(name, surname) {
    (this.name = name), // передані ззовні
      (this.surname = surname);
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    console.log(this.name + " " + this.surname + " " + middleName);
  }

  showCours() {
    const cours = new Date().getFullYear() - this.year;
    console.log(`Current cours: ${cours}`);
  }
}

const student1 = new Student("Artem", "Opolonyk", 2021);
console.log(student1);
student1.showFullName("Vyacheslavovych");
student1.showCours();

// Завдання 4
// A.
class Marker {
  constructor(color, amount, method) {
    (this.color = color), (this.amount = amount), (this.method = method);
  }
  writeLength() {
    let pureStringLength = this.method.replace(/\s/g, "").length; // визн. довжини стрічки без пробілів
    let printAmount = this.amount * 2; // визн. кільк. чорнило-символів (0,5/символ)
    if (pureStringLength > printAmount) {
      console.log("Your marker has less ink than you need");
    } else {
      console.log(`You can write all your string in ${this.color} `);
    }
    return printAmount;
  }
}

const markerBlue = new Marker(
  "blue",
  90,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
);
markerBlue.writeLength();

// B.

class fillingMarker extends Marker {
  constructor(color, amount, method) {
    super(color, amount, method);
  }
  filling() {
    let inkForFill = 100 - this.amount;
    if (this.amount >= 100) {
      console.log(`You do not need to fill your marker`);
    } else {
      console.log(`To fill your marker you need to add ${inkForFill} % of ink`);
    }
    return inkForFill;
  }
}

const markerWhiteFilling = new fillingMarker(
  "white",
  62,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te"
);
markerWhiteFilling.writeLength();
markerWhiteFilling.filling();

// Завдання 5

class Worker {
  constructor(fullName, dayRate, workingDays) {
    (this.fullName = fullName),
      (this.dayRate = dayRate),
      (this.workingDays = workingDays);
  }
  #experience = 1.2;
  #salary = 0;
  #salaryExtra = 0;

  showSalary() {
    this.#salary = this.dayRate * this.workingDays;
    console.log(`Salary of ${this.fullName} is ${this.#salary}.`);
    return this.#salary;
  }

  set experience(value) {
    this.#experience = value;
  }

  get experience() {
    return this.#experience;
  }

  get salaryExtra() {
    return this.#salaryExtra;
  }

  showSalaryWithExperience() {
    this.#salaryExtra = this.#salary * this.#experience;
    return this.#salaryExtra;
  }

  static workersArray = [];

  static addWorker(worker) {
    const workerData = {
      name: worker.fullName,
      salary: worker.showSalaryWithExperience(),
    };
    this.workersArray.push(workerData);
  }

  static getSortedWorkers() {
    this.workersArray.sort((a, b) => b.salary - a.salary);
    console.log("Sorted salary:");
    for (let i = 0; i < this.workersArray.length; i++) {
      console.log(
        `${this.workersArray[i].name} : ${this.workersArray[i].salary}`
      );
    }

    return this.workersArray;
  }
}

let worker1 = new Worker("Pavlo Tkachyk", 1000, 19);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`Basic experience ${worker1.experience}`);
worker1.showSalaryWithExperience();
console.log(`Salary with experience ${worker1.salaryExtra}`);
worker1.experience = 1.3;
console.log(`New experience ${worker1.experience}`);
worker1.showSalaryWithExperience();
console.log(`Salary with new experience ${worker1.salaryExtra}`);
Worker.addWorker(worker1); // виклик методу внесення worker* у масив нових робітників
// довго ломав голову як зробити, щоб автоматично при створенні об'єкту виконувалась
// функція додавання нового робітника у масив. Але чи не підтягувало дані роб.днів та ставки
// чи інші помилки. Поки що так.
// Була ще ідея зробити новий клас який наслідує Worker та має у собі цю функцію додовання у масив.
// А вже нові робітники створються на основі цього другого класу. Але не впевнений що це вірне рішення.
// Чекаю коментарів.

let worker2 = new Worker("Billy Gates", 720, 21);
console.log(worker2.fullName);
worker2.showSalary();
console.log(`Basic experience ${worker2.experience}`);
worker2.showSalaryWithExperience();
console.log(`Salary with experience ${worker2.salaryExtra}`);
worker2.experience = 1.3;
console.log(`New experience ${worker2.experience}`);
worker2.showSalaryWithExperience();
console.log(`Salary with new experience ${worker2.salaryExtra}`);
Worker.addWorker(worker2);

let worker3 = new Worker("Ivan Kozak", 1100, 22);
console.log(worker3.fullName);
worker3.showSalary();
console.log(`Basic experience ${worker3.experience}`);
worker3.showSalaryWithExperience();
console.log(`Salary with experience ${worker3.salaryExtra}`);
worker3.experience = 1.3;
console.log(`New experience ${worker3.experience}`);
worker3.showSalaryWithExperience();
console.log(`Salary with new experience ${worker3.salaryExtra}`);
Worker.addWorker(worker3);

let worker4 = new Worker("Kateryna Bilyk", 1010, 21);
console.log(worker4.fullName);
worker4.showSalary();
console.log(`Basic experience ${worker4.experience}`);
worker4.showSalaryWithExperience();
console.log(`Salary with experience ${worker4.salaryExtra}`);
worker4.experience = 1.3;
console.log(`New experience ${worker4.experience}`);
worker4.showSalaryWithExperience();
console.log(`Salary with new experience ${worker4.salaryExtra}`);
Worker.addWorker(worker4);

let worker5 = new Worker("Vasyl Tokar", 600, 15);
worker5.showSalary();
Worker.addWorker(worker5);

let worker6 = new Worker("Olga Kvitka", 1015, 20);
worker6.showSalary();
Worker.addWorker(worker6);

let worker7 = new Worker("Alex Dovbush", 1099, 25);
worker7.showSalary();
Worker.addWorker(worker7);

let worker8 = new Worker("Denys Petrenko", 990, 23);
worker8.showSalary();
Worker.addWorker(worker8);

Worker.getSortedWorkers(); // - виклик методу створення списку сортованих з\п
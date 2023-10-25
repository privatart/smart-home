// Завдання 2/1
let surName = "Opolonyk";
console.log(surName);

// Завдання 3
// 3/a
let firstLet;
let secondLet;
// 3/b
firstLet = "текст у форматі string";
secondLet = 2;
// 3/c
// alert (`Перша змінна: ${firstLet}`);
// alert (`Друга змінна: ${secondLet}`);
console.log(`Перша змінна: ${firstLet}`);
console.log(`Друга змінна: ${secondLet}`);
// 3/d
secondLet = firstLet;
// 3/e
console.log(`Перша змінна: ${firstLet}`);
console.log(`Змінена друга змінна: ${secondLet}`);

// Завдання 4
let createObj = {
    title: "Назва об'єкта",
    id: 15499,
    real: false,
    needCheck: undefined,
    value: null,
};
console.log(createObj);

// Завдання 5
let isAdult = confirm("Are You 18 years old?");
console.log(`Is user 18 years old? : ${isAdult}`);

// Завдання 6
let userName;
let userSurName;
let userStudyGroup;
let userBirthYear;
let isMarried;

userName = prompt("Please enter your name");
userSurName = prompt("Please enter your surname");
userStudyGroup = prompt(
    "Please enter your study group number",
    "поточна група UA-1019"
);
userBirthYear = Number(prompt("Please enter the year of your birth"));
isMarried = confirm("Are You married?");

console.log(
    typeof userName,
    typeof userSurName,
    typeof userStudyGroup,
    typeof userBirthYear,
    typeof isMarried
);

console.log(userBirthYear, isMarried, userName, userSurName, userStudyGroup);

let empty = null;
let undefinedLet = undefined;
//  цікавий прикол що консоль видає замість null - object
//  погуглив, а це виявляється фіча/баг JS
console.log(typeof empty, typeof undefinedLet);

// Завдання 7
let userLogin = prompt("Please enter your login name");
let userEmail = prompt("Please enter your Email", "example@bestmail.com");
let userPassword = prompt(
    "Please enter your password. It is safe, do not worry"
);
alert(
    `Hello, dear user ${userLogin}. Your email is saved as ${userEmail} with valid password: ${userPassword}.`
);

// Завдання 8
let second = 1;
let secondsPerMinute = second * 60;
let secondsPerHour = secondsPerMinute * 60;
let secondsPerDay = secondsPerHour * 24;
let secondsPerMonth = secondsPerDay * 31;

alert(`У 1 годині кількість секунд ${secondsPerHour}.`);
alert(`У 1 добі кількість секунд ${secondsPerDay}.`);
alert(`У 1 місяці кількість секунд ${secondsPerMonth}.`);

// Завдання з *

document.addEventListener("DOMContentLoaded", function () {  // виконання коду після завантаження HTML
    let trainScheme = document.getElementById("trainScheme");
    let getPlace = confirm(
        "Бажаєте визначити розташування місця у потязі згідно білету та відобразити схему вагону?"
    );
    if (getPlace) {
        // при підтвердженні завантажується зображення з схемою вагону
        let img = document.createElement("img");
        img.src = "img/train-seats.jpg";
        trainScheme.appendChild(img);
        trainScheme.classList.remove("train");
        // створення змінної з номером місця, яке вводить користувач
        let seatNumber = prompt(
            "Введіть номер свого місця (число в діапазоні 1 - 54):"
        );
        // Перевірка, чи введено число
        if (!isNaN(seatNumber)) {
            let number = parseInt(seatNumber);
            // Перевірка, чи число знаходиться у діапазоні від 1 до 54 (загальна кількість місць у вагоні)
            if (number >= 1 && number <= 54) {
                // Перевірка чи купе (діапазон 1 - 36)
                if (number >= 1 && number <= 36) {
                    let coupeSeats = 4; // 4 це кількість місць у купе
                    // номер купе це округлення до більшого цілого при ділені
                    let coupeNumber = Math.ceil(seatNumber / coupeSeats);
                    //   Парне число - це верхнє місце
                    if (number % 2 === 0) {
                        alert(
                            `Ваше місце ${number} - це купе номер ${coupeNumber}, верхнє місце.`
                        );
                        // Непарне число - це нижнє місце
                    } else {
                        alert(
                            `Ваше місце ${number} - це купе номер ${coupeNumber}, нижнє місце.`
                        );
                    }
                }
                // працюємо з діапазоном бокових місць (37-54)
                else {
                    //   Парне число - це верхнє місце
                    if (number % 2 === 0) {
                        alert(`Ваше місце ${number} - це бокове верхнє місце.`);
                        // Непарне число - це нижнє місце
                    } else {
                        alert(`Ваше місце ${number} - це бокове нижнє місце.`);
                    }
                }
                // якщо введене число не в діапазоні місць
            } else {
                alert(
                    `Номер Вашого місця ${number} не потрапляє у діапазон номерів плацкартного вагону (1-54).`
                );
            }
            // якщо введене НЕ число
        } else {
            alert("Введені дані не є числом.");
        }
    } else {
    }
});
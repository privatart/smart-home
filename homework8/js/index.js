// HomeWork 8

// Завдання 8-1
function upperCase(srt) {
  if (/^[A-Z]/.test(srt)) {
    return "String starts with uppercase character";
  } else {
    return "String does not start with uppercase character";
  }
}

console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));

// Завдання 8-2

function checkEmail(email) {
  if (/^[a-zA-Z0-9_.+-]*\@\w*(\.[a-z]{3})$/gi.test(email)) {
    return "Ваш email введено коректно";
  } else {
    return "Помилка в email, перевірте введені дані";
  }
}

const emailForm = document.querySelector(".emailForm");
const email = document.querySelector(".emailInput");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(checkExtraEmail(email.value));
});

// Завдання 8-3
function changeWords(string) {
  return string.replace(/([A-Za-z]+)\s([A-Za-z]+)/, "$2, $1");
  // рег.вир. шукає слова з більш ніж 1 буквою розділені пробілом. Replace ставить їх у порядок '$2, $1' між ними ,
}

console.log(changeWords("Good Morning"));
console.log(changeWords("Putin Huilo"));

// Завдання 8-4

function checkBank(cardID) {
  if (/\d{4}(-\d{4}){3}/g.test(cardID)) {
    // перевірка 4 цифри і три блоки з тире та 4 цифрами
    return "Номер карти введено коректно";
  } else {
    return "Помилка у номері карти";
  }
}

// Завдання 8-5
function checkExtraEmail(email) {
  if (/^[A-Za-z0-9](?!.*--)[A-Za-z0-9_]*\@\w*(\.[a-z]{3})$/gi.test(email)) {
    // (?!.*--)  - negative lookahead для перевірки, що рядок не містить послідовності "--"
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}

// Завдання 8-6
function checkLogin(login) {
  const numbers = login.match(/\d+(\.\d+)?/g);
  if (/^(?![0-9])[A-Za-z\d.]{2,10}$/gi.test(login)) {
    return "Correct login!\n" + numbers;
  } else {
    return "Login is not correct!";
  }
}
console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
console.log(checkLogin("ee11ret3"));

// Завдання 8-***
// вирішив зробити окремі функції для перевірки полів форми та чекбокса
// і потім викликати їх у події submit

function fullNameCheck(str) {
  if (/^[a-zA-Z]+\s[a-zA-Z]+$/gi.test(str)) {
    return true;
  } else {
    alert("Full Name is not correct!");
  }
}

function mailCheck(str) {
  if (/^[a-zA-Z0-9_.+-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(str)) {
    return true;
  } else {
    alert("Email is not correct!");
  }
}

function telCheck(str) {
  if (/^\+\d{2}(-\d{3}){2}(-\d{2}){2}$/gi.test(str)) {
    return true;
  } else {
    alert("Phone Number is not correct!");
  }
}

function passwordCheck(str) {
  if (/^[a-zA-Z0-9\-_+]{5,10}$/gi.test(str)) {
    return true;
  } else {
    alert("Password is not correct!");
  }
}

function passwordConfCheck(str, str2) {
  if (str == str2) {
    return true;
  } else {
    alert("Password confirmation is not valid!");
  }
}

function checkBoxCheck(checkBox) {
  if (checkBox.checked) {
    return true;
  } else {
    alert("You need to agree with our terms and conditions!");
  }
}

document.querySelector(".checkBox").addEventListener("click", function () {
  document.querySelector(".btnSubmit").disabled = false;
});  // робить кнопку submit активною якщо поставити галку у checkbox

const userForm = document.querySelector(".userForm");

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    fullNameCheck(document.querySelector(".fullName").value) &&
    mailCheck(document.querySelector(".email").value) &&
    telCheck(document.querySelector(".phone").value) &&
    passwordCheck(document.querySelector(".password").value) &&
    passwordConfCheck(
      document.querySelector(".password").value,
      document.querySelector(".confirmPassword").value
    ) &&
    checkBoxCheck(document.querySelector(".checkBox"))
  ) {
    alert(
      `Your have successfully created new account with:\n\n` +

      `${document.querySelector(".fullName").className} : ${document.querySelector(".fullName").value
      }\n` +
      `${document.querySelector(".email").className} : ${document.querySelector(".email").value
      }\n` +
      `${document.querySelector(".phone").className} : ${document.querySelector(".phone").value
      }\n` +
      `\nNow you can enjoy using our servises!`
    );
    userForm.reset();
  } else {
    alert("Check your data!");
  }
});
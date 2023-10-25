// HomeWork 7

// Завдання 1

const newWindow = window.open("", "", "width=300, height=300, left=800, top=0");

setTimeout(function () {
  newWindow.resizeTo(500, 500);
  setTimeout(function () {
    newWindow.moveTo(200, 200);
    setTimeout(function () {
      newWindow.close();
    }, 2000);
  }, 2000);
}, 2000);

// Завдання 2

const text = document.querySelector("#text");
const btnChangeStyle = document.querySelector(".changeStyle");

btnChangeStyle.addEventListener("click", function changeCSS() {
  text.style.color = "orange";
  text.style.fontSize = "50px";
  text.style.fontFamily = "Comic Sans MS";
});

// Завдання 3

const changeBtn1 = document.querySelector(".changeBtn1");
const changeBtn2 = document.querySelector(".changeBtn2");
const changeBtn3 = document.querySelector(".changeBtn3");
const link = document.querySelector(".link");

changeBtn1.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

changeBtn2.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "pink";
});

changeBtn3.addEventListener("mousedown", function () {
  document.body.style.backgroundColor = "brown";
});
changeBtn3.addEventListener("mouseup", function () {
  document.body.style.backgroundColor = "white";
});

link.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "white";
});

// Завдання 4
const chooseDelete = document.querySelector(".chooseDelete");
const selectMenu = document.querySelector(".select");

chooseDelete.addEventListener("click", function () {
  selectMenu.options[selectMenu.selectedIndex].remove();
});

// Завдання 5
const consoleBtn = document.querySelector(".consoleBtn");
// const divMessages = document.createElement("div");
// consoleBtn.after(divMessages);

consoleBtn.addEventListener("click", function () {
  console.log("I was pressed!");
  document.body.appendChild(document.createElement("p")).innerHTML =
    "I was pressed!";
});

consoleBtn.addEventListener("mouseover", function () {
  console.log("Mouse on me!");
  document.body.appendChild(document.createElement("p")).innerHTML =
    "Mouse on me!";
});

consoleBtn.addEventListener("mouseout", function () {
  console.log("Mouse is not on me!");
  document.body.appendChild(document.createElement("p")).innerHTML =
    "Mouse is not on me!";
});
// HomeWork 6

// Завдання 1

let unorderedList = document.getElementById("list");

alert(
  `${unorderedList.firstElementChild.textContent}\n` +
    `${unorderedList.lastElementChild.textContent}\n` +
    `${unorderedList.firstElementChild.nextElementSibling.textContent}\n` +
    `${unorderedList.lastElementChild.previousElementSibling.textContent}\n` +
    `${unorderedList.children[2].textContent}` // по номеру у масиві дитячих елементів
);

// Завдання 2
let h1 = document.getElementsByTagName("h1")[0]; // перший елемент з колекції H1
h1.style.backgroundColor = "lightgreen";

let un = document.getElementById("myDiv");
un.children[0].style.fontWeight = "bold";
un.children[1].style.color = "red";
un.children[2].style.textDecoration = "underline";
un.children[3].style.fontStyle = "italic";

let listItem = document.getElementById("myList");
let text = listItem.textContent;
listItem.textContent = text;

let span = document.getElementsByTagName("span")[0];
span.style.display = "none"; // додаємо css властивість display = "none" - не відображається на сторінці
// АБО
span.style.color = getComputedStyle(document.body).backgroundColor; // робимо колір тексту кольором сторінки

// Завдання 3
  /* <body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

let body = document.createElement("body");
let main = document.createElement("main");
body.prepend(main);
main.className = "mainClass check item";
let div = document.createElement("div");
main.prepend(div);
div.ID = "myDiv";
let p = document.createElement("p");
div.prepend(p);
p.innerHTML = "First paragraph";

// Завдання 4
//https://codepen.io/misha_klymenko/pen/Jjabvez

const formButton = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

formButton.addEventListener("click", function () {
  const inputArray = Array.from(document.querySelectorAll("fieldset input"));
  const inputValues = inputArray.slice(0, -1).map((input) => " " + input.value); // на 1 елемент менше, адже там btn
  outBlock.textContent = inputValues;
});

// Завдання 5
//https://codepen.io/misha_klymenko/pen/abzLvqo

const circles = document.querySelectorAll(".circle");
for (let i = 0; i < circles.length; i++) {
  let dataAnim = circles[i].getAttribute("data-anim");
  circles[i].classList.add(dataAnim);
}

// Завдання 6
//https://codepen.io/misha_klymenko/pen/dyjyeGO

const colorButtons = document.querySelectorAll(".color");
const price = document.getElementById("outprice");
const newColor = document.querySelector(".new");
const shoeImage = document.querySelectorAll(".shoe");
const gradientsBackground =  document.querySelectorAll(".gradient");

colorButtons.forEach((colorButton) => {
  colorButton.addEventListener("click", function () {
    // по кліку на кнопку кольору
    colorButtons.forEach((button) => {
      button.classList.remove("active"); // видаляємо клас active щоб колір не виділявся
      price.textContent = colorButton.getAttribute("data-price") + ".99"; // присвоюємо текст тегу outprice з поля data-price
      colorButton.classList.add("active"); // додаємо клас active щоб обраний колір виділявся
      newColor.style.backgroundColor = colorButton.getAttribute("color"); // присвоюємо тексту New фоновий колір з поля color
    });

    shoeImage.forEach((shoe) => {
      shoe.classList.remove("show"); // видаляємо клас
      if (shoe.getAttribute("color") == colorButton.getAttribute("color")) {
        // перевірка чи атрибут кольора фото співпадає з обраним кольором
        shoe.classList.add("show"); // присвоюємо клас щоб це фото відобразилось
      }
    });

    gradientsBackground.forEach((gradients) => {
      gradients.classList.remove("second"); // видаляємо клас
      if (gradients.getAttribute("color") == colorButton.getAttribute("color")) {
        // перевірка чи атрибут кольора фото співпадає з обраним кольором
        gradients.classList.add("second"); // присвоюємо клас щоб це фото відобразилось
      }
    });

  });
});

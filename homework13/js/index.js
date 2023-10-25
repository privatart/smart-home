// HomeWork 13

// Завдання 13-1

const voteBtn = document.querySelector(".vote-btn");

voteBtn.addEventListener("click", async function () {
  const answer = await fetch("https://randomuser.me/api/");
  const voteTime = new Date().toLocaleString();
  voteBtn.innerHTML = `Your vote was accepted at ${voteTime}.`;
});

// Завдання 13-2

const authorsBtn = document.querySelector(".authors-btn");

authorsBtn.addEventListener("click", async function () {
  const getArray = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonArray = await getArray.json();
  jsonArray.map(
    (book) =>
      (document.querySelector(".results").innerHTML += `${book.username} <br>`)
  );
});

// Завдання 13-3

const renderUser = document.querySelector(".renderUser");

renderUser.addEventListener("click", async function () {
  const res = await fetch("https://randomuser.me/api/");
  const usersData = await res.json();
  document.querySelector(
    ".userEmail"
  ).innerHTML += `${usersData["results"][0].email} <br>`;
});

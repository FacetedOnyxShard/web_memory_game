"use strict";

const cardsMap = document.getElementById("map");

const cardsInGridRow = 4;

for (let i = 0; i < cardsInGridRow ** 2; ++i) {
  const card = document.createElement("div");
  card.className = "card";

  cardsMap.appendChild(card);
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

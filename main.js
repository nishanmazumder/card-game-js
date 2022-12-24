const cardObjEle = [
  { id: 1, path: "./img/card-kingH.png" },
  { id: 2, path: "./img/card-jackF.png" },
  { id: 3, path: "./img/card-queenD.png" },
  { id: 4, path: "./img/card-acespd.png" },
];

// 30:53 min / 104 number line..confused! lol... how you pass an object to create node?

const cardImgBack = "./img/card-back.png";

let cards = [];
const playGame = document.getElementById("playGame");

const cardContainer = document.querySelector(".card-container");
const cardCollecetArea = document.querySelector(".card-pos-a");
const cardGridArea = '"a a" "a a"';

{
  /* <div class="card">
    <div class="card-inner">
        <div class="card-front"><img class="card-img" src="img/card-AceSpades.png" alt="front"></div>
        <div class="card-back"><img class="card-img" src="img/card-back-Blue.png" alt="back"></div>
    </div>
</div> */
}

loadGame();

function loadGame() {
  createCards();
  cards = document.querySelectorAll(".card");
  playGame.addEventListener("click", () => startGame());
}

function startGame() {
  startRound();
}

function startRound() {
  collectCards();
}

function gameInitialize() {}

function startNewRound() {}

function collectCards() {
  transformGridArea(cardGridArea);
  addCardToCellarea(cardCollecetArea);
}

function transformGridArea(area) {
  cardContainer.style.gridTemplateAreas = area;
}

function addCardToCellarea(cardCellClass) {
  const cardCollaspArea = document.querySelector(cardCellClass);

  cards.forEach((card, index) => {
    addChildElement(cardCollaspArea, card);
  });
}

function createCards() {
  cardObjEle.forEach((card) => {
    createCard(card);
  });
}

function createCard(cardElement) {
  // Create Div/Elements
  const divCard = createElement("div");
  const divCardInner = createElement("div");
  const divCardFront = createElement("div");
  const divCardBack = createElement("div");
  const imgFront = createElement("img");
  const imgBack = createElement("img");

  // Add id div/elem
  addIdToElement(divCard, cardElement.id);

  // Add class to div
  addClassToElement(divCard, "card");
  addClassToElement(divCardInner, "card-inner");
  addClassToElement(divCardFront, "card-front");
  addClassToElement(divCardBack, "card-back");
  addClassToElement(imgFront, "card-img");
  addClassToElement(imgBack, "card-img");

  //Add src to img
  addSrcToElement(imgFront, cardElement.path);
  addSrcToElement(imgBack, cardImgBack);

  // Add inner element/div
  addChildElement(divCardFront, imgFront);
  addChildElement(divCardBack, imgBack);
  addChildElement(divCardInner, divCardFront);
  addChildElement(divCardInner, divCardBack);
  addChildElement(divCard, divCardInner);

  // Add card to gird position
  addCardTogrid(divCard);

  // let divContainer = document.querySelector(".card-container");

  // divContainer.appendChild(divCard);
}

function createElement(elem) {
  return document.createElement(elem);
}

function addClassToElement(elem, clsName) {
  elem.classList.add(clsName);
}

function addIdToElement(elem, idName) {
  elem.id = idName;
}

function addSrcToElement(elem, srcPath) {
  elem.src = srcPath;
}

function addChildElement(mainDiv, childDiv) {
  mainDiv.appendChild(childDiv);
}

function addCardTogrid(card) {
  const cardClassName = getCardClass(card);
  const cardElement = document.querySelector(cardClassName);

  addChildElement(cardElement, card);
}

function getCardClass(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}

// function createCard2(){
//   let divContainer = document.querySelector('.card-container');
//   let myDiv = document.createElement("div")
//   let innerDiv = document.createElement("div")

//   myDiv.id = "testId"
//   myDiv.classList.add("testClass")
//   innerDiv.id = "tid"
//   innerDiv.classList.add("tclass")
//   let txt = document.createTextNode("my name Nishan")

//   innerDiv.appendChild(txt)
//   myDiv.appendChild(innerDiv)
//   divContainer.appendChild(myDiv)

// }

// createCard2()

// let card = createCard()

// console.log(createCard())

// Create Cards - HTML
// Create the Game Play Grid
// Create Cards Dynamically - JS Code
// Initialise Card Positions
// Load Game and Start Game
// Stack Cards
// Flip Cards
// Shuffle Cards
// Deal Cards
// Choose Card
// Styling and Layout
// Animation
// Responsive Layout
// Local Storage

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

const totalCards = cardObjEle.length;
let cardPosition = [];

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

  // console.log(cards);
  playGame.addEventListener("click", () => startGame());
}

function startGame() {
  gameInitialize();
  startRound();
  // filpCards(true);
  shuffleCards();
}

function startRound() {
  collectCards();
}

function gameInitialize() {}

function startNewRound() {}

function initializeCardPostion(cardId) {
  cardPosition.push(cardId);
}

function dealCards() {
  setCardToAppropiatePos();
  let setCardPos = cardMapToNewPosition();

  transformGridArea(setCardPos);
}

function cardMapToNewPosition() {
  let firstPos = "";
  let secondPos = "";
  let area = "";

  cards.forEach((card, index) => {
    if (cardPosition[index] == 1) {
      area += "a ";
    } else if (cardPosition[index] == 2) {
      area += "b ";
    } else if (cardPosition[index] == 3) {
      area += "c ";
    } else if (cardPosition[index] == 4) {
      area += "d ";
    }

    if (index == 1) {
      firstPos = area.substring(0, area.length - 1);
      area = "";
    } else if (index == 3) {
      secondPos = area.substring(0, area.length - 1);
    }
  });


  // console.log(`"${firstPos}" "${secondPos}"`)

  return `"${firstPos}" "${secondPos}"`;
}

// cardMapToNewPosition()

function setCardToAppropiatePos() {
  cards.forEach((card, index) => {
    addCardTogridCellArea(card);
  });
}

function randomizeCardPos() {
  const rand1 = Math.floor(Math.random() * totalCards) + 1;
  const rand2 = Math.floor(Math.random() * totalCards) + 1;

  const temp = cardPosition[rand1 - 1];

  cardPosition[rand1 - 1] = cardPosition[rand2 - 1];
  cardPosition[rand2 - 2] = temp;
}

function shuffleCards() {
  let suffle = 0;
  const suffId = setInterval(suffleFun, 12);

  function suffleFun() {
    randomizeCardPos();

    dealCards();
    if (suffle == 500) {
      clearInterval(suffId);
    } else suffle++;
  }
}

function filpCard(card, flipBack) {
  const cardEleme = card.firstChild;

  if (flipBack && !cardEleme.classList.contains("flip-card")) {
    cardEleme.classList.add("flip-card");
  } else if (cardEleme.contains("flip-card")) {
    cardEleme.classList.remove("flip-card");
  }
}

function filpCards(flipBack) {
  cards.forEach((card, index) => {
    setTimeout(() => {
      filpCard(card, flipBack);
    }, index * 100);
  });
}

function collectCards() {
  transformGridArea(cardGridArea);
  addCardToCellarea(cardCollecetArea);
}

function transformGridArea(area) {
  cardContainer.style.gridTemplateAreas = area;
}

function addCardToCellarea(cardCellClass) {
  const cardCollaspArea = document.querySelector(".card-pos-a");

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
  addCardTogridCellArea(divCard);

  // set card position
  initializeCardPostion(cardElement.id);
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

function addCardTogridCellArea(card) {
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

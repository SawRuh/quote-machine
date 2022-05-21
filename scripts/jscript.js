let newQuoteBtn = document.querySelector(".link-box button");

// newQuoteBtn.addEventListener("click", newQuoteClickHandler);

// use objects inside single array

let storage = [
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    quoter: "Vince Lombardi",
    bg: "aqua",
  },
  {
    quote: "Do what you can, where you are, with what you have.",
    quoter: "Teddy Roosevelt",
    bg: "#74c735",
  },
  {
    quote:
      "Never underestimate the power you have to take your life in a new direction.",
    quoter: "Germany Kent",
    bg: "#581845",
  },
  {
    quote: "Life is change. Growth is optional. Choose wisely.",
    quoter: "Karen Kaiser Clark",
    bg: "#FFC300",
  },

  {
    quote:
      "Life's not about expecting, hoping and wishing, it's about doing, being and becoming.",
    quoter: "Mike Dooley",
    bg: "#C70039",
  },
];

let index = 1;
let maxItems = storage.length;

newQuoteBtn.onclick = function () {
  let quoteItem = storage[index];

  let newQuote = quoteItem.quote;
  let quoteContainer = document.querySelector(".quote");
  quoteContainer.textContent = '"' + newQuote + '"';

  let newQuoter = quoteItem.quoter;
  let quoterContainer = document.querySelector(".quoter");
  quoterContainer.textContent = "- " + newQuoter;

  newQuoteBtn.style.backgroundColor = quoteItem.bg;
  document.body.style.backgroundColor = quoteItem.bg;
  index = index + 1;

  if (index == maxItems) {
    index = 0;
  }
};

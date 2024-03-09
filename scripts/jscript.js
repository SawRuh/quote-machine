let newQuoteBtn = document.querySelector(".link-box button");

// newQuoteBtn.addEventListener("click", newQuoteClickHandler);

// use objects inside single array

let storage = [
  {
    quote: "Naruto's official motto in life, 'Believe it!' ",
    quoter: "Naruto",
    bg: "#ffcbf2",
    contrastColor: "black",
  },
  {
    quote:
      "No matter how hard or impossible it is, never lose sight of your goal.",
    quoter: "Monkey D Luffy",
    bg: "#FFB7B2",
    contrastColor: "black",
  },
  {
    quote:
      "One day you'll be just a MEMORY to some PEOPLE. Do your best to be a Good one.",
    quoter: "Hateke Kakashi",
    bg: "#FFDAC1",
    contrastColor: "#black",
  },
  {
    quote: "It's not about whether I can, I have to do it!",
    quoter: "Megumi Fshiguro",
    bg: "#E2F0CB",
    contrastColor: "black",
  },

  {
    quote:
      "I don't care what society says. I've never regretted doing anything. I will survive and do what I want to.",
    quoter: "Roronoa Zoro",
    bg: "#B5EAD7",
    contrastColor: "black",
  },

  {
    quote: "Some people are worth melting for.",
    quoter: "Olaf, Frozen",
    bg: "#C7CEEA",
    contrastColor: "black",
  },
  {
    quote: "Hard work is worthless for those that don't believe in themselves",
    quoter: "Naruto",
    bg: "#ff9a00",
    contrastColor: "black",
  },
  {
    quote:
      "The strong should aid and protect the weak.Then,the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature",
    quoter: "Tanjiro",
    bg: "#c3195d",
    contrastColor: "black",
  },
  {
    quote:
      "A person can change, at the moment when the person wishes to change.",
    quoter: "Haruhi",
    bg: "#50b8e7",
    contrastColor: "black",
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
  newQuoteBtn.style.color = quoteItem.contrastColor;
  document.body.style.backgroundColor = quoteItem.bg;
  index = index + 1;

  if (index == maxItems) {
    index = 0;
  }
};

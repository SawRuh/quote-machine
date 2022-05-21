let newQuoteBtn = document.querySelector(".link-box button");

function newQuoteClickHandler() {
  let quoteContainer = document.querySelector(".quote");
  let newQuote = '"Do what you can, where you are, with what you have."';
  quoteContainer.textContent = newQuote;

  let quoterContainer = document.querySelector(".quoter");
  let newQuoter = "- Teddy Roosevelt";
  quoterContainer.textContent = newQuoter;
}

newQuoteBtn.addEventListener("click", newQuoteClickHandler);

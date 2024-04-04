document.getElementById("generateBtn").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      displayQuote(randomQuote);
    })
    .catch((error) => console.error("Error fetching quotes:", error));
}

function displayQuote(quote) {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
        <p>"${quote.text}"</p>
        <p>- ${quote.author ? quote.author : "Unknown"}</p>
    `;
}

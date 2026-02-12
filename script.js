const container = document.getElementById("games-container");
const modal = document.getElementById("game-modal");
const frame = document.getElementById("game-frame");
const closeBtn = document.getElementById("close-btn");
const searchInput = document.getElementById("search");

let gamesList = [];

// Load games from JSON
fetch("games.json")
    .then(response => response.json())
    .then(data => {
        gamesList = data;
        displayGames(gamesList);
    });

// Display games
function displayGames(games) {
    container.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");
        card.textContent = game.name;

        card.addEventListener("click", () => {
            frame.src = game.url;
            modal.classList.remove("hidden");
        });

        container.appendChild(card);
    });
}

// Close modal
closeBtn.addEventListener("click", () => {
    frame.src = "";
    modal.classList.add("hidden");
});

// Search function
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = gamesList.filter(game =>
        game.name.toLowerCase().includes(searchTerm)
    );
    displayGames(filtered);
});
  

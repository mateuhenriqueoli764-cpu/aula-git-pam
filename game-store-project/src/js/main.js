function displayGames(games) {
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = '';

    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        gameElement.innerHTML = `
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <p>Price: $${game.price}</p>
            <button onclick="addToCart('${game.id}')">Add to Cart</button>
        `;

        gamesContainer.appendChild(gameElement);
    });
}

function addToCart(gameId) {
    // Logic to add the game to the shopping cart
    console.log(`Game with ID ${gameId} added to cart.`);
}

document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { id: '1', title: 'Game One', description: 'Description for Game One', price: 29.99 },
        { id: '2', title: 'Game Two', description: 'Description for Game Two', price: 39.99 },
        { id: '3', title: 'Game Three', description: 'Description for Game Three', price: 49.99 },
        // Add more games as needed
    ];

    displayGames(games);
});
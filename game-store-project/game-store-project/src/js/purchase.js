function addToCart(gameId) {
    // Logic to add the selected game to the cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const game = { id: gameId, quantity: 1 }; // Example game object
    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Game added to cart!');
}

function calculateTotal() {
    // Logic to calculate the total price of items in the cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => {
        // Assuming each game has a price property
        const gamePrice = getGamePrice(item.id); // Function to get game price
        total += gamePrice * item.quantity;
    });
    return total;
}

function handleFormSubmission(event) {
    event.preventDefault();
    // Logic to handle form submission for purchase
    const total = calculateTotal();
    alert(`Total amount to be paid: $${total}`);
    // Further processing like payment can be added here
}

document.addEventListener('DOMContentLoaded', () => {
    const purchaseForm = document.getElementById('purchase-form');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Example of adding event listeners to game selection buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.dataset.gameId; // Assuming buttons have data attributes
            addToCart(gameId);
        });
    });
});
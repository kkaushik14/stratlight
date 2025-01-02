document.addEventListener("DOMContentLoaded", () => {
    const plus = document.querySelector(".increment");
    const minus = document.querySelector(".decrement");
    const quantity = document.querySelector(".quantity");
    const atc = document.querySelector(".atc");
    const cart = document.querySelector(".cart");
    let a = 1;
    let b = parseInt(localStorage.getItem('cartValue')) || 0; 

    
    cart.innerText = b;

    plus.addEventListener("click", () => {
        a++;
        quantity.innerText = a;
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            quantity.innerText = a;
        }
    });

    atc.addEventListener("click", () => {
        b += a; 
        localStorage.setItem('cartValue', b); 
        cart.innerText = b; 
    });
});
// Define a unique identifier for each game
const productId = "spiderman2"; // Unique identifier for this game

// When a game is added to the cart
const gameInfo = {
    title: "MARVEL'S SPIDER-MAN 2",
    price: 3500,
    quantity: b, // Get the quantity
    imageUrl: "1sp1.jpg", // Add the image URL for the game
};

// Store the game info in localStorage using the unique identifier as the key
localStorage.setItem(`game_${productId}`, JSON.stringify(gameInfo));
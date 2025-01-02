let cart = [
    {
        id: 1,
        name: "MARVEL'S SPIDER-MAN 2",
        price: 3500,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg",
        quantity: 1
    },
    {
        id: 2,
        name: "MINECRAFT : JAVA EDITION",
        price: 3500,
        image: "https://i.pinimg.com/564x/8d/85/4f/8d854f2f5e92e8c9d6ce7c8d7b4ea06c.jpg",
        quantity: 1
    },
    {
        id: 3,
        name: "PUBG",
        price: 3500,
        image: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg",
        quantity: 1
    },
    {
        id: 4,
        name: "GTA: V",
        price: 3500,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        quantity: 1
    },
];

function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="game-card rounded-lg p-4 neon-border flex flex-col md:flex-row items-center gap-4">
                <img src="${item.image}" alt="${item.name}" class="w-32 h-32 object-cover rounded-lg">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-yellow-400">${item.name}</h3>
                    <p class="text-gray-400">₹ ${item.price.toFixed(2)}</p>
                    <div class="flex items-center gap-4 mt-2">
                        <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn text-yellow-400 text-xl">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn text-yellow-400 text-xl">+</button>
                    </div>
                </div>
                <button onclick="removeItem(${item.id})" class="text-red-500 hover:text-red-400">
                    <i class="bi bi-trash3-fill text-2xl"></i>
                </button>
            </div>
        `;
    });

    updateTotals();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCart();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `₹ ${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹ ${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase! Your games will begin downloading shortly.');
    clearCart();
}

renderCart();
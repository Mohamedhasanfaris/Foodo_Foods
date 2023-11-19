// Sample data for the items in the cart
const menuItems = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 15 },
  // Add more items as needed
];

// Function to initialize the cart
function initCart() {
  // Check if the cart exists in localStorage, if not, create an empty array
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  let cart = JSON.parse(localStorage.getItem('cart'));
  updateCartUI(cart);
}

  
// Define a cart array to store items with their quantities
  let cart = [];
 // Function to add an item to the cart with a default quantity of 1
 function addItemToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

  if (existingItemIndex !== -1) {
      // If the item already exists, update the quantity
      cart[existingItemIndex].quantity += 1;
  } else {
      // If the item doesn't exist, add it with a default quantity of 1
      item.quantity = 1;
      cart.push(item);
  }

  updateCartUI(cart);
}

// Function to update the cart UI
function updateCartUI(cart) {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Clear the current cart items
  cartItemsElement.innerHTML = '';

  // Populate the cart items
  cart.forEach(item => {
      const li = document.createElement('li');

      // Ensure that the quantity property is defined
      if (!item.quantity) {
          item.quantity = 1; // Set a default quantity if undefined
      }

      li.textContent = `${item.name} x${item.quantity} - ₹${item.price}`;

      // Add a decrease button for each item
      const decreaseButton = document.createElement('button');
      decreaseButton.textContent = 'Decrease';
      decreaseButton.onclick = function () {
          decreaseQuantity(item.id);
      };
      li.appendChild(decreaseButton);
      cartItemsElement.appendChild(li);
  });

  // Calculate and display the total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalElement.textContent = total.toFixed(2);

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to decrease the quantity of an item
function decreaseQuantity(itemID) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(cartItem => cartItem.id === itemID);

  if (index !== -1 && cart[index].quantity > 1) {
    // Add animation class
    const cartItemsElement = document.getElementById('cart-items');
    const itemElement = cartItemsElement.children[index];
    itemElement.classList.add('decrease-animation');

    // Decrease quantity
    cart[index].quantity--;

    // Remove animation class after a delay
    setTimeout(() => {
      itemElement.classList.remove('decrease-animation');
    }, 500); // Adjust the delay as needed
  } else {
    cart.splice(index, 1);
  }

  updateCartUI(cart);
}

// ...

// Event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  initCart();
});


// Function to handle the checkout button click
function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalElement = document.getElementById('total');
  if (cart.length === 0) {
    alert('Your cart is empty. Add items before checking out.');
    return;
  }
  // Display a simple alert with the total amount
  alert(`Thank you for your order! Total amount: ₹${totalElement.textContent}`);
  // Clear the shopping cart
  localStorage.removeItem('cart'); // Remove the 'cart' key from localStorage
  updateCartUI([]); // Update the cart display after clearing
}

// Event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  initCart();
});

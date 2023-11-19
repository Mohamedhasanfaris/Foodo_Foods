document.addEventListener("DOMContentLoaded", function () {
    // Add Item Form
    const addItemForm = document.querySelector("#manage-menu form");
    const menuList = document.querySelector("#manage-menu .menu-list ul");

    // Load existing items from localStorage
    loadMenuItems();

    addItemForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get values from the form
        const itemName = document.getElementById("itemName").value;
        const itemPrice = document.getElementById("itemPrice").value;

        // Perform validation if needed

        // Display a simple alert for now, you can replace this with your logic
        alert(`Item Added - Name: ${itemName}, Price: ₹${itemPrice}`);

        // Create a new list item to display the added item
        const newItemElement = document.createElement("li");
        newItemElement.textContent = `${itemName} - ₹${itemPrice}`;

        // Append the new item to the menu list
        menuList.appendChild(newItemElement);

        // Save the new item to localStorage
        saveMenuItem(itemName, itemPrice);

        // Clear the form
        addItemForm.reset();
    });

    // Update Status Button
    const updateStatusButtons = document.querySelectorAll("#manage-orders button");
    updateStatusButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Placeholder logic, you can replace this with your logic
            alert("Order Status Updated");
        });
    });

    // Logout Button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    
    function loadMenuItems() {
        const storedItems = JSON.parse(localStorage.getItem("menuItems")) || [];
        storedItems.forEach(item => {
            const newItemElement = document.createElement("li");
            newItemElement.textContent = `${item.name} - ₹${item.price}`;
            menuList.appendChild(newItemElement);
        });
    }

    function saveMenuItem(name, price) {
        const storedItems = JSON.parse(localStorage.getItem("menuItems")) || [];
        storedItems.push({ name, price });
        localStorage.setItem("menuItems", JSON.stringify(storedItems));
    }
});

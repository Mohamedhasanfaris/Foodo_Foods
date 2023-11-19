document.addEventListener("DOMContentLoaded", function () {
    const addItemForm = document.querySelector("#manage-menu form");
    const menuList = document.querySelector("#manage-menu .menu-list ul");
    loadMenuItems();

    addItemForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const itemName = document.getElementById("itemName").value;
        const itemPrice = document.getElementById("itemPrice").value;
        alert(`Item Added - Name: ${itemName}, Price: ₹${itemPrice}`);
        const newItemElement = document.createElement("li");
        newItemElement.textContent = `${itemName} - ₹${itemPrice}`;
        menuList.appendChild(newItemElement);
        saveMenuItem(itemName, itemPrice);
        addItemForm.reset();
    });
    const updateStatusButtons = document.querySelectorAll("#manage-orders button");
    updateStatusButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Order Status Updated");
        });
    });
    // Logout Button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
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

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the sidebar and main content
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main');

    // Function to toggle the sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    }

    // Event listener for the sidebar toggle button (if you have one)
    const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', toggleSidebar);
    }
});

document.querySelector('#dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Sidebar
const menuButton = document.getElementById('menuButton');
const Sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', function() {
    Sidebar.classList.toggle('active');
});
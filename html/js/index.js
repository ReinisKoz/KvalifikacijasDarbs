// Toggle sidebar menu
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

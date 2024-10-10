// sidebar 
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

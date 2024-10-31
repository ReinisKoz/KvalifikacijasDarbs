document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            
            // Pievienojam sidebar notikumu klausītāju pēc header ielādes
            document.getElementById('menuButton').addEventListener('click', function() {
                document.getElementById('sidebar').classList.toggle('active');
            });
            
            // Pievienojam dark mode pārslēgšanas notikumu klausītāju pēc header ielādes
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
            });
        })
        .catch(error => console.error('Error loading the header:', error));
});

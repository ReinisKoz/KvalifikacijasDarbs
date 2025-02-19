// header un sidebar
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

// booking calendar
document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("calendar");
    for (let i = 1; i <= 30; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.innerText = i;
        day.addEventListener("click", function () {
            if (!day.classList.contains("booked")) {
                day.classList.add("booked");
                alert("Appointment booked for day " + i);
            }
        });
        calendarContainer.appendChild(day);
    }
});

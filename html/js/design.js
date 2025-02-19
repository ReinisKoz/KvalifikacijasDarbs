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

document.addEventListener('DOMContentLoaded', () => {
    // Load bookingCalendar.html
    fetch('bookingCalendar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bookingCalendar').innerHTML = data;
        })
        .catch(error => console.error('Error loading the booking calendar:', error));
});

// Funkcija kalendāra ģenerēšanai
function generateCalendar() {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = ''; // Iztīra esošo kalendāru

    const daysInMonth = new Date(2025, 1, 0).getDate(); // Iegūst dienu skaitu mēnesī (februāris 2025)
    const firstDayOfMonth = new Date(2025, 1, 1).getDay(); // Iegūst pirmās dienas nedēļas dienu
    const totalDays = 42; // 6 nedēļas x 7 dienas = 42 vietas kalendārā
    let day = 1;

    // Pievieno tukšus elementus līdz pirmās dienas sākumam
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        calendarElement.appendChild(emptyDay);
    }

    // Ģenerē kalendāra dienas
    for (let i = firstDayOfMonth; i < totalDays; i++) {
        if (day > daysInMonth) break; // Kad ir beigušies mēneša dienas

        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = day;
        dayElement.addEventListener('click', function() {
            showBookingOptions(day);
        });

        calendarElement.appendChild(dayElement);
        day++;
    }
}

// Parāda pierakstīšanās iespējas konkrētā dienā
function showBookingOptions(day) {
    const bookingPopup = document.createElement('div');
    bookingPopup.classList.add('bookings');

    const options = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];
    
    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('booking-option');
        optionElement.innerHTML = `${option} - Available`;
        optionElement.addEventListener('click', () => {
            alert(`You have booked ${option} on day ${day}`);
        });
        bookingPopup.appendChild(optionElement);
    });

    // Pievieno popup uz ekrāna
    document.body.appendChild(bookingPopup);

    // Pievieno pogu, lai aizvērtu popup
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', () => {
        bookingPopup.remove();
    });
    bookingPopup.appendChild(closeBtn);
}

// Kad lapa ir ielādēta, ģenerē kalendāru
window.onload = generateCalendar;

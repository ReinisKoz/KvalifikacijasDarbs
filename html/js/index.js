// sidebar 
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        element.textContent = translations[lang][element.getAttribute("data-lang")];
    });
}

// Translations for different languages
const translations = {
    "en": {
        "title": "Welcome to our website!",
        "contact": "Contact us"
    },
    "fr": {
        "title": "Bienvenue sur notre site Web!",
        "contact": "Contactez-nous"
    },
    "lv": {
        "title": "Laipni lūdzam mūsu mājaslapā!",
        "contact": "Sazinieties ar mums"
    }
};
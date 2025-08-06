const translateSection = document.querySelector('.translate');
const currentLangBtn = document.querySelector('.translate__current-lang');
const langButtons = document.querySelectorAll('.translate__lang-btn');

translateSection.addEventListener('click', function () {
    this.classList.toggle('active');
});

function loadLang(lang) {
    fetch(`locales/${lang}.json`)
        .then(res => res.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.innerHTML = translations[key];
                }
            });
            localStorage.setItem('lang', lang);
        });
};

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        const langText = btn.textContent;
        loadLang(lang);
        currentLangBtn.textContent = langText;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    loadLang(savedLang);

    const savedLangBtn = document.querySelector(`.translate__lang-btn[data-lang="${savedLang}"]`);
    if (savedLangBtn) {
        currentLangBtn.textContent = savedLangBtn.textContent;
    }
});
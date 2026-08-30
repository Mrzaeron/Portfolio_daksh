const darkModeBtn = document.getElementById('darkModeBtn');
const modeIcon = darkModeBtn.querySelector('.mode-icon');

const nameEl = document.getElementById('typedName');
const fullName = 'Daksh Singla';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    modeIcon.textContent = isLight ? '☀' : '☾';
});

if (prefersReducedMotion) {
    nameEl.textContent = fullName;
} else {
    let i = 0;
    function typeChar() {
        if (i < fullName.length) {
            nameEl.textContent += fullName.charAt(i);
            i++;
            setTimeout(typeChar, 70);
        }
    }
    typeChar();
}

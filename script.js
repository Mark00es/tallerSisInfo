const splashScreen = document.querySelector('.splash-screen');
const mainContent = document.getElementById('mainContent');
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

function hideSplashScreen() {
    splashScreen.classList.add('loaded');
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.opacity = '1';
    }, 1500);
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

window.addEventListener('load', () => {
    hideSplashScreen();
});

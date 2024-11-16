
const muteButton = document.getElementById('muteButton');
const backgroundAudio = document.getElementById('backgroundAudio');

muteButton.addEventListener('click', () => {
    if (backgroundAudio.muted) {
        backgroundAudio.muted = false;
        muteButton.textContent = '🔈 Silenciar música';
    } else {
        backgroundAudio.muted = true;
        muteButton.textContent = '🔇 Activar música';
    }
});

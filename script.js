const chaosButton = document.getElementById('chaosButton');
const chaosSound = document.getElementById('chaosSound');
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

chaosButton.addEventListener('click', function() {
  chaosSound.currentTime = 0;
  chaosSound.play();
  alert("Tempo e espaço... sob meu comando!");
});

musicButton.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = "🎵 Música (On)";
  } else {
    backgroundMusic.pause();
    musicButton.textContent = "🎵 Música (Off)";
  }
});

// Abrir a página sobre o Shadow
const btnSobreShadow = document.getElementById('btn-sobre-shadow');
const paginaSobreShadow = document.getElementById('pagina-sobre-shadow');
const btnFecharSobre = document.getElementById('fechar-sobre-shadow');

btnSobreShadow.addEventListener('click', () => {
  paginaSobreShadow.style.display = 'block';
});

// Fechar a página sobre o Shadow
btnFecharSobre.addEventListener('click', () => {
  paginaSobreShadow.style.display = 'none';
});

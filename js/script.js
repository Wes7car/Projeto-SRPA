function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 7 + 's';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);

// Função para abrir uma imagem em um modal
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content"><img src="${image.src}" alt="Imagem ampliada"><span class="close">&times;</span></div>`;
        document.body.appendChild(modal);

        // Fecha o modal ao clicar no "x"
        modal.querySelector('.close').addEventListener('click', function () {
            modal.remove();
        });
    });
});

// Função para tocar o vídeo quando o botão for clicado
document.getElementById("playButton").addEventListener("click", function () {
    var video = document.getElementById("musica-video");
    var src = video.src;
    video.src = src + "?autoplay=1"; // A opção ?autoplay=1 vai fazer o vídeo tocar automaticamente
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("responsive");
}

// Função para reproduzir a história
let utterance;
let isPlaying = false;
let isPaused = false;
let currentPosition = 0; // Para armazenar a posição de onde parou

function playTexto() {
    const texto = document.querySelector('.content').innerText;
    utterance = new SpeechSynthesisUtterance(texto);

    // Ajustando propriedades para uma leitura mais suave e natural
    utterance.rate = 1.3; // Velocidade (padrão: 1, pode ser ajustado)
    utterance.pitch = 0.8; // Tom (padrão: 1, ajustado para um tom mais grave)
    utterance.volume = 1; // Volume (padrão: 1)

    // Usando uma voz masculina mais grave
    let voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(voice => voice.lang === 'pt-BR' && voice.name.toLowerCase().includes('mário')); // Ajuste para selecionar uma voz masculina (pode variar conforme as vozes disponíveis)

    // Se a leitura foi pausada, retoma de onde parou
    if (isPaused) {
        utterance.text = utterance.text.slice(currentPosition);
    }

    utterance.onstart = () => {
        isPlaying = true;
        updateButtons();
    };

    utterance.onend = () => {
        isPlaying = false;
        isPaused = false;
        currentPosition = 0; // Resetando a posição ao final da leitura
        updateButtons();
    };

    if (isPaused) {
        speechSynthesis.resume(); // Retoma a leitura se estiver pausada
    } else {
        speechSynthesis.speak(utterance); // Começa a leitura
    }

    isPaused = false;
    updateButtons();
}

function pauseTexto() {
    speechSynthesis.pause(); // Pausa a leitura
    isPaused = true;
    currentPosition = utterance.text.length - speechSynthesis.speaking; // Armazena a posição de onde parou
    updateButtons();
}

function stopTexto() {
    speechSynthesis.cancel(); // Interrompe a leitura
    isPlaying = false;
    isPaused = false;
    currentPosition = 0; // Resetando a posição
    updateButtons();
}

function updateButtons() {
    // Habilitar Play somente se não estiver tocando
    document.getElementById('playButton').disabled = isPlaying && !isPaused;
    // Habilitar Pause somente se estiver tocando e não pausado
    document.getElementById('pauseButton').disabled = !isPlaying || isPaused;
    // Habilitar Stop somente se estiver tocando
    document.getElementById('stopButton').disabled = !isPlaying;
}

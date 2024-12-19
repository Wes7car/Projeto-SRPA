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
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content"><img src="${image.src}" alt="Imagem ampliada"><span class="close">&times;</span></div>`;
        document.body.appendChild(modal);

        // Fecha o modal ao clicar no "x"
        modal.querySelector('.close').addEventListener('click', function() {
            modal.remove();
        });
    });
});

// Função para criar os festões
function explodeConfetti() {
    const numberOfConfetti = 100;  // Define quantos festões aparecerão
    const colors = ['#FF6347', '#FFD700', '#98FB98', '#87CEEB', '#DDA0DD']; // Cores dos festões

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Definir posição inicial aleatória
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Animação de explosão
        document.body.appendChild(confetti);

        // Remover o festão após a animação
        setTimeout(() => {
            confetti.remove();
        }, 2500);
    }
}

// Chama a função para explodir festões assim que o site carregar
window.onload = explodeConfetti;

// Função para tocar o vídeo quando o botão for clicado
document.getElementById("playButton").addEventListener("click", function () {
    var video = document.getElementById("musica-video");
    var src = video.src;
    video.src = src + "?autoplay=1"; // A opção ?autoplay=1 vai fazer o vídeo tocar automaticamente
});

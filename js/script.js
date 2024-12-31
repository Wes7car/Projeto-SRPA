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

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("responsive");
}

const lyricsData = {
    'Cobertor': `
    <h4>(Gabi Luthai)</h4>
        <p>Eu sei que o tempo pode afastar a gente</p>
        <p>Mas se o tempo afastar a gente</p>
        <p>É porque o nosso amor é fraco demais</p>
        <p>E amores fracos não merecem o meu tempo, não mais</p>
        <br>
        <p>Simplesmente eu sei que tudo que foi</p>
        <p>Importante pra mim</p>
        <p>Da minha vida se foi</p>
        <p>Então me fez ser assim</p>
        <p>Dentro dessa armadura, nessa vida dura</p>
        <p>Não sou Indiana Jones</p>
        <p>Então, sem aventura</p>
        <br>
        <p>Porque só tinha conhecido gente louca</p>
        <p>Tinha medo de um: Eu te amo</p>
        <p>Sair da minha boca</p>
        <p>Até que um dia ele saiu</p>
        <p>Eu gelei, te olhei</p>
        <p>Você disse: Eu também; e sorriu</p>
        <br>
        <p>Maluco o suficiente pra gostar de mim</p>
        <p>Corajoso o suficiente pra ir até o fim</p>
        <p>Se eu tivesse te desenhado e te encomendado</p>
        <p>Teria feito exatamente assim</p>
        <br>
        <h4>(Refrão)</h4>
        <p>Ele me disse: Vai</p>
        <p>Eu disse: Já vou</p>
        <p>Ele me disse: Volta</p>
        <p>Eu disse: Ôoo</p>
        <p>Ai que saudade de você</p>
        <p>Debaixo do meu cobertor</p>
        <p>Ai que saudade de você</p>
        <p>Debaixo do meu cobertor</p>
        <br>
        <h4>(Whinderson Nunes)</h4>
        <p>Eu sei que sobre nós</p>
        <p>Tudo é sempre complicado</p>
        <p>Mas um dia vai se descomplicar, pode acreditar</p>
        <p>Te dei meu coração, você cuidou tão bem</p>
        <p>Que agora quero entregar meu corpo pra você também</p>
        <br>
        <p>Vem, me diz se eu tô errado, mina</p>
        <p>Mas algo me diz que a nossa vibe combina</p>
        <p>Eu tava ali, procurando o meu rumo pra seguir</p>
        <p>Que bom quando eu te vi, tava tudo tão chato por aqui</p>
        <br>
        <p>Eterno nada é, posso dizer</p>
        <p>Mas eu vou fazer o possível pro nosso amor ser</p>
        <p>Um dia a gente vai se ver bem velhinho pelo espelho</p>
        <p>E eu cantando outra música pra você</p>
        <br>
        <p>Pois quando a gente se entrega pra vida</p>
        <p>A vida só nos devolve coisas boas</p>
        <p>E ela me deu você</p>
        <p>E eu vi nessa corrida que você é só você</p>
        <p>E pessoas são pessoas</p>
        <br>
        <h4>(Refrão)</h4>
        <p>Ele me disse: Vai</p>
        <p>Eu disse: Já vou</p>
        <p>Ele me disse: Volta</p>
        <p>Eu disse: Ôoo</p>
        <p>Ai que saudade de você</p>
        <p>Debaixo do meu cobertor</p>
        <p>Ai que saudade de você</p>
        <p>Debaixo do meu cobertor</p>
        <br>
        <p>Eu sei que o tempo pode afastar a gente</p>
        <p>Mas se o tempo afastar a gente</p>
        <p>É porque o nosso amor é fraco demais</p>
        <p>E amores fracos não merecem o meu tempo</p>`,
    'Música 2': `
        <p>Letra da música 2...</p>
        <p>Frase 2 da música...</p>`,
    'Música 3': `
        <p>Letra da música 3...</p>
        <p>Frase 2 da música 3...</p>`
};

function showMusic(videoFile, musicTitle) {
    // Muda o vídeo
    const video = document.getElementById('music-video');
    video.src = `videos/${videoFile}`;
    video.play();

    // Muda o título e a letra
    document.getElementById('music-title').innerText = `Letra da Música: ${musicTitle}`;
    document.getElementById('lyrics').innerHTML = lyricsData[musicTitle] || '<p>Letra não disponível</p>';
}


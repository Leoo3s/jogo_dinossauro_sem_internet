const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyup(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump(); 
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        //Quando chegar em 150 px stop
        if (position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
        } else {
            position -= 20;
            dino.style.bottom = position + 'px';
        }
     }, 20);
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 5000;

    
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px';

    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0  && cactusPosition < 50 && position < 60) {
            //Game Over

        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1> <h1 class="repeat"> O jogo irá reiniciar</h1>';
        setTimeout(() => {
            location.reload(); 
        }, 1000);
        
        }
        else{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        }
    }, 25 );

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyup);
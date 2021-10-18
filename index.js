const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let position = 0;
let isJumping = false;

const handleKeyUp = (event) => {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();   
        }
    }
};
 
const jump = () => {

    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 40;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 40;
            dino.style.bottom = position + "px";
        }
    }, 20);
};

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"><strong>GAME OVER</strong></h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 40);

    setTimeout(createCactus, randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);
};

createCactus();
document.addEventListener('keyup', handleKeyUp);
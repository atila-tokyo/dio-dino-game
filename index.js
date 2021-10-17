const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

let isJumping = false;

const handleKeyUp = (event) => {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();   
        }
    }
};
 
const jump = () => {
    let position = 0;

    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

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
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
};

const createCactus = () => {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    background.appendChild(cactus);
};
document.addEventListener('keyup', handleKeyUp);
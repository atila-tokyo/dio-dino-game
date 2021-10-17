const dino = document.getElementsByClassName("dino");
const handleKeyUp = (event) => {
    event.keyCode === 32 ? console.log("pressed space") : console.log("else")
};
document.addEventListener('keyup', handleKeyUp);
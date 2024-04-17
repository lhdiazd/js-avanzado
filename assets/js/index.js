import { animals } from './animalsData.js';

const audioElement = document.getElementById("player");


document.getElementById("btnRugir").addEventListener("click", () => {
    audioElement.play();
});


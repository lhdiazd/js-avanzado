import { animals } from './animalsData.js';
import { Leon } from './leon.js';

const audioElement = document.getElementById("player");
let l1 = new Leon("leon", 50, "img", "comentario", "assets/sounds/Aullido.mp3");



document.getElementById("btnRugir").addEventListener("click", () => {
    l1.rugir(audioElement, l1.sonido);
});


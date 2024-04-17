
import { Animal } from './animal.js';

export default class Leon extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(audioElement, rutaSonido) {
        const audioElement = document.getElementById(audioElement);
        audioElement.src = rutaSonido;
        audioElement.play();
    }

}
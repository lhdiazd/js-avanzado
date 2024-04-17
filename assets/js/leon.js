
import { Animal } from './animal.js';

export class Leon extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(audioElement, rutaSonido) {        
        audioElement.src = rutaSonido;
        audioElement.play();
        console.log("hola");
    }

}
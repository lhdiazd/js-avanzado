import { Animal } from './animal.js';


export class Lobo extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {        
        const audioElement = document.getElementById("player");
        audioElement.src = this.sonido;
        audioElement.currentTime = 0;
        audioElement.play();        
    }

    playSound(){
        this.aullar();
    }

    

}
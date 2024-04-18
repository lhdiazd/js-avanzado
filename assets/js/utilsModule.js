import { Aguila } from './aguila.js';
import { Leon } from './leon.js';
import { Lobo } from './lobo.js';
import { Oso } from './oso.js';
import { Serpiente } from './serpiente.js';

export function createAnimal(animalType, name, age, img, comments, sound) {

    let animal;

    switch (animalType) {
        case "Leon":
            animal = new Leon(name, age, img, comments, sound);
            break;
        case "Lobo":
            animal = new Lobo(name, age, img, comments, sound);
            break;
        case "Oso":
            animal = new Oso(name, age, img, comments, sound);
            break;
        case "Serpiente":
            animal = new Serpiente(name, age, img, comments, sound);
            break;
        case "Aguila":
            animal = new Aguila(name, age, img, comments, sound);
            break;
        default:
            throw new Error("Tipo de animal no reconocido");
    }

    return animal;
}


export function searchAnimal(name, animalsList) {
    const animal = animalsList.find(animal => animal.name.toLowerCase() === name.toLowerCase());

    if (!animal) {
        throw new Error(`No se encontró ningún animal con el nombre "${name}".`);
    }

    return animal;
}

export function addAnimal(animal) {
    const animalsContainer = document.getElementById("Animales");
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const modalImg = document.getElementById("modalImg");
    const modalAge = document.getElementById("modalAge");
    const modalComments = document.getElementById("modalComments");
    const animalDiv = document.createElement("div");
    const animalImg = document.createElement("img");
    const soundButton = document.createElement("button");
    const iconButton = document.createElement("img");

    animalDiv.classList.add("animal-div");

    animalImg.src = animal.img;
    animalImg.classList.add("animal-img");
    animalImg.addEventListener('click', () => {
        modalImg.src = animal.img;
        modalAge.textContent = animal.edad;
        modalComments.textContent = animal.comentarios;
        modal.show();
    });

    iconButton.src = "../../assets/imgs/audio.svg";
    iconButton.classList.add("icon-button");

    soundButton.classList.add("btn-secondary", "sound-button");
    soundButton.appendChild(iconButton);
    soundButton.addEventListener("click", () => {
        animal.playSound();
    });

    animalDiv.appendChild(animalImg);
    animalDiv.appendChild(soundButton);
    animalsContainer.appendChild(animalDiv);

}
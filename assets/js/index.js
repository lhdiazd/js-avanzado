import { Leon } from './leon.js';
import { AnimalsDataModule } from './animalsDataModule.js';

document.addEventListener('DOMContentLoaded', () => {

    const animalSelect = document.getElementById("animal");
    const ageSelect = document.getElementById("edad");
    const commentsTextarea = document.getElementById("comentarios");
    const registerButton = document.getElementById("btnRegistrar");
    const animalImg = document.getElementById("animalImg");
    const baseImgURL = '../../assets/imgs/';
    let animalsData = [];

    (async () => {
        try {
            const data = await AnimalsDataModule();
            animalsData = [...data.animales];

        } catch (error) {
            console.error('Error:', error.message);
        }
    })();


    registerButton.addEventListener('click', () => {

        let selectedAnimalIndex = animalSelect.selectedIndex;
        let selectedAgeIndex = ageSelect.selectedIndex;
        let commentsValue = commentsTextarea.value.trim();
        let animal;

        if (selectedAnimalIndex !== 0 && selectedAgeIndex !== 0 && commentsValue !== '') {

            let animalType = animalSelect.value;
            let animalSelected;

            switch (animalType) {
                case "Leon":
                    animalSelected = animalsData[0];
                    animal = new Leon(animalSelected.name, ageSelect.value, animalSelected.imagen, commentsValue, animalSelected.sonido);
                    animalImg.src = `${baseImgURL}${animalSelected.imagen}`;
                    break;
                default:
                    alert("Tipo de animal no reconocido");
                    break;
            }

            console.log(animal);


        } else {
            alert("Ingrese todos los campos del registro");
        }


    });





});


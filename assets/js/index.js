import { AnimalsDataModule } from './animalsDataModule.js';
import { createAnimal, searchAnimal, addAnimal } from './utilsModule.js';


document.addEventListener('DOMContentLoaded', () => {

    const animalSelect = document.getElementById("animal");
    const ageSelect = document.getElementById("edad");
    const commentsTextarea = document.getElementById("comentarios");
    const registerButton = document.getElementById("btnRegistrar");
    const previewDiv = document.getElementById("preview");
    const baseImgURL = './assets/imgs/';
    const baseSoundURL = '../../assets/sounds/';
    let animalType;
    let animalSelected;
    let selectedAnimalIndex;
    let selectedAgeIndex;
    let commentsValue;
    let animal;
    let animalsData = [];

    (async () => {
        try {
            const data = await AnimalsDataModule();
            animalsData = [...data.animales];

        } catch (error) {
            console.error('Error:', error.message);
        }
    })();

    const resetForm = () => {
        animalSelect.selectedIndex = 0;
        ageSelect.selectedIndex = 0;
        commentsTextarea.value = '';
        previewDiv.style.backgroundImage = `url('${baseImgURL}/lion.svg')`;
    }


    animalSelect.addEventListener('change', () => {

        selectedAnimalIndex = animalSelect.selectedIndex;

        if (selectedAnimalIndex !== 0) {
            try{
                animalType = animalSelect.value;
                animalSelected = searchAnimal(animalType, animalsData);
                previewDiv.style.backgroundImage = `url('${baseImgURL}${animalSelected.imagen}')`;
            } catch(error){
                alert(error.message);
            }                
        }
    })


    registerButton.addEventListener('click', () => {

        selectedAnimalIndex = animalSelect.selectedIndex;
        selectedAgeIndex = ageSelect.selectedIndex;
        commentsValue = commentsTextarea.value.trim();

        if (selectedAnimalIndex !== 0 && selectedAgeIndex !== 0 && commentsValue !== '') {
            try {
                animalType = animalSelect.value;
                animalSelected = searchAnimal(animalType, animalsData);
                let name = animalSelected.name;
                let age = ageSelect.value;
                let img = `${baseImgURL}${animalSelected.imagen}`;
                let comments = commentsValue;
                let sound = `${baseSoundURL}${animalSelected.sonido}`;

                animal = createAnimal(animalType, name, age, img, comments, sound);
                addAnimal(animal);

                resetForm();

            } catch (error) {
                alert(error.message);
            }

        } else {
            alert("Ingrese todos los campos del registro");
        }
    });
});


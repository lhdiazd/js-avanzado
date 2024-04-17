export async function AnimalsDataModule() {
    try {
        const response = await fetch('../../animales.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de los animales');
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        
    }
}
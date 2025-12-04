"use strict";
// Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62371 millas )
// Ejemplo: 10 kilómetros = 6.21371 millas
const KM_TO_MILE_FACTOR = 0.621371;
function convertKMtoMI(km) {
    if (km <= 0) {
        return 'Tienes que poner un número positivo';
    }
    const miles = km * KM_TO_MILE_FACTOR;
    return `${km} kilómetros es igual a ${miles.toFixed(1)} millas`;
}
// ✅ Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Accionar con el formulario
    const form = document.getElementById('conversionForm');
    // Accionar con el botón que tiene submit
    form.addEventListener('submit', function (event) {
        // ✅ Prevenimos el comportamiento por defecto del formulario
        event.preventDefault();
        // Capturar el dato de kilometros --> const km para parsearlo
        const kmInput = document.getElementById('kmInput');
        // Parsear el dato "número" de kmInput --> que pasa a la función convertKMtoMI()
        const km = parseFloat(kmInput.value);
        // Capturar el campo donde devolvera el resultado
        const resultOutput = document.getElementById('resultOutput');
        // Recibe la respuesta de convertKMtoMI()
        resultOutput.textContent = convertKMtoMI(km);
    });
});
// convertKMtoMI(10);
//# sourceMappingURL=km-to-miles.js.map
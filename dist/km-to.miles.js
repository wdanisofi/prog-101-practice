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
    const form = document.getElementById('conversionForm');
    form.addEventListener('submit', function (event) {
        // ✅ Prevenimos el comportamiento por defecto del formulario
        event.preventDefault();
        const kmInput = document.getElementById('kmInput');
        const resultOutput = document.getElementById('resultOutput');
        const km = parseFloat(kmInput.value);
        resultOutput.textContent = convertKMtoMI(km);
    });
});
// convertKMtoMI(10);
//# sourceMappingURL=km-to.miles.js.map
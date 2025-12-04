"use strict";
function areaCalculation(base, height) {
    if (base <= 0 || height <= 0) {
        return 'Tienes que poner un número positivo';
    }
    const area = (base * height) / 2;
    return `El área del triángulo rectángulo es ${area}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculatorForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const baseInput = document.getElementById('baseInput');
        const heightInput = document.getElementById('heightInput');
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);
        const resultOutput = document.getElementById('resultOutput');
        resultOutput.textContent = areaCalculation(base, height);
    });
});
//# sourceMappingURL=area-triangle-calculator.js.map
function areaCalculation(base: number, height: number) {
  if (base <= 0 || height <= 0) {
    return 'Tienes que poner un número positivo';
  }
  const area: number = (base * height) / 2;
  return `El área del triángulo rectángulo es ${area}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calculatorForm') as HTMLFormElement;
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const baseInput = document.getElementById('baseInput') as HTMLInputElement;

    const heightInput = document.getElementById(
      'heightInput'
    ) as HTMLInputElement;

    const base: number = parseFloat(baseInput.value);

    const height: number = parseFloat(heightInput.value);

    const resultOutput = document.getElementById(
      'resultOutput'
    ) as HTMLDivElement;

    resultOutput.textContent = areaCalculation(base, height);
  });
});

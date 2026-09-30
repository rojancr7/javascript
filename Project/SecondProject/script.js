const form = document.querySelector('#bmiform');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `<span class="error">Please enter a valid height</span>`;
    return;
  }

  // Validate weight
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `<span class="error">Please enter a valid weight</span>`;
    return;
  }

  // BMI = weight (kg) / (height in meters)²
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  console.log(bmi);

  // Determine category
  let category = '';
  let cls = '';

  if (bmi < 18.6) {
    category = 'Under Weight';
    cls = 'under';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
    cls = 'normal';
  } else {
    category = 'Over Weight';
    cls = 'over';
  }

  results.innerHTML = `
    <span class="bmi-value">${bmi}</span>
    <span class="category ${cls}">${category}</span>
    
 ` ;
});
const heightInput = document.querySelector(".heightInput")
const weightInput = document.querySelector(".weightInput")
const buttonCalculate = document.querySelector(".calculate")
const div = document.querySelector(".bmiCalcContainer")
const info = document.querySelector(".info")
buttonCalculate.addEventListener('click', _=> {
    if (!heightInput.value && !weightInput.value) {
        info.textContent = `Enter height and weight`;
        return;
    } else if (!heightInput.value){
        info.textContent = `Enter height`;
        return;
    } else if (!weightInput.value) {
        info.textContent = `Enter weight`;
        return;
    } else {
        calculateBmi();
    }
   
})
 
// console.log(parseInt(weightInput.textContent))
 
let bmi = 0;
 
function calculateBmi() {
    if (heightInput.value <= 0 || weightInput.value <= 0) {
        info.textContent = `Please write correct values`;
        return;
    }
 
    let height = (heightInput.value / 100);
    bmi = parseFloat(weightInput.value) / (parseFloat(height) * parseFloat(height));
    // info.textContent = parseFloat(bmi).toFixed(2);
    if (bmi < 18.5) {
        info.textContent = `BMI: ${parseFloat(bmi).toFixed(2)}: Underweight`;
    } else if (bmi >= 18.5 && bmi < 25) {
        info.textContent = `BMI: ${parseFloat(bmi).toFixed(2)}: Normal`;
    } else if (bmi >= 25 && bmi < 30) {
        info.textContent = `BMI: ${parseFloat(bmi).toFixed(2)}: Overweight`;
    } else if (bmi >= 30 && bmi < 40) {
        info.textContent = `BMI: ${parseFloat(bmi).toFixed(2)}: Obese`;
    } else {
        info.textContent = `BMI: ${parseFloat(bmi).toFixed(2)}: Severely obese`;
    }
 
    const buttonReset = document.createElement('button');
    const buttonText = document.createTextNode("Reset");
    buttonReset.className = "resetBtn";
    buttonReset.appendChild(buttonText);
    div.appendChild(buttonReset);
    buttonReset.addEventListener('click', _=> {
        weightInput.value = '';
        heightInput.value = '';
        buttonReset.remove();
    })
}
 
 
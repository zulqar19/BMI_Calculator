let height =  document.getElementById('height');
let weight = document.getElementById('weight');
let output = document.getElementById('output');
let bmiNumber = document.getElementById('bmi-number');



let button = document.getElementById('btn').addEventListener('click' , calculateBmi)


function calculateBmi() {
    if (height.value == "") {
        console.log(height.value);
        output.innerHTML = "Please pass the valid height in cm"
    }else if (weight.value == "") {
        console.log(weight.value);
        output.innerHTML = "Please pass the valid weight in cm"
    }else{
        let bmi =(weight.value)/((height.value/100)*(height.value/100));
        bmiNumber.innerHTML = bmi.toFixed(2);
        console.log(bmiNumber);
    }

    if (bmiNumber.innerHTML<18.5) {
        output.innerHTML = "UnderWeight"
    }else if (bmiNumber.innerHTML>=18.5 && bmiNumber.innerHTML<=24.9) {
        output.innerHTML = "Healthy"
    }else if (bmiNumber.innerHTML > 24.9) {
        output.innerHTML = "Overweight"
    }
}
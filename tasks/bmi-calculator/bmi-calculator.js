document.addEventListener("DOMContentLoaded", function () {
    const continueButton = document.getElementById("continue-button");
    let gender;

    continueButton.addEventListener("click", function () {
        getGender();
        if (gender) {
            localStorage.setItem("gender",gender);
            window.location.href = "ui-components/modal/result-modal.html";
        }
    });

    function getGender() {
        if (document.getElementById("male").checked) {
            gender = document.getElementById("male").value;
        } else if (document.getElementById("female").checked) {
            gender = document.getElementById("female").value;
        } else {
            alert("Please Select Your Gender!");
            gender = null;
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let weight = parseInt(document.getElementById("weight").textContent);
    let age = parseInt(document.getElementById("age").textContent);
    let height = parseInt(document.getElementById("height").textContent);
    const weightElement = document.getElementById("weight");
    const ageElement = document.getElementById("age");
    const heightElement = document.getElementById("height");
    const decreaseWeightButton = document.getElementById("decrease-weight");
    const increaseWeightButton = document.getElementById("increase-weight");
    const decreaseAgeButton = document.getElementById("decrease-age");
    const increaseAgeButton = document.getElementById("increase-age");
    const decreaseHeightButton = document.getElementById("decrease-height");
    const increaseHeightButton = document.getElementById("increase-height");
    const gender=localStorage.getItem("gender");
    if(gender){
        document.getElementById("gender-paragraph").innerHTML="Gender: "+gender;
    }

    function updateValue(measurement, incrementOrDecrement, variableName) {
        let currentValue = parseInt(measurement.textContent);
        currentValue += incrementOrDecrement;
        measurement.textContent = currentValue;
        switch (variableName) {
            case 'weight':
                weight = currentValue;
                break;
            case 'age':
                age = currentValue;
                break;
            case 'height':
                height = currentValue;
                break;
        }
        document.getElementById("weight-paragraph").innerHTML = "Weight: " + weight;
        document.getElementById("height-paragraph").innerHTML = "Height: " + height;
        document.getElementById("age-paragraph").innerHTML = "Age: " + age;
    }

    decreaseWeightButton.addEventListener("click", function () {
        updateValue(weightElement, -1, 'weight');
    });

    increaseWeightButton.addEventListener("click", function () {
        updateValue(weightElement, 1, 'weight');
    });

    decreaseAgeButton.addEventListener("click", function () {
        updateValue(ageElement, -1, 'age');
    });

    increaseAgeButton.addEventListener("click", function () {
        updateValue(ageElement, 1, 'age');
    });

    decreaseHeightButton.addEventListener("click", function () {
        updateValue(heightElement, -1, 'height');
    });

    increaseHeightButton.addEventListener("click", function () {
        updateValue(heightElement, 1, 'height');
    });

    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", function () {
        const bmi = calculateBMI(weight, height);
        const status = healthStatus(bmi); 
        document.getElementById('bmiDialog').showModal();
    });

    function healthStatus(bmi) {
        let status;
        if (bmi <= 18.4) {
            status= "Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            status="Normal";
        }
        else if (bmi >= 25 && bmi <= 39.9) {
            status= "Overweight";
        }
        else {
            status="Obese";
        }
        document.getElementById("status").innerHTML=status;
        return status;
    }

    function calculateBMI(weight, height) {
        const heightInMeters = height / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        bmi=bmi.toFixed(2);
        document.getElementById("bmi-value").innerHTML=bmi;
        return bmi;
    }

    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', () => {
        document.getElementById('bmiDialog').close();
    });
});
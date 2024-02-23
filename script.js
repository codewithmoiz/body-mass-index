var btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    var heightInput = document.querySelector("#height").value;
    var weightInput = document.querySelector("#weight").value;
    var result = document.querySelector(".card-title");
    var text = document.querySelector(".card-text");

    if (!isNaN(heightInput) && !isNaN(weightInput) && heightInput > 0 && weightInput > 0) {
        var height = heightInput;
        var weight = weightInput;

        if (heightInput > 300) {
            height = heightInput / 100;
        }

        if (weightInput > 500) {
            weight = weightInput * 0.453592;
        }

        var bmi = weight / (height * height);
        result.textContent = bmi.toFixed(2);

        if (bmi < 19) {
            text.textContent = "Underweight";
        } else if (bmi >= 19 && bmi <= 25) {
            text.textContent = "Healthy weight";
        } else {
            text.textContent = "Overweight";
        }
    } else {
        result.textContent = "N/A";
        text.textContent = "Please provide valid height and weight";
    }
});

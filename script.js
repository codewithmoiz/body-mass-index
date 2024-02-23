var btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    var heightFeet = document.querySelector("#height").value;
    var weightInput = document.querySelector("#weight").value;
    var result = document.querySelector(".card-title");
    var text = document.querySelector(".card-text");

    if (!isNaN(heightFeet) && !isNaN(weightInput) && heightFeet > 0 && weightInput > 0) {
        var heightMeters = heightFeet * 0.3048;

        var weight = weightInput;

        var bmi = weight / (heightMeters * heightMeters);
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
        text.textContent = "Please provide valid height in feet and weight";
    }
});

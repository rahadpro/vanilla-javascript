document.addEventListener("DOMContentLoaded", function () {
  // DOM Element Selectors
  var height = document.querySelector(".height") as HTMLInputElement;
  var weight = document.querySelector(".weight") as HTMLInputElement;
  var calculateBtn = document.querySelector(
    ".calculate-btn"
  ) as HTMLButtonElement;
  var resultInput = document.querySelector(".bmi-number") as HTMLInputElement;
  var resultDOM = document.querySelector(".result") as HTMLParagraphElement;

  // Function: Calculate BMI
  function calculateBMI(
    heightCm: number,
    weightKg: number
  ): {
    bmi: string;
    condition: string;
  } {
    var heightM = heightCm / 100;
    var bmi = weightKg / (heightM * heightM);

    var condition: string;

    // switch (true) {
    //   case bmi < 18.5:
    //     condition = "Underweight";
    //     break;
    //   case bmi >= 18.5 && bmi <= 24.9:
    //     condition = "Normal weight";
    //     break;
    //   case bmi >= 25 && bmi <= 29.9:
    //     condition = "Overweight";
    //     break;
    //   default:
    //     condition = "Obesity";
    //     break;
    // }

    if (bmi < 18.5) {
      condition = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      condition = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      condition = "Overweight";
    } else {
      condition = "Obesity";
    }

    return {
      bmi: bmi.toFixed(2),
      condition,
    };
  }

  // Function: Handle BMI Calcuation
  function handleBMICalculation() {
    var heightValue: number = parseFloat(height.value);
    var weightValue: number = parseFloat(weight.value);
    if (
      isNaN(heightValue) ||
      isNaN(weightValue) ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      resultDOM.innerHTML = "Please enter valid height (cm) and weight (kg).";
      resultInput.classList.add("d-none");
    } else {
      var bmiResult = calculateBMI(heightValue, weightValue);
      resultDOM.innerHTML =
        "Your Weight condition is: <span>" + bmiResult.condition + "</span>";
      resultInput.value = bmiResult.bmi;
      resultInput.classList.remove("d-none");
    }
  }
  // Event: Trigger BMI calculation on button click
  calculateBtn.addEventListener("click", handleBMICalculation);
  // Event: Trigger BMI calculation when "Enter" key is pressed
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") handleBMICalculation();
  });
});

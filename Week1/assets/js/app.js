const adviceCard = document.getElementById("advice-card");
const adviceText = document.getElementById("advice-text");

/**
 *This is the main function made so i can use guard clauses
 */
function program() {
  const username = prompt("Please enter your name");
  const age = prompt("Please enter your age");

  document.getElementById("username").innerHTML = username;
  document.getElementById("age").innerHTML = age;

  if (age < 18) {
    adviceCard.classList.add("has-background-grey-light");
    adviceText.innerHTML = "Sorry " + username + ", you are not old enough to get a proper advice from us";
    return;
  }

  const height = prompt("Please enter your height (in m, ie. 1.96)");
  const weight = prompt("Please enter your weight (in kg, ie. 89.3)");

  document.getElementById("height").innerHTML = height;
  document.getElementById("weight").innerHTML = weight;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);

  console.log(bmi);

  if (bmi < 18.5) {
    adviceText.innerHTML = "Your BMI: " + bmi + "<br/> You are under weight <br> Start with a personal trainer";
    adviceCard.classList.add("has-background-warning");
  } else if (bmi < 25) {
    adviceText.innerHTML = "Your BMI: " + bmi + "<br/> You are normal weight <br> Start with any programme";
    adviceCard.classList.add("has-background-success");
  } else if (bmi < 30) {
    adviceText.innerHTML = "Your BMI: " + bmi + "<br/> You are slightly over weight <br> Start with cardio training";
    adviceCard.classList.add("has-background-warning");
  } else {
    adviceText.innerHTML = "Your BMI: " + bmi + "<br/> You are obese <br> Start with a personal trainer";
    adviceCard.classList.add("has-background-danger");
  }
}

program();
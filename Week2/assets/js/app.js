// This array represents the weights of the 9 balls
const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
const ballList = document.getElementById("ball-list");

// Ask for the oddball (the ball that will be heavier) and make the corresponding 
// ball in the array heavier
// This way, the user input is not stored in any variable so you can't cheat this way
const selectedBall = prompt('Select the oddball [0-8]', 3);
ballArray[selectedBall] = 1.2;

console.log(ballArray);

for (i = 0; i < ballArray.length; i++) {
  const ballElement = document.createElement("div");
  ballElement.textContent = i;
  ballList.appendChild(ballElement);

  if (i == selectedBall) {
    ballElement.setAttribute("class", "ball column box m-4 has-background-primary");
  } else {
    ballElement.setAttribute("class", "ball column box m-4 has-background-primary-light");
  }
}

const left = ballArray[0] + ballArray[1] + ballArray[2];
const right = ballArray[3] + ballArray[4] + ballArray[5];

document.getElementById("left-1").innerHTML = "[0, 1, 2]";
document.getElementById("right-1").innerHTML = "[3, 4, 5]";

let ball;

if (left > right) {
  document.getElementById("result-1").innerHTML = "left is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [0, 1, 2]";

  const innerLeft = ballArray[0];
  const innerRight = ballArray[1];
  document.getElementById("left-2").innerHTML = "[0]";
  document.getElementById("right-2").innerHTML = "[1]";

  if (innerLeft > innerRight) {
    ball = 0;
    document.getElementById("result-2").innerHTML = "left is heavier";
  } else if (innerRight > innerLeft) {
    ball = 1;
    document.getElementById("result-2").innerHTML = "right is heavier";
  } else {
    ball = 2;
    document.getElementById("result-2").innerHTML = "balanced";
  }
} else if (right > left) {
  document.getElementById("result-1").innerHTML = "right is heavier";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [3, 4, 5]";

  const innerLeft = ballArray[3];
  const innerRight = ballArray[4];
  document.getElementById("left-2").innerHTML = "[3]";
  document.getElementById("right-2").innerHTML = "[4]";

  if (innerLeft > innerRight) {
    ball = 3;
    document.getElementById("result-2").innerHTML = "left is heavier";
  } else if (innerRight > innerLeft) {
    ball = 4;
    document.getElementById("result-2").innerHTML = "right is heavier";
  } else {
    ball = 5;
    document.getElementById("result-2").innerHTML = "balanced";
  }
} else {
  document.getElementById("result-1").innerHTML = "balanced";
  document.getElementById("conclusion-1").innerHTML = "oddball must be in [6, 7, 8]";

  const innerLeft = ballArray[6];
  const innerRight = ballArray[7];
  document.getElementById("left-2").innerHTML = "[6]";
  document.getElementById("right-2").innerHTML = "[7]";

  if (innerLeft > innerRight) {
    ball = 6;
    document.getElementById("result-2").innerHTML = "left is heavier";
  } else if (innerRight > innerLeft) {
    ball = 7;
    document.getElementById("result-2").innerHTML = "right is heavier";
  } else {
    ball = 8;
    document.getElementById("result-2").innerHTML = "balanced";
  }
}

const balls = document.querySelectorAll(".ball");
balls[ball].classList.add("has-border-primary-dark");

document.getElementById("conclusion-2").innerHTML = `[${ball}]`;

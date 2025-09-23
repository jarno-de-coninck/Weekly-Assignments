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
  ballElement.setAttribute("class", "ball column box m-4 has-background-primary-light");

  if (i == selectedBall) {
    ballElement.setAttribute("class", "ball column box m-4 has-background-primary has-border-primary-dark");
  }
}

const left = ballArray[1] + ballArray[2] + ballArray[3];
const right = ballArray[4] + ballArray[5] + ballArray[6];

if (left > right) {
  const innerLeft = ballArray[1];
  const innerRight = ballArray[2];

  if (innerLeft > innerRight) {
    console.log("The ball is 1");
  } else if (innerRight > innerLeft) {
    console.log("The ball is 2");
  } else {
    console.log("The ball is 3");
  }
} else if (right > left) {

} else {

}

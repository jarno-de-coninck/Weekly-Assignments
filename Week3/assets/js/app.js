/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

/**
 * The HTML element, the trophy list
 */
const trophyListElement = document.getElementById("trophies");

/**
 * The treshold needed to unlock every trophy
 */
const trophyThresholds = [10, 50, 100, 150, 250];

/**
 * Constant that defines the playfield for the monsters
 */
const playfield = document.getElementById("playfield");

/**
 * Variable that tracks the amount the user has clicked monsters
 */
let clicks = 0;

/**
 * Constant that defines the monsters within this game
 */
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];

window.addEventListener('load', onWindowLoad);

/**
 * Event handler callback for the window load event (when the DOM is ready).
 */
function onWindowLoad() {
  monsterImages.forEach(monster => {
    monsterElement = spawnMonster(monster);

    monsterElement.addEventListener("click", function() {
      monsterClicked(this);
    });
  });
}

/******************************************************************************
 * Helper functions section - below you will find some heper functions. You
 * can call these functions anywhere you like but NEVER CHANGE THEM.
 ******************************************************************************/
/**
 * a Helper function that returns a random integer number between and 
 * including the lower and upper limits
 * 
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}

/**
 * Returns the maximum possible value of the Left style attribute for a monster.
 * 
 * @returns a number representing the maximum possible value of the Left style 
 * attribute for a monster.
 */
function maxMonsterLeft() {
  return window.innerWidth - 265;
}

/**
 * This function handles clicks on the monster
 * 
 * @param {*} monsterElement 
 */
function monsterClicked(monsterElement) {
  clicks++;
  moveMonsterRandomly(monsterElement);
  checkForThrophies();
}

/**
 * Returns the maximum possible value of the Top style attribute for a monster.
 * 
 * @returns a number representing the maximum possible value of the Top style 
 * attribute for a monster.
 */
function maxMonsterTop() {
  return window.innerHeight - 250;
}

/**
 * Moves the monster to a random position on the screen
 * 
 * @param {*} monsterElement the html element of the monster
 */
function moveMonsterRandomly(monsterElement) {
  const randomLeftPosition = randomIntBetween(0, maxMonsterLeft());
  const randomTopPosition = randomIntBetween(0, maxMonsterTop());

  monsterElement.style.left = `${randomLeftPosition}px`;
  monsterElement.style.top = `${randomTopPosition}px`;
}

/**
 * Spawns the monster within a random place of the screen
 * 
 * @param {*} monsterImageSrc the image of the monster to spawn
 * @returns the HTML element of the monster
 */
function spawnMonster(monsterImageSrc) {
  const imageElement = document.createElement("img");
  imageElement.src = monsterImageSrc;
  imageElement.classList.add("playfield_item");
  playfield.appendChild(imageElement);

  moveMonsterRandomly(imageElement);
  return imageElement;
}

/**
 * Checks if clicks > then a trophythreshold, if so add trophy
 */
function checkForThrophies() {
  if (clicks >= trophyThresholds[0]) {
    const span = document.createElement("span");
    span.innerHTML = trophies[0];
    trophyListElement.appendChild(span);

    trophies.shift();
    trophyThresholds.shift();
  }
}
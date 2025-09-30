/******************************************************************************
 * Programming Basics Weekly Assignment - Clicker Game
 * ----------------------------------------------------------------------------
 * Instructions:
 * - This is the starter code for your project.
 * - You are required to complete the tasks as per the guidelines and 
 *   instructions provided.
 * 
 * Good luck!
 ******************************************************************************/
/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

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
  //TODO replace this TODO with code to initialize the application

}

// TODO replace this TODO with your own functions and other code


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
 * Use this function to relocate a monster properly.
 * 
 * @returns a number representing the maximum possible value of the Left style 
 * attribute for a monster.
 */
function maxMonsterLeft() {
  return window.innerWidth - 265;
}

/**
 * Returns the maximum possible value of the Top style attribute for a monster.
 * Use this function to relocate a monster properly.
 * 
 * @returns a number representing the maximum possible value of the Top style 
 * attribute for a monster.
 */
function maxMonsterTop() {
  return window.innerWidth - 250;
}

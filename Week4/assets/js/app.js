/******************************************************************************
 * Programming Basics Weekly Assignment - 80s Extravaganza
 * ----------------------------------------------------------------------------
 * Instructions:
 * - This is the starter code for your project.
 * - You are required to complete the tasks as per the guidelines and 
 *   instructions provided.
 * 
 * Good luck!
 ******************************************************************************/
// This is the dataset of quirky music videos that you are required to use in 
// this assignment. 
// For more details, see the `dataset.js` file
const database = quirkyVideoDatabaseObject;

const playlistElement = document.getElementById("playlist");
const totalAirtimeElement = document.getElementById("airtime");

const addButtonElement = document.getElementById("add-button");
const artistInputElement = document.getElementById("artist");
const titleInputElement = document.getElementById("title");
const durationInputElement = document.getElementById("duration");
const videoIdInputElement = document.getElementById("video-id");

window.addEventListener('load', onWindowLoad);

/**
 * Event handler callback for the window load event (when the DOM is ready).
 */
function onWindowLoad() {
  loadPlayList();
  addButtonElement.addEventListener("click", onAddButtonClick);
}

/**
 * Loads the videos and updates the playtime
 */
function loadPlayList() {
  playlistElement.innerHTML = "";
  let totalPlaytime = 0;

  quirkyVideoDatabaseObject.videos.sort((videoA, videoB) => videoA.title.localeCompare(videoB.title));
  
  quirkyVideoDatabaseObject.videos.forEach(element => {
    addVideoElementToPlayList(element);
    totalPlaytime += element.duration;
  });

  totalAirtimeElement.innerHTML = formatTotalPlaytime(totalPlaytime);
}

/**
 * adds a new video to the database when the add button is clicked. also resets the values
 */
function onAddButtonClick() {
  const videoId = videoIdInputElement.value;
  const artist = artistInputElement.value;
  const title = titleInputElement.value;
  const duration = durationInputElement.value;

  if (videoId.length != 11 || artist.length <= 3 || title.length <= 3 || isNaN(duration) || duration == 0) {
    return;
  }
  
  videoIdInputElement.value = "";
  artistInputElement.value = "";
  titleInputElement.value = "";
  durationInputElement.value = "";

  const videoObject = {videoId: videoId, duration: Number(duration), artist: artist, title: title};
  quirkyVideoDatabaseObject.videos.push(videoObject);
  loadPlayList();
}

/**
 * this function will format the total playtime to a string of the total playtime to hours, minutes and seconds
 * @param {*} totalPlayTime the total playtime of all the videos combined
 * @returns {string} formatted string of the total playtime to hours, minutes and seconds
 */
function formatTotalPlaytime(totalPlayTime) {
  const hours = Math.floor(totalPlayTime / 3600);
  const minutes = Math.floor(totalPlayTime % 3600 / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalPlayTime % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * this function will make an element for the video object and add it to the playlist
 * @param {*} video the video object to make an element for
 */
function addVideoElementToPlayList(video) {
  const videoId = video.videoId;
  const artist = video.artist;
  const title = video.title;
  const duration = video.duration;

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  const videoDuration = minutes + ":" + seconds.toString().padStart(2, "0");

  // The template of the videoBox thingy
  const articleHTML = document.createElement("article");
  articleHTML.className = "card m-2 p-2"
  articleHTML.innerHTML = `
      <div class="media">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="https://img.youtube.com/vi/${videoId}/0.jpg">
          </p>
        </div>
        <div class="media-content">
          <div class="content">
            <a href="https://youtu.be/${videoId}">
              <strong>${artist}</strong> ${title}
            </a>
          </div>
        </div>
        <div class="media-right">
          <span class="has-text-grey-light">${videoDuration}</span>
        </div>
      </div>
  `;
    
  playlistElement.appendChild(articleHTML);
}
// eslint-disable-next-line no-commented-code/no-commented-code
/**
 * Create a new HTML element with optional classes.
 *
 * @param {string} type - The tag name of the element (e.g. "div", "span").
 * @param {string} type - A class name or an array of class names.
 * @returns {HTMLElement} The newly created element.
 */
function newElement(type, classes) {
  const element = document.createElement(type);
  element.className = classes;

  return element;
}

window.addEventListener('load', function() {
  const shipList = document.getElementById('ships');

  /**
   * 
   * @param {string image} image - The image to display
   * @param {string} link - The link to HREF 
   * @param {string} text - Some additional text...
   */
  function renderCard(image, link, text) {
    const articleElement = newElement('article', 'card m-2 p-2');

    const mediaDiv = newElement('div', 'media');
    articleElement.appendChild(mediaDiv);

    const mediaLeftDiv = newElement('div', 'media-left');
    mediaDiv.appendChild(mediaLeftDiv);

    const paragraphElement = newElement('p', 'image is-64x64');
    mediaLeftDiv.appendChild(paragraphElement);

    const imageElement = document.createElement('img');
    paragraphElement.appendChild(imageElement);

    const mediaContentDiv = newElement('div', 'media-content');
    mediaDiv.appendChild(mediaContentDiv);

    const contentDiv = newElement('div', 'content');
    mediaContentDiv.appendChild(contentDiv);

    const linkElement = document.createElement('a');
    contentDiv.appendChild(linkElement);

    imageElement.src = image;
    linkElement.href = link;
    linkElement.innerHTML = text;

    shipList.appendChild(articleElement);
  }

  renderCard('assets/img/slave-i.jpg', 'https://starwars.fandom.com/wiki/Slave_I', 'Slave I');
  renderCard('assets/img/millenium-falcon.jpg', 'https://starwars.fandom.com/nl/wiki/Millennium_Falcon', 'Millennium Falcon');
  renderCard('assets/img/independence.jpg', 'https://starwars.fandom.com/nl/wiki/Independence', 'Independence');
  renderCard('assets/img/executor.jpg', 'https://starwars.fandom.com/nl/wiki/Executor', 'Executor');
});

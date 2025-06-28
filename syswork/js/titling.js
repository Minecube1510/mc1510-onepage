/* titilng.js */


/* Title - Index */
const titleIndex = document.getElementById("index-title");
const originIndex = titleIndex.textContent;
titleIndex.textContent = `Project Web - ${originIndex}`;
document.title = titleIndex.textContent;  // Sinkronkan juga ke tab browser
/* Title - Index */

/* Title - OnePage */
const titlePro = document.getElementById("onepage-title");
const originalPro = titlePro.textContent;
titlePro.textContent = `[OnePage] ${originalPro}`;
document.title = titlePro.textContent;  // Sinkronkan juga ke tab browser
/* Title - OnePage */

/* titilng.js */


/* Title Sys */
const titleMap = {
  "index-title": (el) => {
    const original = el.textContent;
    el.textContent = `Project Web - ${original}`;
    document.title = el.textContent;
  },
  "onepage-title": (el) => {
    const original = el.textContent;
    el.textContent = `[OnePage] ${original}`;
    document.title = el.textContent;
  }
};
/* Title Sys */


/* Title Work */
Object.keys(titleMap).forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    titleMap[id](el);
  }
});
/* Title Work */

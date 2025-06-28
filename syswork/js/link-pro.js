/* link-pro.js */


/* Linking */
const alLink = [
  {
    "label": "",
    "url": "compars-gosei-holoid/cgh-index.html"
  },
  {
    "label": "Coming Soon",
    "url": "cs/cs-index.html"
  },
  {
    "label": "Coming Soon",
    "url": "cs/cs-index.html"
  },
  {
    "label": "Coming Soon",
    "url": "cs/cs-index.html"
  },
  {
    "label": "Coming Soon",
    "url": "cs/cs-index.html"
  }
];
/* Linking */


/* Sistem */
  const container = document.getElementById("container");

  alLink.forEach((item, index) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.label || `Link ${index + 1}`;
    a.className = "linker";  // Tambahkan class CSS
    a.target = "_blank";  // Opsional: buka di tab baru
    container.appendChild(a);
  });
/* Sistem */


/* Uji Coba */
//console.log(alLink);
/* Uji Coba */

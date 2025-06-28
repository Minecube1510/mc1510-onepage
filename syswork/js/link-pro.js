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

  alLink.forEach((link, index) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = `Link ${index + 1}`;
    a.style.display = "block";
    a.className = "linker"; // Tambahkan class CSS

    // Tidak perlu lagi preventDefault atau event listener
    container.appendChild(a);
  });
/* Sistem */


/* Uji Coba */
//console.log(alLink);
/* Uji Coba */

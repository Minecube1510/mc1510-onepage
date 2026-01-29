/* link-pro.js */


/* Linking */
const alLink = [
  {
    "label": "My Comparation of Gosei Tribe and Holo-ID",
    "url": "compars-gosei-holoid/cgh-index.html"
  },
  {
    "label": "Moekyu Phone Cells",
    "url": "moekyu-phonecell-project/mpp-index.html"
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
    a.textContent = item.label;
    a.style.display = "block";
    a.className = "linker"; // Tambahkan class CSS

    // Tidak perlu lagi preventDefault atau event listener
    container.appendChild(a);
  });
/* Sistem */


/* Uji Coba */
//console.log(alLink);
/* Uji Coba */

/* link-pro.js */


/* Linking */
const alLink = [
    // [Comparation Gosei-HoloID]
    ('compars-gosei-holoid/cgh-index.html'),

    // [ComingSoon]
    ('cs/cs-index.html'),

    // [ComingSoon]
    ('cs/cs-index.html'),

    // [ComingSoon]
    ('cs/cs-index.html'),

    // [ComingSoon]
    ('cs/cs-index.html'),
]
/* Linking */


/* Sistem */
  const container = document.getElementById("container");

  alLink.forEach((link, index) => {
    const a = document.createElement("a");
    a.href = link;
    a.textContent = `Link ${index + 1}`;
    a.style.display = "block";
    a.addEventListener("click", function (e) {
      e.preventDefault(); // Biar nggak lompat
      console.log(`Link ${index + 1} ke ${link} diklik`);
    });
    container.appendChild(a);
  });
/* Sistem */


/* Uji Coba */
console.log(alLink);
/* Uji Coba */

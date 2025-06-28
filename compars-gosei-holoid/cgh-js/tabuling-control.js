/* tabuling-control.js */


/* Impor */
import { grupList } from './talents.js'
import { datalent } from './talents.js'
//
import { getReason } from './compare-reason.js'
//import JesonID from './talents.js'
/* Impor */


/* Uji Coba (Atas) */
//console.log (grupList);
/* Uji Coba (Atas) */


/* Sistem */
//
function hidingCard() {
  const card = document.getElementById("card-preview");
  const backdrop = document.getElementById("card-backdrop");

  if (!card || !backdrop) return;

  // Ganti animasi masuk dengan animasi keluar
  card.classList.remove("rising-card-in");
  card.classList.add("rising-card-out");

  // Setelah animasi selesai, hapus elemen
  setTimeout(() => {
    card.remove();
    backdrop.remove();
  }, 350); // Durasi harus sama dengan durasi animasi CSS
}
//
let currentLang = "id"; // atau "en" untuk default English
function showCardPreview({ src, nama, label, bascolor, grup, why, }) {
  // Hapus preview lama
  document.getElementById("card-preview")?.remove();
  document.getElementById("card-backdrop")?.remove();

  //console.log (grup);

  const temporer = (`
  https://static.wikia.nocookie.net/pvz-fusion/images/e/e1/Metal.png
  `);  // Linking gambar tabel sementara
  //
  const reasonText = getReason(currentLang, why);

  // Backdrop gelap
  const backdrop = document.createElement("div");
  backdrop.id = "card-backdrop";
  backdrop.style.position = "fixed";
  backdrop.style.top = "0";
  backdrop.style.left = "0";
  backdrop.style.width = "100vw";
  backdrop.style.height = "100vh";
  backdrop.style.background = "rgba(0,0,0,0.5)";
  backdrop.style.zIndex = "9998";
  backdrop.addEventListener("click", hidingCard);

  // Card kontainer
  const klos = "Close";
  const card = document.createElement("div");
  card.id = "card-preview";
  card.className = `card position-fixed p-3 ${bascolor}
  text-light rising-card-in`;  // Kelas bascolor sudah menangani background-color
  card.style.top = "50%";
  card.style.left = "50%";
  card.style.transform = "translate(-50%, -50%)";
  card.style.zIndex = "9999";
  card.style.width = "400px";
  card.style.height = "auto";
  card.style.borderRadius = "1.5%";

  // Ambil warna dari kelas untuk boxShadow
  const temp = document.createElement("div");
  temp.className = bascolor;
  temp.style.display = "none";
  document.body.appendChild(temp);
  const computedColor = getComputedStyle(temp).backgroundColor;
  temp.remove();
  card.style.boxShadow = `0 0 10px ${computedColor}`;  // Gunakan computedColor untuk boxShadow
  card.style.transition = "transform 0.3s ease-in-out";

  const goLink = (`
  https://virtualyoutuber.fandom.com/wiki/${nama.replace(/\s+/g, "_")}
  `);  // Linking gambar dalam kartu

  /* <img src="${src}" class="card-img-top mb-2" alt="${nama}" style="border-radius: 8px;"> */
  /* <img src="${temporer}" class="card-img-top mb-2" alt="${nama}" style="border-radius: 8px;"> */
  //
  card.innerHTML = (`
    <a href="${goLink}" class="user-select-none" draggable="false"
    target="_blank" rel="noopener noreferrer">
      <img src="${src}" alt="${nama}"
      class="card-img-top mt-4 mb-4 gocarding user-select-none"
      style="width: 250px; height: auto; border-radius: 8px;
      display: block; margin-left: auto; margin-right: auto;"
      draggable="false">
    </a>

    <div class="card-body p-2">
      <h2 class="card-title mb-1 text-center user-select-none" id="nama-card"
      style="cursor: pointer;"><b>
        ${nama}
      </b></h2>
      <p class="card-text mt-3 mb-3 user-select-none">
        <strong>
          Kelas:
        </strong> ${label}
        <br>
        <strong>
          Grup:
        </strong> ${grup}
      <p class="text-center card-text mb-2 user-select-none reason-text">
        "<i>${reasonText}</i>"
      </p>

      <button class="btn btn-sm btn-dark mt-3 w-100">
        <strong>${klos}</strong>
      </button>
    </div>
  `);

  // Tombolan
  const btn = card.querySelector("button");
  btn.addEventListener("click", hidingCard);

  const namaEl = card.querySelector("#nama-card");
  const reasonEl = card.querySelector(".reason-text"); // ini kita atur di bawah

  namaEl.addEventListener("click", () => {
    currentLang = currentLang === "id" ? "en" : "id";
    const updatedReason = getReason(currentLang, why);
    reasonEl.innerHTML = `"&nbsp;<i>${updatedReason}</i>"`;
  });

  // Tambahkan ke halaman
  document.body.appendChild(backdrop);
  document.body.appendChild(card);
}
/* Sistem */


/* Generater */
document.addEventListener("DOMContentLoaded", function () {
  const thead = document.getElementById("init-tabel");
  const tbody = document.getElementById("isi-tabel");

  renderTableHead(thead, grupList);
  renderTableBody(tbody, datalent);

  // Di bawah semua fungsi, sebelum closing tag script
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && document.getElementById("card-preview")) {
      hidingCard(); // Menutup modal kalau ESC ditekan
    }
  });
});

function renderTableHead(theadElement, grupList) {
  const trHead = document.createElement("tr");

  // Logo Kolom Awal
  const thLogo = document.createElement("th");
  thLogo.className = "text-center align-middle";
  const logoImg = document.createElement("img");
  logoImg.src = "https://logodix.com/logo/1975410.png";
  logoImg.alt = "Initting";
  logoImg.width = 100;
  logoImg.style.display = "block";
  logoImg.style.margin = "0 auto";
  logoImg.draggable = false;
  logoImg.style.userSelect = "none";
  thLogo.appendChild(logoImg);
  trHead.appendChild(thLogo);

  // Grup Headers
  grupList.forEach((grupItem) => {
    const th = document.createElement("th");
    th.className = "text-center align-middle";
    th.textContent = grupItem;
    th.style.fontWeight = "bold";
    th.style.fontSize = "1.5rem";
    th.style.userSelect = "none";
    th.style.pointerEvents = "auto";
    th.draggable = false;
    trHead.appendChild(th);
  });

  theadElement.appendChild(trHead);
}
//
function renderTableBody(tbodyElement, dataList) {
  dataList.forEach((item) => {
    const row = document.createElement("tr");

    const tdLabel = document.createElement("td");
    tdLabel.className = "text-center align-middle";

    const tdPict = document.createElement("img");
    tdPict.src = item.mark;
    tdPict.alt = "Mark Symboling...";
    tdPict.width = 125;
    tdPict.style.borderRadius = "6px";
    tdPict.style.userSelect = "none";
    tdPict.style.pointerEvents = "auto";
    tdPict.draggable = false;
    tdPict.style.display = "block";
    tdPict.style.margin = "0 auto";

    const labelSpan = document.createElement("div");
    labelSpan.textContent = item.label;
    labelSpan.style.fontWeight = "bold";
    labelSpan.style.fontSize = "1.2rem";
    labelSpan.style.color = "#000000";
    labelSpan.style.userSelect = "none";

    tdLabel.appendChild(tdPict);
    tdLabel.appendChild(labelSpan);
    row.appendChild(tdLabel);

    item.gambar.forEach(({ src, trimchar, bascolor, nama, grup, why, }) => {
      const td = document.createElement("td");
      td.className = "text-center align-middle";

      const wrapper = document.createElement("div");
      wrapper.className = "d-flex justify-content-center align-items-center";

      const span = document.createElement("span");
      span.className = `badge ${bascolor}`;

      const img = document.createElement("img");
      img.src = src;
      img.title = nama;
      img.alt = `Kelas ${item.label}`;
      img.width = 150;
      img.className = "butalent align-middle";
      img.style.borderRadius = "1%";
      img.style.userSelect = "none";
      img.style.pointerEvents = "auto";
      img.draggable = false;

      img.id = `tombol-${trimchar.toLowerCase().replace(/\s+/g, "")}`;
      img.addEventListener("click", () => {
        showCardPreview({ src, nama, label: item.label, bascolor, grup, why, });
      });

      span.appendChild(img);
      wrapper.appendChild(span);
      td.appendChild(wrapper);
      row.appendChild(td);
    });

    tbodyElement.appendChild(row);
  });
}
/* Generater */

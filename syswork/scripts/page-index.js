/*
 *
 * Name: "page-index.js"
 * Link: "syswork/scripts/page-index.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from
  "/mc1510-onepage/syswork/imports/variables.js";
  // "/syswork/imports/variables.js";
import * as jsFuncs from
  "/mc1510-onepage/syswork/imports/functings.js";
  // "/syswork/imports/functings.js";
//* * *//
import * as jsIdentic from
  "/mc1510-onepage/syswork/imports/identity.js";
  // "/syswork/imports/identity.js";
//* * *//
import { index_Data_Pl } from
  "./imports/data-index.js";
  //"./imports/data-index.js";
//


/* Display Pages List */
// Persiapan Listing per Halaman
function render_Html(htmlName) {
  const rootIndex = jsFuncs.jsLower("index");
  const fileHtml = jsFuncs.declareFile_Lower(htmlName, "html");
  //
  //console.log(fileHtml);
  //
  return jsFuncs.linkPathering_Lower([rootIndex, fileHtml]);
}
const content_Pl = jsFuncs.jsGetId("page-list");
// Hapus isi lama (opsional, kalau mau kosongin dulu)
content_Pl.innerHTML = jsVars.varOne.Blank;
/*
 *
 */
// Mengubah array menjadi link berikutnya
index_Data_Pl.forEach(([listText, listLink], listIndex) => {
  // Prepare
  const link_Pl = jsFuncs.jsCreatE("a");
  const text_Pl = jsFuncs.jsCreatE("span");
  const line_Pl = jsFuncs.jsCreatE("span");
  const hashLink = jsVars.varOne.HashT;
  //
  const isLastList = listIndex === index_Data_Pl.length - 1;
  const mb_Valter = isLastList ? 0 : 2;
  //
  text_Pl.textContent = listText;
  //
  // Classing - Main Link //
  link_Pl.className = jsFuncs.sentanClasser([(`group`),
    (`mb-${mb_Valter}`), (`index-page-list`),
  ]);
  // Classing - Link Line //
  line_Pl.className = jsFuncs.sentanClasser([
    (`link-list-line`),
  ]);
  // Classing - Link Text //
  text_Pl.className = jsFuncs.sentanClasser([
    (`link-list-text`),
  ]);
  //
  // Attributing Element(s) //
  link_Pl.href = (typeof
    (listLink) === ("string") ? (render_Html(listLink)) : (hashLink));
  link_Pl.draggable = (false);
  //
  // AppEnd //
  line_Pl.append();  // Kosong, isinya via CSS
  link_Pl.append(text_Pl, line_Pl);
  content_Pl.appendChild(link_Pl);
});


/* Uji Coba */
//


// !-! //

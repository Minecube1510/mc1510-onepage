/* compare-reason.js */


/* Imporan */
//import JesonID from '../page-comp/talents.js'
/* Imporan */


/* Sistem */
export const idnReason = [  // Indonesia
  /* Moona Hoshinova */
  ("Karena Moona bertema bulan, dan Bulan itu berada di langit. Berdasarkan lore-nya, dia adalah sang dewi bulan, dewi Hoshinova."),
  /* Pavolia Reine */
  ("Karena Reine adalah putri burung merak, dari kerajaan merak. Sihirnya pun angin."),
  /* Vestia Zeta */
  ("Karena Zeta adalah agent yang punya pistol. Pistol ada kaitannya dengan angin."),

  /* Airani Iofifteen */
  ("Karena ada satu kostum Iofi yang berkaitan dengan air, yakni dia punya kostum putri duyung."),
  /* Kureiji Ollie */
  ("Sebenernya Ollie gak punya pilihan lain. Tapi karena darah adalah memiliki air, bahkan darah berkaitan dengan kematian, maka pada akhirnya, Ollie pun diklasifikasikan begini."),
  /* Kobo Kanaeru */
  ("Karena Kobo adalah sang shaman hujan, udah pasti berurusan dengan air."),

  /* Ayunda Risu */
  ("Karena Risu adalah tupai. Dia bahkan tinggalnya di tempat alam yang dinamakan sebagai 'hutan ajaib', itu tuh rumahnya."),
  /* Anya Melfissa */
  ("Karena Anya adalah senjata Keris, yakni belati Asia Tenggara. Maka dia dibuat dari kayu dan logam."),
  /* Kaela Kovalskia */
  ("Karena Kaela adalah si Blacksmith. Selalu berurusan dengan material batu dan logam."),
];
//
export const engReason = [  // English
  /* Moona Hoshinova */
  ("Moona's default theme is the moon, and Moon is at the sky. Her lore is, she’s a moon goddess."),
  /* Pavolia Reine */
  ("Reine is a peacock princess from the Peacock Kingdom. Even her magic is 'wind'."),
  /* Vestia Zeta */
  ("Zeta is a secret agent, of course she's using a pistol. The pistols are related to air and wind."),

  /* Airani Iofifteen */
  ("One of Iofi’s costumes is related to water—she has a mermaid outfit."),
  /* Kureiji Ollie */
  ("Ollie didn’t really have another category. But since blood contains water and is tied to death, she ended up in this one."),
  /* Kobo Kanaeru */
  ("Because Kobo is the Rain Shaman—of course she’s connected to water."),

  /* Ayunda Risu */
  ("Risu is a squirrel, that she lives in a magical forest, her home too."),
  /* Anya Melfissa */
  ("Anya is a Kris, a Southeast Asian dagger. So she’s made from wood (for stuff) and metal (for blade)."),
  /* Kaela Kovalskia */
  ("Kaela is a blacksmith. She constantly works with stones and metals."),
];
// X
export const spkReason = [  // Bahasa Lain
  (''),
  (''),
  (''),
];
/* Sistem */


/* Ujicoba */
export const reasonSet = {
  id: idnReason,
  en: engReason,
  // contoh tambahan:
  // jp: jpReason,
  // de: deReason,
};
export function getReason(langCode, index) {
  const list = reasonSet[langCode];
  if (!list) return `⛔ Bahasa '${langCode}' belum tersedia.`;
  return list[index] || "⁉️ Alasan belum ditulis.";
}
//
//console.log (JesonID);
/* Ujicoba */

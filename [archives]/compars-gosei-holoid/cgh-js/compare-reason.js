/* compare-reason.js */


/* Imporan */
//import JesonID from '../page-comp/talents.js'
/* Imporan */


/* Sistem */
export const idnReason = [  // Indonesia
  /* Moona Hoshinova */
  "Karena Moona bertema bulan, dan Bulan itu berada di langit. Berdasarkan lore-nya, dia adalah sang dewi bulan, dewi Hoshinova.",
  /* Pavolia Reine */
  "Karena Reine adalah putri burung merak, dari kerajaan merak. Sihirnya pun angin.",
  /* Vestia Zeta */
  "Karena Zeta adalah agent yang punya pistol. Pistol ada kaitannya dengan angin.",

  /* Airani Iofifteen */
  "Karena ada satu kostum Iofi yang berkaitan dengan air, yakni dia punya kostum putri duyung.",
  /* Kureiji Ollie */
  "Ollie diklasifikasikan gini karena udah gak ada pilihan lain lagi. Maka begini aja, darah itu mengandung air, dan berkaitan dengan kematian, ya gitulah.",
  /* Kobo Kanaeru */
  "Karena Kobo adalah sang shaman hujan, udah pasti berurusan dengan air.",

  /* Ayunda Risu */
  "Karena Risu adalah tupai. Dia bahkan tinggalnya di tempat alam yang dinamakan sebagai 'hutan ajaib', itu tuh rumahnya.",
  /* Anya Melfissa */
  "Karena Anya adalah senjata Keris, yakni belati Asia Tenggara. Maka dia dibuat dari kayu dan logam.",
  /* Kaela Kovalskia */
  "Karena Kaela adalah si Pandai Besi (YANG IMUT). Selalu berurusan dengan material batu dan logam.",
];
//
export const engReason = [  // English
  /* Moona Hoshinova */
  "Moona's default theme is the Moon, and Moon is at the sky. Her lore is, she’s a moon goddess.",
  /* Pavolia Reine */
  "Reine is a Peacock Princess from the Peacock Kingdom. Even her magic is 'wind'.",
  /* Vestia Zeta */
  "Zeta is a (Cat) Secret Agent, of course she's using a pistol. The pistols are related to air and wind.",

  /* Airani Iofifteen */
  "One of Iofi’s costumes is related to water, that she has a mermaid outfit.",
  /* Kureiji Ollie */
  "Ollie is classified like this because there is no other choice. So it's like this, blood contains water, and is related to death, that's it.",
  /* Kobo Kanaeru */
  "Kobo is the Rain Shaman. of course she’s connected to water element.",

  /* Ayunda Risu */
  "Risu is a Magical Squirrel (she can be the Human), that she lives in a magical forest, her home too.",
  /* Anya Melfissa */
  "Anya is a Kris Weapon, a Southeast Asian dagger. So she’s made from wood (for stuff) and metal (for blade).",
  /* Kaela Kovalskia */
  "Kaela is a (CUTE) Blacksmith. She constantly works with stones and metals.",
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
  en: engReason,
  id: idnReason,
  // jp: jpReason,
  // de: deReason,
};
export function getReason(langCode, index) {
  const list = reasonSet[langCode];
  if (!(list)) return (`⛔ Bahasa '${langCode}' belum tersedia.`);
  return ((list[index]) || ("⁉️ Alasan belum ditulis."));
}
//
//console.log (JesonID);
/* Ujicoba */

/* talents.js */

export const chartal = [
  // [Skick] //
  ('Moona Hoshinova'), ('Pavolia Reine'), ('Vestia Zeta'),
  // [Skick] //
  //
  // [Seaick] //
  ('Airani Iofifteen'), ('Kureiji Ollie'), ('Kobo Kanaeru'),
  // [Seaick] //
  //
  // [Landick] //
  ('Ayunda Risu'), ('Anya Melfissa'), ('Kaela Kovalskia'),
  // [Landick] //
];
const grupID = [
  // [Gen-1] //
  ('Area15'),
  // [Gen-1] //
  //
  // [Gen-2] //
  ('Holoro'),
  // [Gen-2] //
  //
  // [Gen-3] //
  ('Holoh3ro'),
  // [Gen-3] //
]
//
function seleChar(a, b) {
  const selecter = (((a) - (1)) + (((b) - (1)) * (3)));
  const selechar = chartal[selecter];
  //
  return (selechar);
}

/* Linker */
/*
  "https://static.wikia.nocookie.net/pvz-fusion/images/e/e7/CherrizillaGallery1.png"
  "https://static.wikia.nocookie.net/virtualyoutuber/images/.png"

  "https://static.wikia.nocookie.net/virtualyoutuber/images"
  "https://static.wikia.nocookie.net/powerrangers/images/3/3a"
*/
const linkLiveImg = (
  "https://static.wikia.nocookie.net/virtualyoutuber/images"
);
/* Linker */

function linConnect(name, middle = "") {
  const namer = name.replace(/\s+/g, "_");
  const pngerLive = ("png").toLowerCase();
  //
  const pngLive = [
    (`${namer} - Icon`),
    (pngerLive)].join('.').replace(/\s+/g, "_");
  //
  const linkonek = `${linkLiveImg}/${middle}/${pngLive}`;
  return linkonek;
}


// Fungsi universal untuk memotong alias
export function trimAlias(alias, y = null, z = null) {
  const start = (typeof y === "number") ? y : 0;
  const end = (typeof z === "number") ? z : alias.length;
  return alias.slice(start, end);
}
// Dipakai di createGambar
function createGambar(a,b, ticket = (""), x,
                      y = (null),z = (null),
                      alasan) {
  const nama = seleChar(a, b);
  const named = nama.toLowerCase().split(" ").filter(Boolean);
  //
  const alias = named[x - 1] ?? "default";
  const trimchar = trimAlias(alias, y, z);
  const bascolor = (`bg-${trimchar.toLowerCase()}`);
  //
  const src = linConnect(nama, ticket);
  //
  const why = (`${alasan}`)

  //console.log (trimchar);
  //
  return { nama, alias, trimchar, bascolor, src, why, };
}
//.

function getMark(label) {
  const parts = [
    "https://raw.githubusercontent.com",
    "Minecube1510", "storage_ing",
    "main", "Asset-IMGs/Goseigers",
    `Gosei_Mark-${label}.png`
  ];

  return parts.join('/');
}
//
//.

//.
//
const JesonID = [
  {
    grup: [
      (grupID[(1)-(1)]),
      (grupID[(2)-(1)]),
      (grupID[(3)-(1)]),
    ],
  },
  {
    label: "Skick",
    gambar: [
      createGambar((1),(1), ('4/41'), (1), (0),(null), ((1)-(1))),  // Moona
      createGambar((2),(1), ('3/34'), (2), (0),(null), ((2)-(1))),  // Reine
      createGambar((3),(1), ('2/21'), (2), (0),(null), ((3)-(1))),  // Zeta
    ],
  },
  {
    label: "Seaick",
    gambar: [
      createGambar((1),(2), ('6/6e'), (2), (0),(4), ((4)-(1))),  // Iofi
      createGambar((2),(2), ('3/3d'), (2), (0),(null), ((5)-(1))),  // Ollie
      createGambar((3),(2), ('7/7f'), (1), (0),(null), ((6)-(1))),  // Kobo
    ],
  },
  {
    label: "Landick",
    gambar: [
      createGambar((1),(3), ('c/c5'), (2), (0),(null), ((7)-(1))),  // Risu
      createGambar((2),(3), ('3/37'), (1), (0),(null), ((8)-(1))),  // Anya
      createGambar((3),(3), ('5/5a'), (1), (0),(null), ((9)-(1))),  // Kaela
    ],
  },
];
//
export const grupList = JesonID[0].grup;
//console.log (grupList);
//
export const datalent = JesonID
  .slice(1)
  .map((item) => ({
    ...item,
    mark: getMark(item.label),
    gambar: item.gambar.map((g, i) => ({
      ...g,
      grup: grupList[i] || "Unknown",
      why: g.why ?? i
    }))
  }));

export default JesonID;

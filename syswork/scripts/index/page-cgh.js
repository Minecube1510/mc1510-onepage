/*
 *
 * Name: "page-cgh.js"
 * Link: "syswork/scripts/index/page-cgh.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from
  // "/mc1510-onepage/syswork/imports/variables.js";
  "/syswork/imports/variables.js";
import * as jsFuncs from
  // "/mc1510-onepage/syswork/imports/functings.js";
  "/syswork/imports/functings.js";
//* * *//
import * as jsIdentic from
  // "/mc1510-onepage/syswork/imports/identity.js";
  "/syswork/imports/identity.js";
//* * *//
import * as cgh_BasisData from
  "../imports/cgh/data-basic-cgh.js";
import * as cgh_CardData from
  "../imports/cgh/data-card-cgh.js";
//


/* Variable Sections */
/*
    One-Vars
*/
const cgh_VarMinus = (jsVars.varOne.Minus);
const cgh_VarBlank = (jsVars.varOne.Blank);
const cgh_VarSpace = (jsVars.varOne.Space);
const cgh_VarColon = (jsVars.varOne.TwinColon);
const cgh_VarUscore = (jsVars.varOne.Uscore);
//
const blank_Data = cgh_VarMinus;
//
/*
    Objecting
*/
const keyCgh_AssetsPath = Object.keys(cgh_BasisData.cgh_AssetsPath);
const valCgh_AssetsPath = Object.values(cgh_BasisData.cgh_AssetsPath);
//
const prefix_BKc_Ap = (keyCgh_AssetsPath[0].replace(
  (cgh_VarUscore), (cgh_VarSpace),
));
/*
    Links
*/
const path_Img_Category = ((jsFuncs).linkPathering_Lower([
    /*
     * [main]: Activate
     * [dev]: De-Activate
     */
    // ("mc1510-onepage"),
  /**/
  ("syswork"), ("assets"), ("index"), ("cgh"),
]));
//
const file_ImgBasis_Ctg = ((jsFuncs).declareFile_Basis(
  (valCgh_AssetsPath[0]), ("png"),
));
const path_ImgBasis_Ctg = ((jsFuncs).linkPath_Begin_Basis([
  path_Img_Category, file_ImgBasis_Ctg,
]));
//
//console.log(path_ImgBasis_Ctg);


/* Data Table Display - Structing */
const cgh_MainTable = ((jsFuncs).jsGetId("cgh-table"));
const cgh_tLabHead = ((jsFuncs).jsCreatE("th"));
const cgh_THeadRow = ((jsFuncs).jsCreatE("tr"));
//
(cgh_MainTable).classList.add("cgh-table");
(cgh_tLabHead).classList.add("cgh-th");
//
const size_CghCtg = (150);
function cghDraw_Attributter(attributer = []) {
  return ((attributer)
    .map((str) => {
      const [key, ...val] = ((str).split(cgh_VarColon));
      return (`${key}="${val.join(cgh_VarColon)}"`);
    })
    .join(cgh_VarSpace));
}
function cghDraw_Elm_Categ(element,
  attrArr = [], contentStr = cgh_VarBlank,
) {
  const draw_Elm = ((jsFuncs).textSentancer([
    ((jsFuncs).jsLower(element)),
    (cghDraw_Attributter(attrArr)),
  ]));
  const struct_Elm = ([
    (`<${draw_Elm}>`), (`${contentStr}`),
    (`</${jsFuncs.jsLower(element)}>`),
  ].join(cgh_VarBlank));
  //
  return ((struct_Elm).trim());
}
//
const basis_FirstMark = ((jsFuncs).js_UcWords("Gosei Mark"));
const cgh_Linking = ((jsFuncs).linker_WebServe([
  ((cgh_BasisData).static_Talent_Linker),
  ((jsFuncs).js_UcWords("hololive")),
], ("https")));
//
(cgh_tLabHead).innerHTML = (cghDraw_Elm_Categ(("a"), [
    ("class:cgh-tabtog"), (`href:${cgh_Linking}`),
  ], (cghDraw_Elm_Categ(("img"), [
  ("id:"), ("name:"), (`title:${basis_FirstMark}`),
  (`width:${size_CghCtg}`), (`height:${size_CghCtg}`),
  (`alt:${prefix_BKc_Ap}`), (`src:${path_ImgBasis_Ctg}`),
  ("draggable:false"),
]))));
//
/*
    Headering (Ctg)
*/
cgh_THeadRow.appendChild(cgh_tLabHead);
cgh_MainTable.appendChild(cgh_THeadRow);
//


/* Data Table Display - Data */
cgh_BasisData.cgh_Gen.forEach((cgh_TabTalent, cgh_TIndex) => {
  const cgh_THeading = ((jsFuncs).jsCreatE("th"));
  const head1_Decorate = ((jsFuncs).sentanClasser([
    ("bs-text-secondary"),
  ]));
  //
  const auto_IdGen = ((cgh_TIndex) + (1));
  const navi_Gen = ((jsFuncs).js_UcWords([
    (`Hololive Indonesia - Generasi ${auto_IdGen}`),
  ]))
  //
  cgh_THeading.classList.add(("cgh-th"));
  (cgh_THeading).innerHTML = (cghDraw_Elm_Categ(("h1"), [
    (`id:`), (`name:`), (`title:${navi_Gen}`),
    (`class:${head1_Decorate}`),
  ], (cgh_TabTalent)));
  //
  (cgh_THeadRow).appendChild(cgh_THeading);
});
Object.entries((cgh_BasisData).cgh_AssetsPath)
  .slice(1).forEach(([cgh_Mark, cgh_Link]) => {
    // Penyiapan //
    const cgh_TrBody = jsFuncs.jsCreatE("tr");
    cgh_TrBody.classList.add("cgh-tr");
    //
    // Satu Icon - Penandaan //
    const cgh_Td_talentId = ((jsFuncs).jsCreatE("td"));
    //
    const iconMark_Class = [
      ("cgh-td"), ("px-5"),
    ];
    (cgh_Td_talentId).classList.add(...iconMark_Class);
    //
    const id_TalentKey = (cgh_BasisData.cgh_DefMapPath[cgh_Mark]);
    //
    const fileImg_Ctg = ((jsFuncs).declareFile_Basis((cgh_Link), ("png")));
    const pathImg_Ctg = ((jsFuncs).linkPath_Begin_Basis([
      (path_Img_Category), (fileImg_Ctg),
    ]));
    const get_TitleCtg = (cgh_BasisData.cgh_DefMapPath[cgh_Mark]);
    const show_titleCtg = ((jsFuncs).js_UcWords(get_TitleCtg));
    //
    const title_Gosei = (`Tribes that in Goseiger, Super Sentai series`);
    //
    (cgh_Td_talentId).innerHTML = ([
      (cghDraw_Elm_Categ("img", [("id:"), ("name:"),
        (`width:${size_CghCtg}`), (`height:${size_CghCtg}`),
        (`alt:${cgh_Mark.replace(cgh_VarUscore, cgh_VarSpace)}`),
        (`title:${show_titleCtg}`, `src:${pathImg_Ctg}`),
        ("draggable:false"),
      ])),
      (cghDraw_Elm_Categ(("h2"), [("id:"), ("name:"),
        (`class:bs-text-secondary opacity-25`),
        (`title:${title_Gosei}`),
      ], (show_titleCtg))),
    ].join(cgh_VarBlank));
    //
    cgh_TrBody.appendChild(cgh_Td_talentId);

    // Satu Icon - Perdataan //
    cgh_BasisData.cgh_Gen.forEach((id_gen) => {
      const tdGen = jsFuncs.jsCreatE("td");
      tdGen.classList.add(("cgh-td"), ("px-3"));
      const keyGen = id_gen.replace(cgh_VarMinus, cgh_VarBlank);
      //
      const check_isDataBade = (((cgh_BasisData)
        .cgh_TabTalent[keyGen]?.[id_TalentKey])
        ?? (blank_Data));
      const data_Talent = check_isDataBade;
      //
      const size_CghTalent = ((25) * (5));
      //
      if (check_isDataBade) {
        //const size_roundBorder = ((4) ** (2));
        //
        const div_Classer = ((jsFuncs).textSentancer([
          (`inline-flex`), (`items-center`), (`justify-center`),
          (`rounded-lg`), (`overflow-hidden`),
          //
          (`cgh-stain-${data_Talent.Color}`),
          (`cgh-def-bg-tabtog`),
          //
          (`mb-2`), (`p-2`),
        ]));
        const btn_Classer = ((jsFuncs).textSentancer([
          (`cgh-tabtog`), (`cgh-show-card`), (`p-0`),
        ]));
        const img_Classer = ((jsFuncs).textSentancer([(`block`),
          (`w-[${size_CghTalent}px] h-[${size_CghTalent}px]`),
        ]));
        //
        const h3_Classer = ((jsFuncs).textSentancer([
          (`cgh-h3`), (`cgh-textog`),
          (`cgh-stain-${data_Talent.Color}`),
          (`cgh-def-text-textog`),
        ]));
        //
        (tdGen).innerHTML = ([
          (cghDraw_Elm_Categ(("div"), [("id:"), ("name:"),
            (`class:${div_Classer}`),
          ], [
              (cghDraw_Elm_Categ(("button"), [("type:button"),
              ("id:"), ("name:"), (`class:${btn_Classer}`),
              //
              (`data-id:${data_Talent.Color}`),
              (`data-name:${data_Talent.Name}`),
              (`data-rank:${data_Talent.Rank}`),
              //
              ("aria-expanded:false"),
            ], (cghDraw_Elm_Categ(("img"), [
              ("id:"), ("name:"), (`class:${img_Classer}`),
              (`title:${data_Talent.Title}`), (`draggable:false`),
              (`width:${size_CghTalent}`), (`height:${size_CghTalent}`),
              (`alt:${data_Talent.Alt}`), (`src:${data_Talent.Src}`),
            ]))))
          ].join(cgh_VarBlank))),
          (cghDraw_Elm_Categ(("a"), [(`draggable:false`),
              ("id:"), ("name:"),
              (`class:mt-2 cgh-tabtog group`),
              (`href:${data_Talent.Href}`),
              (`title:${data_Talent.Desc}`),
            ], (cghDraw_Elm_Categ(("h3"), [
              (`class:${h3_Classer}`),
            ], ((data_Talent).Name),
          )))),
        ].join(cgh_VarBlank));
      } else {
        tdGen.innerHTML = (blank_Data);
      }
      //
      cgh_TrBody.appendChild(tdGen);
    });

    cgh_MainTable.appendChild(cgh_TrBody);
  }
);
//


/* Showing Cards */
function img_AuTemping(link_now, link_fix) {
  if (typeof link_now !== "string" || !link_now.trim()) {
    return link_fix;
  }
  // kalau sudah absolute URL → pakai langsung
  if (/^https?:\/\//i.test(link_now)) {
    return link_now;
  }
  // kalau fallback juga path lokal → return langsung
  if (link_fix.startsWith("/")) {
    return link_fix;
  }
  // gabungkan relative ke base absolute
  return new URL(link_now, link_fix).href;
}
//
function setOpen_CardStain(
  el, stainId,
) {
  // buang semua stain lama
  [...el.classList].forEach(cls => {
    if (
      cls.startsWith("cgh-stain-") ||
      cls.startsWith("bg-") ||
      cls.startsWith("border-")
    ) {
      el.classList.remove(cls);
    }
  });
  // kalau gak ada stain → default
  if (!stainId) {
    el.classList.add(
      ("bg-zinc-400"),
      ("border-neutral-600"),
    );
    return;
  }
  // pasang stain baru
  const staining_A = (`var(--cgh-${stainId}-a)`);
  const staining_B = (`var(--cgh-${stainId}-b)`);
  //
  el.style.setProperty(("--card-bg"), (staining_A));
  el.style.setProperty(("--card-border"), (staining_B));
}
function setClose_CardStain(
  overlay, card
) {
  overlay.classList.remove("active");
  // RESET STAIN
  setOpen_CardStain(card, null);
  // optional: bersihin konten
  card.innerHTML = cgh_VarBlank;
}
//
(document).addEventListener(("click"), ((e) => {
  const cgh_BtnOpenCard = e.target.closest(".cgh-show-card");
  //
  const cgh_CardOverlay = jsFuncs.jsGetId("cgh-card-overlay");
  const cgh_CardContent = jsFuncs.jsGetId("cgh-main-card");
  //
  const cardImg_Basis = path_ImgBasis_Ctg;
  //
  if (e.target.closest(".cgh-card-close")) {
    cgh_CardOverlay.classList.remove("active");
    return;
  }
  if (!cgh_BtnOpenCard) {
    //console.warn(``);
    return;
  } else {
    //
  }
  const cgh_Key_aIdi = cgh_BtnOpenCard.dataset.id;
  const cgh_Key_Name = cgh_BtnOpenCard.dataset.name;
  const cgh_Key_Rank = cgh_BtnOpenCard.dataset.rank;
  //
  //console.log(cgh_VarBlank);
  //console.log(cgh_CardData.id_TalentIndex);
  //
  //console.log(cgh_VarBlank);
  //console.log("[GET] id:", cgh_Key_aIdi);
  //console.log("[GET] name:", cgh_Key_Name);
  //console.log("[GET] rank:", cgh_Key_Rank);
  //
  const [ctgKey, indexStr] = cgh_Key_aIdi.split(cgh_VarMinus);
  const get_RoleName = cgh_CardData.id_TalentIndex[ctgKey];
  const get_DataKey = `${get_RoleName}_${indexStr}`;
  const cghGet_Data = cgh_CardData.cgh_DataCarding[get_DataKey] ?? {};
  //
  const {
    Name: name_talent,
    Desc: desc_talent,
    Pict: pict_talent,
    //
    Code: code_talent,
    Link: link_talent,
    //
    Text_Alter: text_alter,
    Text_Quote: text_quote,
    Text_Title: text_title,
    //
    //X: x,
  } = cghGet_Data ?? {};
  //
  //console.log(cgh_VarBlank);
  //console.log("[CHECK] Name:", name_talent);
  //console.log("[CHECK] Desc:", desc_talent);
  //console.log("[CHECK] Pict:", pict_talent);
  //
  const safety_CghName =
    typeof name_talent === "string" && name_talent.trim() !== cgh_VarBlank
      ? name_talent
      : `Err: Unknown Talent Name`;
  const safety_CghDesc =
    typeof desc_talent === "string" && desc_talent.trim() !== cgh_VarBlank
      ? desc_talent
      : ((jsFuncs).textSentancer([
          `Err:\n`,
          `Missing to showed, at the Description...`,
        ]));
  //
  const safety_CghPict = (img_AuTemping(pict_talent, cardImg_Basis));
  //
  const closing_CardClass = ((jsFuncs).sentanClasser([
    (`bi bi-x`),
    //(`text-2xl`),
  ]));
  const boxSafe_ImgClass = ((jsFuncs).sentanClasser([
    (`inline-flex`), (`items-center`), (`justify-center`),
    (`rounded-lg`), (`overflow-hidden`),
    //
    (`cgh-stain-${code_talent}`),
    (`cgh-card-bg-imgtog`),
    //
    (`mt-3`), (`p-2`),
  ]));
  //console.log(safety_CghPict);
  //
  setOpen_CardStain(cgh_CardContent, code_talent);
  cgh_CardContent.innerHTML = [
    cghDraw_Elm_Categ("button", [`type:button`,
      `class:cgh-card-close`,
      `aria-label:Close card`,
    ], cghDraw_Elm_Categ("span", [
      `id:`, `name:`,
      `class:${closing_CardClass}`,
    ], (cgh_VarBlank))),
    //
    cghDraw_Elm_Categ("div", [
      (`class:${boxSafe_ImgClass}`),
    ], cghDraw_Elm_Categ("a", [  // Pict
      (`id:`), (`name:`),
      (`href:${link_talent}`),
      (`class:cgh-tabtog`),
    ], cghDraw_Elm_Categ("img", [`draggable:false`,
      `class:cgh-card-pict`, `alt:${text_alter}`,
      `title:${text_title}`, `src:${safety_CghPict}`,
    ], (cgh_VarBlank)))),
    //
    cghDraw_Elm_Categ("h1", [  // Name
      `class:cgh-card-name`, `title:${text_quote}`,
    ], (safety_CghName)),
    cghDraw_Elm_Categ("p", [  // Desc
      `class:cgh-card-desc`,
    ], (safety_CghDesc)),
  ].join(cgh_VarBlank);
  //
  //const cgh_CPB = jsFuncs.jsGetId(`cgh-card-pict-box`);
  //
  cgh_CardOverlay.classList.add("active");
  //
  if (e.target.closest(".cgh-card-close")) {
    setClose_CardStain(cgh_CardOverlay, cgh_CardContent);
    return;
  }
}));


/* Uji Coba */
function checkData_IdTalent_DecoLog() {
  console.group("Check Talent");
    Object.entries(cgh_BasisData.cgh_TabTalent)
    .forEach(([areaKey, talents]) => {
      console.group(`Gen: ${areaKey}`);
      console.log("Raw area data:", talents);

      Object.entries(talents).forEach(([
        talentKey, talentData,
      ]) => {
        console.group(`Talent: ${talentKey}`);
        console.log("Details:", talentData);
        console.groupEnd();
      });
      console.groupEnd();
    });
  console.groupEnd();
}
function checkData_IdTalent_Json() {
  console.log(cgh_BasisData.cgh_TabTalent);
}
/* * */
//checkData_IdTalent_DecoLog();
//checkData_IdTalent_Json();


// !-! //

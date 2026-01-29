/*
 *
 * Name: "page-cgh.js"
 * Link: "syswork/scripts/index/page-cgh.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from
  "/mc1510-onepage/syswork/imports/variables.js";
  //"/syswork/imports/variables.js";
import * as jsFuncs from
  "/mc1510-onepage/syswork/imports/functings.js";
  //"/syswork/imports/functings.js";
//* * *//
import * as jsIdentic from
  "/mc1510-onepage/syswork/imports/identity.js";
  //"/syswork/imports/identity.js";
//* * *//
import * as cgh_BasisData from
  "../imports/cgh/data-basic-cgh.js";
  //"../imports/cgh/data-basic-cgh.js";
import * as cgh_CardData from
  "../imports/cgh/data-card-cgh.js";
  //"../imports/cgh/data-card-cgh.js";
//


/* Variable Sections */
// One-Vars
const cgh_VarMinus = jsVars.varOne.Minus;
const cgh_VarBlank = jsVars.varOne.Blank;
const cgh_VarSpace = jsVars.varOne.Space;
const cgh_VarColon = jsVars.varOne.TwinColon;
const cgh_VarUscore = jsVars.varOne.Uscore;
//
const blank_Data = cgh_VarMinus;
//
const keyCgh_AssetsPath = Object.keys(cgh_BasisData.cgh_AssetsPath);
const valCgh_AssetsPath = Object.values(cgh_BasisData.cgh_AssetsPath);
//
const prefix_BKc_Ap = keyCgh_AssetsPath[0].replace(
  jsVars.varOne.Uscore,
  cgh_VarSpace,
);
/*
    Links
*/
const path_Img_Category = jsFuncs.linkPathering_Lower([
  "syswork",
  "assets",
  "index",
  "cgh",
]);
const path_Img_TalenCon = jsFuncs.linkPathering_Basis([
  //
]);
//
const file_ImgBasis_Ctg = jsFuncs.declareFile_Basis(
  (valCgh_AssetsPath[0]), ("png"),
);
const path_ImgBasis_Ctg = jsFuncs.linkPath_Begin_Basis([
  path_Img_Category,
  file_ImgBasis_Ctg,
]);
//
//console.log(prefix_BKc_Ap);


/* Data Table Display - Structing */
const cgh_Table = jsFuncs.jsGetId("cgh-table");
const cgh_tLabHead = jsFuncs.jsCreatE("th");
const cgh_THeadRow = jsFuncs.jsCreatE("tr");
//
cgh_Table.classList.add("cgh-table");
cgh_tLabHead.classList.add("cgh-th");
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
  const draw_Elm = jsFuncs.textSentancer([
    jsFuncs.jsLower(element),
    cghDraw_Attributter(attrArr),
  ]);
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
cgh_tLabHead.innerHTML = (cghDraw_Elm_Categ(("a"), [
    ("class:cgh-tabtog"), (`href:${cgh_Linking}`),
  ], (cghDraw_Elm_Categ(("img"), [
  ("id:"), ("name:"), (`title:${basis_FirstMark}`),
  (`width:${size_CghCtg}`), (`height:${size_CghCtg}`),
  (`alt:${prefix_BKc_Ap}`), (`src:${path_ImgBasis_Ctg}`),
  ("draggable:false"),
]))));
//
// Headering (Ctg) //
cgh_THeadRow.appendChild(cgh_tLabHead);
cgh_Table.appendChild(cgh_THeadRow);
//
// Helper Drawing //
//

/* Data Table Display - Data */
cgh_BasisData.cgh_Gen.forEach((cgh_TabTalent, cgh_TIndex) => {
  const cgh_THeading = jsFuncs.jsCreatE("th");
  const head1_Decorate = ((jsFuncs).sentanClasser([
    ("bs-text-secondary"),
  ]));
  //
  const auto_IdGen = ((cgh_TIndex) + (1));
  const navi_Gen = ((jsFuncs).js_UcWords([
    `Hololive Indonesia - Generasi ${auto_IdGen}`
  ]))
  //
  cgh_THeading.classList.add("cgh-th");
  cgh_THeading.innerHTML = cghDraw_Elm_Categ(
    "h1",
    [`title:${navi_Gen}`, `class:${head1_Decorate}`],
    cgh_TabTalent,
  );
  //
  cgh_THeadRow.appendChild(cgh_THeading);
});
Object.entries((cgh_BasisData).cgh_AssetsPath).slice(1)
  .forEach(([cgh_Mark, cgh_Link]) => {
    // Penyiapan //
    const cgh_TrBody = jsFuncs.jsCreatE("tr");
    cgh_TrBody.classList.add("cgh-tr");

    // Satu Icon - Penandaan //
    const td = document.createElement("td");
    //
    const iconMark_Class = [("cgh-td"),
      ("px-5"),
    ]
    td.classList.add(...iconMark_Class);
    //
    const id_TalentKey = cgh_BasisData.cgh_DefMapPath[cgh_Mark];
    //
    const fileImg_Ctg = jsFuncs.declareFile_Basis(cgh_Link, "png");
    const pathImg_Ctg = jsFuncs.linkPath_Begin_Basis([
      path_Img_Category, fileImg_Ctg,
    ]);
    const get_TitleCtg = (cgh_BasisData.cgh_DefMapPath[cgh_Mark]);
    const show_titleCtg = ((jsFuncs).js_UcWords(get_TitleCtg));
    //
    td.innerHTML = ([
      (cghDraw_Elm_Categ("img", [("id:"), ("name:"),
        (`width:${size_CghCtg}`), (`height:${size_CghCtg}`),
        (`alt:${cgh_Mark.replace(cgh_VarUscore, cgh_VarSpace)}`),
        (`title:${show_titleCtg}`, `src:${pathImg_Ctg}`),
        ("draggable:false"),
      ])),
      (cghDraw_Elm_Categ(("h2"), [("id:"), ("name:"),
        (`class:bs-text-secondary opacity-25`),
        ("title:Tribes that in Goseiger, Super Sentai series"),
      ], (show_titleCtg))),
    ].join(cgh_VarBlank));
    //
    cgh_TrBody.appendChild(td);

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
        const size_roundBorder = ((4) ** (2));
        //
        const div_Classer = ((jsFuncs).textSentancer([
          (`inline-flex`), (`items-center`), (`justify-center`),
          (`cgh-stain-bg-${data_Talent.Color}`), (`mb-2`), (`p-2`),
          (`rounded-lg`), (`overflow-hidden`),
        ]));
        const btn_Classer = ((jsFuncs).textSentancer([
          (`cgh-tabtog`),
          (`p-0`),
        ]));
        const img_Classer = ((jsFuncs).textSentancer([(`block`),
          (`w-[${size_CghTalent}px] h-[${size_CghTalent}px]`),
        ]));
        //
        const h3_Classer = ((jsFuncs).textSentancer([
          (`cgh-h3`), (`cgh-textog`),
          (`cgh-stain-text-${data_Talent.Color}`),
        ]));
        //
        (tdGen).innerHTML = ([
          (cghDraw_Elm_Categ(("div"), [("id:"), ("name:"),
            (`class:${div_Classer}`),
          ], [(cghDraw_Elm_Categ(("button"), [("type:button"),
            ("id:"), ("name:"), (`class:${btn_Classer}`),
            ("aria-expanded:false"),
          ], (cghDraw_Elm_Categ(("img"), [
            ("id:"), ("name:"), (`class:${img_Classer}`),
            (`title:${data_Talent.Title}`), (`draggable:false`),
            (`width:${size_CghTalent}`), (`height:${size_CghTalent}`),
            (`alt:${data_Talent.Alt}`), (`src:${data_Talent.Src}`),
          ]))))].join(cgh_VarBlank))),
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

    cgh_Table.appendChild(cgh_TrBody);
  }
);
//


/* Uji Coba */
//


// !-! //

/*
 *
 * Name: "page-cgh.js"
 * Link: "syswork/scripts/index/page-cgh.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars
    from "/syswork/imports/variables.js";
import * as jsFuncs
    from "/syswork/imports/functings.js";
//* * *//
import * as jsIdentic
    from "/syswork/imports/identity.js";
//* * *//
import * as cgh_Data
    from "../imports/data-cgh.js";
//


/* Variable Sections */
// One-Vars
const cgh_VarMinus = ((jsVars).varOne.Minus);
const cgh_VarBlank = ((jsVars).varOne.Blank);
const blank_Data = (cgh_VarMinus);
//
const keyCgh_AssetsPath = (Object.keys(
    (cgh_Data).cgh_AssetsPath));
const valCgh_AssetsPath = (Object.values(
    (cgh_Data).cgh_AssetsPath));
//
const prefix_BKc_Ap = ((keyCgh_AssetsPath[0]).replace(
    (jsVars.varOne.Uscore), (jsVars.varOne.Space)
));
/*
    Links
*/
const path_Img_Category = ((jsFuncs).linkPathering_Lower([
    ("syswork"), ("assets"), ("index"), ("cgh"),
]));
const path_Img_TalenCon = ((jsFuncs).linkPathering_Basis([
    //
]));
//
const file_ImgBasis_Ctg = ((jsFuncs).declareFile_Basis(
    (valCgh_AssetsPath[0]), ("png"),
));
const path_ImgBasis_Ctg = ((jsFuncs).linkPath_Begin_Basis([
    (path_Img_Category), (file_ImgBasis_Ctg),
]));
//
//console.log(prefix_BKc_Ap);


/* Data Table Display - Structing */
const cgh_Table = ((jsFuncs).jsGetId("cgh-table"));
const cgh_tLabHead = ((jsFuncs).jsCreatE("th"));
const cgh_THeadRow = ((jsFuncs).jsCreatE("tr"));
//
(cgh_Table).classList.add("cgh-table");
(cgh_tLabHead).classList.add("cgh-th");
//
const size_CghCtg = (200);
(cgh_tLabHead).innerHTML = (`
    <img width="${size_CghCtg}" height="${size_CghCtg}"
        alt="${prefix_BKc_Ap}" src="${path_ImgBasis_Ctg}"
        id="" name="" draggable="false">
`.trim());
//
// Headering (Ctg) //
(cgh_THeadRow).appendChild(cgh_tLabHead);
(cgh_Table).appendChild(cgh_THeadRow);
//


/* Data Table Display - Data */
(cgh_Data).cgh_Gen.forEach((cgh_TabTalent) => {
    const cgh_THeading = ((jsFuncs).jsCreatE("th"));
    //
    (cgh_THeading).classList.add("cgh-th");
    (cgh_THeading).textContent = cgh_TabTalent;
    (cgh_THeadRow).appendChild(cgh_THeading);
});
(cgh_Data).cgh_Ctg.forEach((cgh_Categ) => {
    const cgh_TrBody = ((jsFuncs).jsCreatE("tr"));
    const cgh_TdLabel = ((jsFuncs).jsCreatE("td"));
    (cgh_TrBody).classList.add("cgh-tr");
    //
    // Nama kategori (Kiri)
    (cgh_TdLabel).classList.add("cgh-td");
    (cgh_TdLabel).textContent = (jsFuncs.
        jsProper(cgh_Categ)
    );
    (cgh_TrBody).appendChild(cgh_TdLabel);
    //
    // Data - Generasi
    (cgh_Data).cgh_Gen.forEach((id_gen) => {
        const cgh_TdBody = ((jsFuncs).jsCreatE("td"));
        /*
         * PERHATIAN: mapping key
         * Area-15 -> Area15
         */
        const cgh_ValKey = ((id_gen).replace(
            (cgh_VarMinus), (cgh_VarBlank)));
        //
        (cgh_TdBody).classList.add("cgh-td");
        //
        (cgh_TdBody).textContent = (((cgh_Data)
            .cgh_TabTalent[cgh_ValKey]?.[cgh_Categ])
            ?? (blank_Data)
        );
        //
        (cgh_TrBody).appendChild(cgh_TdBody);
    });
    //
    (cgh_Table).appendChild(cgh_TrBody);
});
//


/* Uji Coba */
//


// !-! //

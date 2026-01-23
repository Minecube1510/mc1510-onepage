/*
 *
 * Name: "page-index.js"
 * Link: "syswork/scripts/page-index.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars
    from "../imports/variables.js";
import * as jsFuncs
    from "../imports/functings.js";
//* * *//
import * as jsIdentic
    from "../imports/identity.js";
//


/* Display Pages List */
// Persiapan Listing per Halaman
const content_Pl = ((jsFuncs).jsGetId("page-list"));
const data_PageList = [
    [
        ("satu"),
        ("index/satu"),
    ],[
        ("dua"),
        ("index/dua"),
    ],[
        ("tiga"),
        ("index/tiga"),
    ],
];
// Hapus isi lama (opsional, kalau mau kosongin dulu)
(content_Pl).innerHTML = (jsVars.varOne.Blank);
/*
*
*/
// Mengubah array menjadi link berikutnya
(data_PageList).forEach(([text, link]) => {
    const link_Pl = ((jsFuncs).jsCreatE("a"));
    //
    const link_Class = ((jsFuncs).sentanClasser([
        ("block"),
    ]));
    //
    (link_Pl).textContent = (text);
    (link_Pl).href = ((link) ||
        (jsVars.varOne.HashT)
    );
    (link_Pl).className = (link_Class);
    //
    (content_Pl).appendChild(link_Pl);
});


/* Uji Coba */
//


// !-! //

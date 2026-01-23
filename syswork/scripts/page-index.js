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
function render_Html (htmlName) {
    const rootIndex = ((jsFuncs).jsLower("index"));
    const fileHtml = ((jsFuncs).declareFile(
        (htmlName), ("html"),
    ));
    //
    //console.log(fileHtml);
    //
    return ((jsFuncs).linkPathering([
        (rootIndex), (fileHtml),
    ]));
}
const content_Pl = ((jsFuncs).jsGetId("page-list"));
const data_PageList = [
    [
        ("satu"),
        ("cgh"),
    ],[
        ("dua"),
        ("dua"),
    ],[
        ("tiga"),
        ("tiga"),
    ],
];
// Hapus isi lama (opsional, kalau mau kosongin dulu)
(content_Pl).innerHTML = (jsVars.varOne.Blank);
/*
*
*/
// Mengubah array menjadi link berikutnya
(data_PageList).forEach(([listText, listLink], listIndex) => {
    const link_Pl = ((jsFuncs).jsCreatE("a"));
    //
    const isLastList = ((listIndex) === (
        ((data_PageList).length) - (1)
    ));
    const mb_Valter = (((isLastList)
        ? (0) : (1)));
    //
    const link_Class = ((jsFuncs).sentanClasser([
        ("block"),
        //?
        //
        (`mb-${mb_Valter}`),
    ]));
    //
    (link_Pl).textContent = (listText);
    (link_Pl).href = ((render_Html(listLink)) ||
        (jsVars.varOne.HashT)
    );
    (link_Pl).className = (link_Class);
    //
    (content_Pl).appendChild(link_Pl);
});


/* Uji Coba */
//


// !-! //

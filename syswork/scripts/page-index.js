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
import * as indexData
    from "./imports/data-index.js";
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
// Hapus isi lama (opsional, kalau mau kosongin dulu)
(content_Pl).innerHTML = (jsVars.varOne.Blank);
/*
*
*/
// Mengubah array menjadi link berikutnya
(indexData).index_Pl.forEach((
    [listText, listLink], listIndex
) => {
    // Prepare
    const link_Pl = ((jsFuncs).jsCreatE("a"));
    const text_Pl = ((jsFuncs).jsCreatE("span"));
    const line_Pl = ((jsFuncs).jsCreatE("span"));
    const hashLink = (jsVars.varOne.HashT);
    //
    const isLastList = ((listIndex) === (
        (indexData.index_Pl.length) - (1))
    );
    const mb_Valter = ((isLastList) ? (0) : (2));
    //
    (text_Pl).textContent = listText;
    //
    // Classing Main Link //
    (link_Pl).className = ((jsFuncs).sentanClasser([
        (`mb-${mb_Valter}`), ("group"),
        ("index-page-list"),
    ]));
    // Classing Line //
    (line_Pl).className = ((jsFuncs).sentanClasser([
        ("link-list-line"),
    ]));
    // Classing Text //
    (text_Pl).className = ((jsFuncs).sentanClasser([
        ("link-list-text"),
    ]));
    //
    // HREF-nya //
    (link_Pl).href = (typeof (listLink) === ("string")
        ? (render_Html(listLink))
        : (hashLink));
    //
    // AppEnd //
    (line_Pl).append();  // Kosong, isinya via CSS
    (link_Pl).append(text_Pl, line_Pl);
    (content_Pl).appendChild(link_Pl);
});


/* Uji Coba */
//


// !-! //

/*
 *
 * Name: "scripter.js"
 * Link: "syswork/scripter.js"
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
//


/* Title */
const pageTitle = ((document).title);
const baseTitle = ((jsFuncs).jsGetId("page-web-title"));
const webTitle = ((jsFuncs).textSentancer([("OnePage"),
    ((jsFuncs).jsProper("Project")),
]));
//
baseTitle.textContent = ([
    (webTitle), (pageTitle)
].join(" - "));


/* Favicon */
const rel_Ati = (jsFuncs.jsLower("apple-touch-icon"));
const know_Rels = [
    ((jsIdentic).e_LinkTypes.icon),
    ("shortcut icon"),
    (rel_Ati),
    ("apple-touch-icon-precomposed"),
    (rel_Ati),
    ((jsIdentic).e_LinkTypes.icon),
];
const common_Attrs = ((know_Rels).map((rel) => ({
    rel: ((jsFuncs).jsLower(rel)),
    type: ((jsIdentic).e_LinkTypes.imageXIcon),
    sizes: ((jsFuncs).jsLower("160x160")),
})));
/*
    Common Attributers
*/
(common_Attrs).forEach((attrs) => {
    const eLink = ((jsFuncs).jsCreatE("link"));
    const isPng = ((attrs.type) === ((jsIdentic)
        .e_LinkTypes.imagePng));
    (eLink).href = ((isPng)
        ? (jsIdentic.pathFavics.png)
        : (jsIdentic.pathFavics.ico));
    //
    Object.entries(attrs).forEach(([key, val]) => {
        (eLink).setAttribute(key, val);
    });
    //
    (document).head.appendChild(eLink);
});


/* Later-1 */
//


/* Later-2 */
//


/* Later-3 */
//


/* Uji Coba */
//


// !-! //

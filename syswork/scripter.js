/*
 *
 * Name: "scripter.js"
 * Link: "syswork/scripter.js"
 * 
 */
//* * *//

/* Imports */
import * as jsVars
    from "./imports/variables.js";
import * as jsFuncs
    from "./imports/functings.js";
//* * *//
import * as jsIdentic
    from "./imports/identity.js";
//


/* Title */
const pageTitle = ((document).title);
const baseTitle = (jsFuncs.jsGetId("index-title"));
const webTitle = (jsFuncs.textSentancer([
    ("OnePage"),
    jsFuncs.jsProper("Project"),
]));
//
baseTitle.textContent = ([
    webTitle, pageTitle
].join(" - "));


/* Favicon */
const rawRels = [
    ((jsIdentic).e_LinkTypes.icon),
    ("shortcut icon"),
    ("apple-touch-icon"),
    ("apple-touch-icon-precomposed"),
    ("apple-touch-icon"),
    ((jsIdentic).e_LinkTypes.icon),
];
const commonAttributes = ((rawRels).map((rel) => ({
    rel: jsFuncs.jsLower(rel),
    type: jsIdentic.e_LinkTypes.imageXIcon,
    sizes: jsFuncs.jsLower("160x160"),
})));
/*
*
*/
(commonAttributes).forEach((attrs) => {
    const eLink = ((jsFuncs).jsCreatE("link"));
    const isPng = (
        (attrs.type) === ((jsIdentic).e_LinkTypes.imagePng)
    );
    eLink.href = ((isPng)
        ? (jsIdentic.pathFavics.png)
        : (jsIdentic.pathFavics.ico)
    );
    //
    Object.entries(attrs).forEach(([key, val]) => {
        eLink.setAttribute(key, val);
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

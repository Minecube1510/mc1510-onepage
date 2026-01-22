/*
 *
 * Name: "scripter.js"
 * Link: "syswork/scripter.js"
 * 
 */
//* * *//

/* Imports */
import * as jsVars from "./imports/variables.js";
import * as jsFuncs from "./imports/functings.js";
import { jsProper } from "./imports/functings.js";
//* * *//
//


/* Identic */
// Link Types
const linkType_Icon = jsFuncs.jsLower("icon");
const linkType_ImageXIcon = jsFuncs.jsLower("image/x-icon");
const linkType_ImagePng = jsFuncs.jsLower("image/png");
//* * *//
// GitHub Info
const github_User = jsFuncs.jsProper("Minecube1510");
const github_Repo = jsFuncs.jsLower("mc1510-onepage");
const github_Assets = jsFuncs.jsProper("Minecube1510");
//
const pathing_Assets = jsFuncs.linkPathering([
    ("syswork"), ("assets"),
    ("favics"),
]);
const pathFavicer = jsFuncs.linkPathering([
    //(github_Repo),
    (pathing_Assets),
]);
//
const pathFavic_Ico = jsFuncs.linkPathering([
    (pathFavicer), ("emoji-test.ico"),
]);
const pathFavic_Png = jsFuncs.linkPathering([
    (pathFavicer), ("emoji-test.png"),
]);
//* * *//
//


/* Title */
const pageTitle = ((document).title);
const baseTitle = (jsFuncs.jsGetId("index-title"));
const webTitle = (jsFuncs.textSentancer([
    ("OnePage"), jsProper("Project"),
]));
//
baseTitle.textContent = ([
    webTitle, pageTitle
].join(" - "));


/* Favicon */
const commonAttributes = [
    { rel: linkType_Icon, type: linkType_ImageXIcon },
    { rel: "shortcut icon", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon-precomposed", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon", type: linkType_ImageXIcon, sizes: "160x160" },
    { rel: linkType_Icon, type: linkType_ImageXIcon }
];
//
commonAttributes.forEach((attrs) => {
    const link = ((document).createElement("link"));
    const isPng = ((attrs.type) === (linkType_ImagePng));
    link.href = ((isPng)
        ? (pathFavic_Png)
        : (pathFavic_Ico)
    );
    //
    Object.entries(attrs).forEach(([key, val]) => {
        link.setAttribute(key, val);
    });
    //
    (document).head.appendChild(link);
});


/* Later-1 */
//


/* Later-2 */
//


/* Later-3 */
//


/* Uji Coba */
// Favicon
//


/*|*/

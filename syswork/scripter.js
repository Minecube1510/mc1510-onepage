/*
 *
 * Name: scripter.js
 * syswork/scripter.js
 * 
 */
//* * *//

/* Imports */
//...


/* Vars (Temporary) */
const jsVar_Blank = ("");
//
const jsVar_Dash = ("/");
//
const jsVar_Plus = ("+");
const jsVar_Minus = ("-");


/* Funcs - Basics */
// Shorty JS Functings
function jsUpper(string) {
    return (string.toUpperCase());
}
function jsLower(string) {
    return (string.toLowerCase());
}
//
function jsGetId(string) {
    return (document.getElementById(
        jsLower(string)
    ).name);
}
function jsGetName(string) {
    return (document.getElementsByName(
        jsLower(string)
    ).name);
}
// New JS Combine Functings //
function jsProper(string) {
    if (!(string)) {
        return (jsVar_Blank);
    }
    return (
        (jsUpper(string.charAt(0)))
        + (jsLower(string.slice(1)))
    );
}
//* * *//
//


/* Funcs - Made */
function linkPathering(arrays) {
    return ((arrays).join(jsVar_Dash));
}
function linkPath_Begin(arrays) {
    return ((jsVar_Dash) + ((arrays).join(jsVar_Dash)));
}
//* * *//
//


/* Identic */
// Link Types
const linkType_Icon = jsLower("icon");
const linkType_ImageXIcon = jsLower("image/x-icon");
const linkType_ImagePng = jsLower("image/png");
//* * *//
// GitHub Info
const github_User = jsProper("Minecube1510");
const github_Repo = jsLower("mc1510-onepage");
const github_Assets = jsProper("Minecube1510");
//
const pathing_Assets = linkPathering([
    jsLower("syswork"),
    jsLower("asset"),
]);
//
const pathFavic_Ico = linkPath_Begin([
    (github_Repo), (pathing_Assets),
    ("emoji-test.ico"),
]);
const pathFavic_Png = linkPath_Begin([
    (github_Repo), (pathing_Assets),
    ("emoji-test.png"),
]);
//* * *//
//


/* Later */
//


/* Uji Coba */
// Title
const pageTitle = ((document).title);
const baseTitle = jsGetId("index-title");
const webTitle = jsProper("OnePage Project");
//
baseTitle.textContent = ([
    webTitle, pageTitle
].join(" - "));
//
/*
*
*/
// Favicon
//
const iconIcoPath = (pathFavic_Ico);
const iconPngPath = (pathFavic_Png);
//
const commonAttributes = [
    { rel: linkType_Icon, type: linkType_ImageXIcon },
    { rel: "shortcut icon", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon-precomposed", type: linkType_ImageXIcon },
    { rel: "apple-touch-icon", type: linkType_ImageXIcon, sizes: "160x160" },
    { rel: linkType_Icon, type: linkType_ImageXIcon }
];

commonAttributes.forEach((attrs) => {
    const link = ((document).createElement("link"));
    const isPng = ((attrs.type) === (linkType_ImagePng));
    link.href = ((isPng)
        ? (iconPngPath) : (iconIcoPath)
    );
    
    Object.entries(attrs).forEach(([key, val]) => {
        link.setAttribute(key, val);
    });

    (document).head.appendChild(link);
});


/*|*/

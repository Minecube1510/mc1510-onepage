/*
 *
 * Name: "identity.js"
 * Link: "syswork/imports/identity.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars
    from "./variables.js";
import * as jsFuncs
    from "./functings.js";
//* * *//
//


/* Identic - String */
// Link Types //
// Raw mapping tanpa jsLower manual
const link_Types = {
    icon: "icon",
    imageXIcon: "image/x-icon",
    imagePng: "image/png",
    imageSvg: "image/svg+xml",
    imageJpeg: "image/jpeg",
    imageGif: "image/gif",
    imageWebp: "image/webp",
};
export const e_LinkTypes = Object.fromEntries(
    Object.entries(link_Types).map(
        ([key, value]) => [
            (key), (jsFuncs.jsLower(value))
    ])
);
/*
*
*/
// GitHub Info //
const github_User = {
    name: ((jsFuncs).jsProper("Minecube1510")),
    repo: ((jsFuncs).jsLower("mc1510-onepage")),
    path_assets: ((jsFuncs).linkPathering([
        ("syswork"), ("assets"),
    ])),
};
export const github_Data = Object.fromEntries(
    Object.entries(github_User).map(
        ([key, value]) => [
            (key), (jsFuncs.jsLower(value))
    ])
);


/* Identic - Path */
export const pathing_Assets = ((jsFuncs).linkPath_Begin([
    //(jsVars.varOne.Spot),
    (github_Data.path_assets),
]));
//* * *//
export const pathFavicer = ((jsFuncs).linkPathering([
    (pathing_Assets),
    ("favics"),
]));
/*
*
*/
// daftar ekstensi yang mau dipakai
const favicFiles = {
    ico: "ico",
    png: "png",
    svg: "svg",
    gif: "gif",
};
// mapping otomatis
export const pathFavics = Object.fromEntries(
    Object.entries(favicFiles).map(
        ([key, value]) => [ (key),
        ((jsFuncs).linkPathering([
            (pathFavicer),
            (`emoji-test.${value}`)
        ])),
    ])
);
//* * *//
//


// !-! //

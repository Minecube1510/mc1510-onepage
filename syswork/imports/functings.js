/*
 *
 * Name: "functings.js"
 * Link: "syswork/imports/functings.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from
    "./variables.js";
    //"./variables.js";
//* * *//
//


/* Basics */
// Shorty JS Functings //
export function jsUpper(string) {
    return ((string).toUpperCase());
}
export function jsLower(string) {
    return ((string).toLowerCase());
}
//
export function jsGetId(string) {
    return ((document).getElementById(
        jsLower(string)
    ));
}
export function jsGetName(string) {
    return ((document).getElementsByName(
        jsLower(string)
    ));
}
//
export function jsCreatE(string) {
    return ((document).createElement(
        jsLower(string)
    ));
}
/*
    Helper
*/
function jsWordNormalizer(input) {
    const toSpace = (jsVars.varOne.Space);
    if (!(input)) {
        return [];
    }
    //
    const str = (Array.isArray(input)
        ? (input.join(toSpace))
        : String(input));
    //
    return ((str)
        .replace(/[_]+/g, toSpace)
        .trim()
        .split(/\s+/));
}
/*
    New JS Combine Functings
*/
export function jsProper(word) {
    if (!(word)) {
        return (jsVars.varOne.Blank);
    }
    //
    const str = String(word);
    //
    return (
        (jsUpper(str.charAt(0))) +
        (jsLower(str.slice(1)))
    );
}
export function js_UcFirst(input) {
    const words = jsWordNormalizer(input);
    if (!words.length) return jsVars.varOne.Blank;
    //
    return [
        jsUpper(words[0].charAt(0)) + jsLower(words[0].slice(1)),
        ...words.slice(1).map(jsLower)
    ].join(jsVars.varOne.Space);
}
export function js_UcWords(input) {
    const words = (jsWordNormalizer(input));
    //
    if (((words).length) === (0)) {
        return (jsVars.varOne.Blank);
    }
    //
    return ((words).map((word) => (
        (jsUpper(word.charAt(0))) +
        (jsLower(word.slice(1)))
    )).join(jsVars.varOne.Space));
}
//* * *//
//


/* In Mades */
// Jointers //
export function f_LinkLined(name) {
    return ((name).replace((/ /g),
        (jsVars.varOne.Uscore)));
}
export function f_FileName(linking) {
    return (f_LinkLined(linking));
}
//
export function declareFile_Basis(name, format) { 
    return ([f_FileName(name),
        jsLower(format),
    ].join(jsVars.varOne.Spot));
}
export function declareFile_Lower(name, format) { 
    return jsLower([f_FileName(name),
        jsLower(format),
    ].join(jsVars.varOne.Spot));
}
//
export function textSentancer(arrays) {
    return ((arrays)
        .map((item) => (item))
        .join(jsVars.varOne.Space));
}
export function sentanClasser(arrays) { 
    return jsLower((arrays)
        .map((item) => (item))
        .join(jsVars.varOne.Space));
}
// Linkers //
export function linkPathering_Basis(arrays) {
    return arrays
        .map((item) => (item))
        .join(jsVars.varOne.Dash);
}
export function linkPathering_Lower(arrays) {
    return arrays
        .map((item) => (jsLower(item)))
        .join(jsVars.varOne.Dash);
}
//
export function linkPath_Begin_Basis(arrays) {
    return ((jsVars.varOne.Dash) +
        (linkPathering_Basis(arrays))
    );
}
export function linkPath_Begin_Lower(arrays) {
    return ((jsVars.varOne.Dash) +
        (linkPathering_Lower(arrays))
    );
}
//
export function linker_WebServe(
    linkings, scheme = "http"
) {
    const web_Serve = jsLower(scheme);
    const conn_Web = (`${web_Serve}:/`);

    const normalized = ((Array.isArray(linkings))
        ? (linkings) : [linkings]);

    return [(conn_Web),
        linkPathering_Basis(normalized),
    ].join(jsVars.varOne.Dash);
}
//* * *//
//
/*
*
*/
// Linkers //
//
//* * *//
//


// !-! //

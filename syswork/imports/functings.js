/*
 *
 * Name: "functings.js"
 * Link: "syswork/imports/functings.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars
    from "./variables.js";
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
*
*/
// New JS Combine Functings //
export function jsProper(string) {
    if (!(string)) {
        return (jsVars.varOne.Blank);
    }
    return (
        (jsUpper((string).charAt(0)))
        + (jsLower((string).slice(1)))
    );
}
//* * *//
//


/* In Mades */
// Jointers //
export function declareFile_Basis(name, format) { 
    return ([ (name), jsLower(format), ]
        .join(jsVars.varOne.Spot));
}
export function declareFile_Lower(name, format) { 
    return jsLower([
        (name), (format),
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

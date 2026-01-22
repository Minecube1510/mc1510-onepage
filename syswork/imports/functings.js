/*
 *
 * Name: "functings.js"
 * Link: "syswork/imports/functings.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from "./variables.js";
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
//* * *//
/*
*
*/
// New JS Combine Functings //
export function jsProper(string) {
    if (!(string)) {
        return (jsVars.jsVar_Blank);
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
export function textSentancer(arrays) {
    return arrays
        .map((item) => (item))
        .join(jsVars.jsVar_Space);
}
// Linkers //
export function linkPathering(arrays) {
    return arrays
        .map((item) => (jsLower(item)))
        .join(jsVars.jsVar_Dash);
}
//
export function linkPath_Begin(arrays) {
    return ((jsVars.jsVar_Dash) +
        (linkPathering(arrays))
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


//

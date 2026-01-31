/*
 *
 * Name: "data-basic-cgh.js"
 * Link: "syswork/scripts/imports/cgh/data-basic-cgh.js"
 *
 */
//* * *//

/* Imports */
import * as jsVars from
    // "/mc1510-onepage/syswork/imports/variables.js";
    "/syswork/imports/variables.js";
import * as jsFuncs from
    // "/mc1510-onepage/syswork/imports/functings.js";
    "/syswork/imports/functings.js";
//* * *//
import * as cgh_BasisData from
    "./data-basic-cgh.js";
//


/* Card System */
export const id_TalentIndex = {
    "sky": (cgh_BasisData.cgh_Ctg[(1)-(1)]),
    "sea": (cgh_BasisData.cgh_Ctg[(2)-(1)]),
    "land": (cgh_BasisData.cgh_Ctg[(3)-(1)]),
};
//* * *//
export const cgh_GettaData = (() => {
    const roleCounter = {};
    //
    return Object.fromEntries(
        Object.entries(cgh_BasisData.cgh_TabTalent).flatMap(
        ([Group, roles]) => Object.entries(roles).map((
        [Role, data]) => {
            // init counter per role //
            roleCounter[Role] ??= 0;
            roleCounter[Role]++;
            //
            return [(`${Role}_${roleCounter[Role]}`), {
                Group, Role,
                ...data,
            }];
        }))
    );
})();
//* * *//
const cgh_DescReason = [
    (`Bulan Indonesia`),
    (`Alien Indonesia`),
    (`Tupai Indonesia`),
    //
    (`Merak Indonesia`),
    (`Zombi Indonesia`),
    (`Keris Indonesia`),
    //
    (`Intel Indonesia`),
    (`Hujan Indonesia`),
    (`Godam Indonesia`),
];
export const cgh_DataCarding = (Object.fromEntries(
    Object.entries(cgh_GettaData).map(
        ([key, val], i) => [(key), {
            Code: val.Color,
            //
            Name: val.Name,
            Pict: val.Src,
            //
            Desc: cgh_DescReason[i],
            //Desc: cgh_DescReason[i] ? [cgh_DescReason[i]] : [],
            //
            Link: val.Href,
            /* *
            * */
            Text_Alter: val.Alt,
            Text_Quote: val.Desc,
            Text_Title: val.Title,
            //
    }])
));

//?
//


/* Uji Coba */
//console.log(id_TalentIndex);
//console.log(cgh_DataCarding);
//* * *//
//


// !-! //

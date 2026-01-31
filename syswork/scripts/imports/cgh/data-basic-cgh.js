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
import * as jsIdentic from
    // "/mc1510-onepage/syswork/imports/identity.js";
    "/syswork/imports/identity.js";
//


/*
    "Data - For Table Display"
    Data: Get Assets
*/
export const cgh_Ctg = [
    ("Skick"),
    ("Seaick"),
    ("Landick"),
];
export const cgh_Gen = [
    ("Area15"),
    ("holoro"),
    ("Holoh3ro"),
];
//
export const cgh_AssetsPath = {
    Basis_Mark: ("Gosei_Mark"),
    Skick_Mark: ("Gosei_Mark-Skick"),
    Seaick_Mark: ("Gosei_Mark-Seaick"),
    Landick_Mark: ("Gosei_Mark-Landick"),
};


/*
    "Data - For Table Display"
    Data: Personal Talent
*/
export const cgh_IndoTalent = {
    Gen_1: {
        Skick: "Moona Hoshinova",
        Seaick: "Airani Iofifteen",
        Landick: "Ayunda Risu",
    },
    Gen_2: {
        Skick: "Pavolia Reine",
        Seaick: "Kureiji Ollie",
        Landick: "Anya Melfissa",
    },
    Gen_3: {
        Skick: "Vestia Zeta",
        Seaick: "Kobo Kanaeru",
        Landick: "Kaela Kovalskia",
    },
}
//
const id_Talent = (Object.freeze(Object.fromEntries(
    Object.entries(cgh_IndoTalent).flatMap(([gen, roles]) => {
        const genNum = ((gen).split(jsVars.varOne.Uscore).pop());
        //
        return (Object.entries(roles).map(([role, name]) => [
            (`${role}_${genNum}`), (name),
        ]));
    }),
)));
//
//function
//
//console.log(id_Talent.Landick_3);


/*
    "Data - For Table Display"
    Data: Basics
*/
function pickWord(text, pos = 1) {
    const parts = (String(text)
        .trim().split(/\s+/));
    return ((parts[(pos) - (1)])
        ?? (jsVars.jsVars.Blank));
}
//
const static_Img_LinkerSrc = ((jsFuncs).linkPathering_Lower([
    (`static.wikia.nocookie.net`), (`virtualyoutuber`),
    (`images`),
]));
export const static_Talent_Linker = ((jsFuncs).linkPathering_Lower([
    (`virtualyoutuber.fandom.com`), (`wiki`),
]));
//
function cghStruct_Talent(
    Name, Rank, Title, Alt,
    Href = [], Src = [],
    Color = "f0f0fafa", Desc = "",
) {
    const cgh_ProperName = ((jsFuncs).js_UcWords(Name));
    const cgh_ProperTitle = ((jsFuncs).js_UcWords(Title));
    const cgh_ProperAlt = ((jsFuncs).js_UcWords(Alt));
    //
    const cgh_ProperColor = ((jsFuncs).jsLower(Color));
    //const cgh_ProperDesc = ((jsFuncs).js_UcWords(Desc));
    //
    const check_Arr = ((readArr) => {
        return ((Array.isArray(readArr))
        ? (readArr) : [readArr]);
    });
    //
    const into_Https = ((jsFuncs).jsLower(`https`));
    const cgh_LinkerHref = ((jsFuncs).linker_WebServe(
        check_Arr(Href), (into_Https)));
    const cgh_LinkerSrc = ((jsFuncs).linker_WebServe(
        check_Arr(Src), (into_Https)));

    return {
        Name: cgh_ProperName,
        Rank: Rank,
        //
        Title: cgh_ProperTitle,
        Alt: cgh_ProperAlt,
        //
        Href: cgh_LinkerHref,
        Src: cgh_LinkerSrc,
        //
        Color: cgh_ProperColor,
        //Desc: cgh_ProperDesc,
        Desc: Desc,
    };
}
//
function cghImg_Talent_Link(talent) {
    //console.log(static_Img_LinkerSrc);
    //
    return ([(static_Talent_Linker),
        ((jsFuncs).f_LinkLined(talent)),
    ]);
}
//
function cghFunc_GetImg_Sourced(name) {
    const forming_Png = ((jsFuncs).jsLower("PNG"));
    return ((jsFuncs).declareFile_Basis(
        (name), (forming_Png),
    ));
}
function cghImg_Fandom_SrcIng(ticket, name) {
    //console.log(static_Img_LinkerSrc);
    //
    return ([
        (static_Img_LinkerSrc), (ticket),
        (cghFunc_GetImg_Sourced(name)),
    ].filter(Boolean));
}
function cghImg_Fd_ANF(name) {
    const cgh_Proper = ((jsFuncs).js_UcWords(name));
    const auto_GetFile = ((jsFuncs).js_UcWords([
        (cgh_Proper), (`Icon`),
    ].join("_-_")));
    //
    return (auto_GetFile);
}
function cghImg_Alting(context, point) {
    //
    const creaText = ([(context), (point),
        ].join(" - "));
    //console.log(creaText);
    //
    return (creaText);
}
//
function cgh_Compress_IndoTalent(
    Name, Rank,
    Title, Alt, FTicket,
    Color = "F0F0FAFA", Desc,
    Href = null, Src = null,
) {
    //
    //
    return (cghStruct_Talent(
        (Name), (Rank), (Title), (Alt),
        ((Href) ?? (cghImg_Talent_Link(Name))),
        ((Src) ?? (cghImg_Fandom_SrcIng(((FTicket)
            ?? (jsVars.varOne.Blank)),
            (cghImg_Fd_ANF(Name))))
        ), (Color), (Desc),
    ));
}
//
export const cgh_DefMapPath = (Object.fromEntries(
    cgh_Ctg.map((ctg) => [`${ctg}_Mark`, ctg])
));
/***/
export const cgh_TabTalent = {
    /*
        Pengaturan:
        - [Nama] : "Namanya" (Basis)
        - [Title] : "Untuk Tooltip" (a, img)
        - [Alt] : "Samain dengan Nama, namun sedikit di-bedain" (img)
        - [Href] : "Link Akses" (a)
        - [Src] : "Link Sumber" (img)
    */
    Area15: {
        Skick: cgh_Compress_IndoTalent(
            (id_Talent.Skick_1), (cgh_Gen[(1)-(1)]),
            (`Skick of Area 15`), (cghImg_Alting(
                (`Gekkou of Moonlight`), (pickWord(
                (id_Talent.Skick_1), (1))
            ))), (`4/41`), ("sky-1"),
            ("Bulan Tukang Makan"),
        ),
        Seaick: cgh_Compress_IndoTalent(
            (id_Talent.Seaick_1), (cgh_Gen[(1)-(1)]),
            (`Seaick of Area 15`), (cghImg_Alting(
                (`Suisou of Aquarium`), (`Yopi`),
            )), (`6/6e`), ("sea-1"),
            ("Yopipi BOGEL RRRRRR"),
        ),
        Landick: cgh_Compress_IndoTalent(
            (id_Talent.Landick_1), (cgh_Gen[(1)-(1)]),
            (`Landick of Area 15`), (cghImg_Alting(
                (`Shinzen of Natures`), (pickWord(
                (id_Talent.Landick_1), (2))
            ))), (`c/c5`), ("land-1"),
            ("Risduar Tupai"),
        ),
    },
    holoro: {
        Skick: cgh_Compress_IndoTalent(
            (id_Talent.Skick_2), (cgh_Gen[(2)-(1)]),
            (`Skick of holoro`), (cghImg_Alting(
                (`Toppuu of Windgusts`), (pickWord(
                (id_Talent.Skick_2), (2))
            ))), (`3/34`), ("sky-2"),
            ("Tante Antagonis, sukanya ANJING"),
        ),
        Seaick: cgh_Compress_IndoTalent(
            (id_Talent.Seaick_2), (cgh_Gen[(2)-(1)]),
            (`Seaick of holoro`), (cghImg_Alting(
                (`Sekketsu of Bloody`), (pickWord(
                (id_Talent.Seaick_2), (2))
            ))), (`3/3d`), ("sea-2"),
            ("Kawanannya melebihi dari namanya"),
        ),
        Landick: cgh_Compress_IndoTalent(
            (id_Talent.Landick_2), (cgh_Gen[(2)-(1)]),
            (`Landick of holoro`), (cghImg_Alting(
                (`Eiken of Sharpblade`), (pickWord(
                (id_Talent.Landick_2), (1))
            ))), (`3/37`), ("land-2"),
            ("Ini Keris, ditempanya dari Indo atau dari Jepun"),
        ),
    },
    Holoh3ro: {
        Skick: cgh_Compress_IndoTalent(
            (id_Talent.Skick_3), (cgh_Gen[(3)-(1)]),
            (`Skick of Holoh3ro`), (cghImg_Alting(
                (`Kanja of Spy`), (pickWord(
                (id_Talent.Skick_3), (2))
            ))), (`2/21`), ("sky-3"),
            ("A a a, Mission Stato! Iya iya, suka-suka, PON!"),
        ),
        Seaick: cgh_Compress_IndoTalent(
            (id_Talent.Seaick_3), (cgh_Gen[(3)-(1)]),
            (`Seaick of Holoh3ro`), (cghImg_Alting(
                (`Amagumo of Raincloud`), (pickWord(
                (id_Talent.Seaick_3), (1))
            ))), (`7/7f`), ("sea-3"),
            ("Kobocil EHEK-EHEK!"),
        ),
        Landick: cgh_Compress_IndoTalent(
            (id_Talent.Landick_3), (cgh_Gen[(3)-(1)]),
            (`Landick of Holoh3ro`), (cghImg_Alting(
                (`Tanzou of Forging`), (pickWord(
                (id_Talent.Landick_3), (1))
            ))), (`5/5a`), ("land-3"),
            ("Get, Get, CUTE IMUT!"),
        ),
    }
};
//


// !-! //

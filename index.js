function Media (mediaPx, array){
    return(`
        @media (max-width: ${mediaPx}px) {
            ${array.join(";") + ";"}
        }
    `)
}

function Px(elPx, totalPx){
    return (`calc(100vw*(${elPx}/${totalPx}))`);
}

function Width(elPx, totalPx){
    return (`width:calc(100vw*(${elPx}/${totalPx}));`);
}

function Height(elPx, totalPx){
    return (`height:calc(100vw*(${elPx}/${totalPx}));`);
}

function Top(elPx, totalPx){
    return (`top:calc(100vw*(${elPx}/${totalPx}));`);
}

function Bottom(elPx, totalPx){
    return (`bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function Left(elPx, totalPx){
    return (`left:calc(100vw*(${elPx}/${totalPx}));`);
}

function Right(elPx, totalPx){
    return (`right:calc(100vw*(${elPx}/${totalPx}));`);
}

function FontSize(elPx, totalPx){
    return (`font-size:calc(100vw*(${elPx}/${totalPx}));`);
}

function Margin(){
    if(arguments.length == 5){
        return (`margin:calc(100vw*(${arguments[0]}/${arguments[4]})) calc(100vw*(${arguments[1]}/${arguments[4]})) calc(100vw*(${arguments[2]}/${arguments[4]})) calc(100vw*(${arguments[3]}/${arguments[4]}));`);
    }else if(arguments.length == 4){
        return (`margin:calc(100vw*(${arguments[0]}/${arguments[3]})) ${arguments[1]=="auto"?`auto`:`calc(100vw*(${arguments[1]}/${arguments[3]}))`} calc(100vw*(${arguments[2]}/${arguments[3]}))`);
    }else if(arguments.length == 3){
        return (`margin:calc(100vw*(${arguments[0]}/${arguments[2]})) ${arguments[1]=="auto"?`auto`:`calc(100vw*(${arguments[1]}/${arguments[2]}))`}`);
    }
}

function MT(elPx, totalPx){
    return (`margin-top:calc(100vw*(${elPx}/${totalPx}));`);
}

function MB(elPx, totalPx){
    return (`margin-bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function ML(elPx, totalPx){
    return (`margin-left:calc(100vw*(${elPx}/${totalPx}));`);
}

function MR(elPx, totalPx){
    return (`margin-right:calc(100vw*(${elPx}/${totalPx}));`);
}

function Padding(){
    if(arguments.length == 5){
        return (`padding:calc(100vw*(${arguments[0]}/${arguments[4]})) calc(100vw*(${arguments[1]}/${arguments[4]})) calc(100vw*(${arguments[2]}/${arguments[4]})) calc(100vw*(${arguments[3]}/${arguments[4]}));`);
    }else if(arguments.length == 4){
        return (`margin:calc(100vw*(${arguments[0]}/${arguments[3]})) calc(100vw*(${arguments[1]}/${arguments[3]})) calc(100vw*(${arguments[2]}/${arguments[3]}))`);
    }else if(arguments.length == 3){
        return (`padding:calc(100vw*(${arguments[0]}/${arguments[2]})) calc(100vw*(${arguments[1]}/${arguments[2]}))`);
    }
}

function PT(elPx, totalPx){
    return (`padding-top:calc(100vw*(${elPx}/${totalPx}));`);
}

function PB(elPx, totalPx){
    return (`padding-bottom:calc(100vw*(${elPx}/${totalPx}));`);
}

function PL(elPx, totalPx){
    return (`padding-left:calc(100vw*(${elPx}/${totalPx}));`);
}

function PR(elPx, totalPx){
    return (`padding-right:calc(100vw*(${elPx}/${totalPx}));`);
}

function LineH(elPx, totalPx){
    return (`line-height:calc(100vw*(${elPx}/${totalPx}));`);
}

function BgColor(){
    if(arguments.length == 3){
        return (`background-size:calc(100vw*(${arguments[0]}/${arguments[2]})) calc(100vw*(${arguments[1]}/${arguments[2]}));`);
    }else if(arguments.length == 2){
        return (`background-size:calc(100vw*(${arguments[0]}/${arguments[1]}));`);
    }
}

export {
    Media,
    Px,
    Width,
    Height,
    Top,
    Bottom,
    Left,
    Right,
    FontSize,
    Margin,
    Padding,
    MT,
    MB,
    ML,
    MR,
    PT,
    PB,
    PL,
    PR,
    LineH,
    BgColor,
};
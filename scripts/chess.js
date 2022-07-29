const TEST = "1Q6/5pk1/2p3p1/1p2N2p/1b5P/1bn5/2r3P1/2K5"



function fenToBoard(fen) {
    fen = fen.split("/");
    let board = "";

    // convert FEN to representation with letters and spaces
    for (let row of fen) {
        for (let char of row) {
            // check whether char is number by casting to int then checking for NaN
            if (!isNaN(parseInt(char, 10))) {
                // add spaces
                board = board + (' '.repeat(parseInt(char)));
            } else {
                board = board + char;
            }
        }
        board = board + "\n";
    }

    return board.slice(0, board.length-1);
}


function HTMLRenderBoard(board) {
    // font used has to be merida

    let rawhtml = "\u{E317}"; // start w/ row number 1
    let rowChar = 0xE317;
    let bgState = true; // false is light, true is dark


    // hell: where i change the letters to chars from merida
    for (let char of board) {
        debugger;
        if (char === "\n") { // we add newline and rownum here
            console.log("here")
            rowChar = rowChar - 1;
            rawhtml = rawhtml + "<br>" + String.fromCharCode(rowChar);
        } else {
            // black magic appears here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            const pieceMap = 'kqrbnp';

            // light sq codes start with E1, black starts with 26, and codes r 4digit
            let pieceChar = bgState ? 0xE150 : 0x2650;

            if (char > 'A' && char < 'Z') { // White pieces are upper
                pieceChar = pieceChar + 0x4 + pieceMap.toUpperCase().indexOf(char);
            } else if (char > 'a' && char < 'z') {
                pieceChar = pieceChar + 0xA + pieceMap.toLowerCase().indexOf(char);
            } else {
                pieceChar = bgState ? 0x00A0 : 0xE100;
            }
            // black magic ends here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            rawhtml = rawhtml + String.fromCharCode(pieceChar);
            
        }
        bgState = !bgState;
    }

    // next, we add style and tags
    // rmb this will be from /openings/*/*
    let style = `<style>
    @font-face {
        font-family: "merida";
        src: url("./fonts/chess_merida_unicode.ttf");
    }

    .chessb {
        font-family: "merida";
        line-height: 1em;
    }
    </style>
    `
    let htmlRender = style + "<div class='chessb'>" + rawhtml + "</div>";
    return htmlRender;
}

document.getElementById("chess").innerHTML = HTMLRenderBoard(fenToBoard(TEST));
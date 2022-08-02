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
    board = board.slice(0, board.length-1);

    return HTMLBoard(board);
}


function HTMLBoard(board) {
    // font used: merida
    let rawhtml = "8"; // start w/ row number 8
    let rowChar = 8;
    let bgColour = true; // true is light, false is dark

    // change FEN notation to the charcodes
    for (let char of board) {
        if (char === "\n") { // we add newline and rownum here
            rowChar = rowChar - 1;
            rawhtml = rawhtml + "<br>" + rowChar;
        } else {
            // codepoint offset is calculated here through a combination of numbers
            // pieces is a string of letters that represent both side's pieces in the order that they appear.
            // 0x00A0 is whitespace, 0xE100 is dark sq
            // 0x2654 is where light sq pieces start, 0xE154 is where dark sq pieces start
            let pieceChar;
            const pieces = 'KQRBNPkqrbnp';
            if (char == " ") {
                pieceChar = bgColour ? 0xA0 : 0xE100;
            } else {
                pieceChar = bgColour ? (0x2654 + pieces.indexOf(char)) : (0xE154 + pieces.indexOf(char));
            }

            rawhtml = rawhtml + String.fromCharCode(pieceChar);
        }
        // flip sq colour
        bgColour = !bgColour;
    }

    // insert column indicator
    rawhtml = rawhtml + "<br>&nbsp;abcdefgh";
    
    return rawhtml;
}

function fillBoards(boards) {
    // take input of an object containing element id: fen board
    // to fill all ids with the corresp board.
    for (let e of Object.keys(boards)) {
        document.getElementById(e).innerHTML = fenToBoard(boards[e]);
    }
}
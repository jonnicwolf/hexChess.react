const pieces = {
  black: {
    bishop: 'src/assets/pieces/black/bishop.png',
    king:   'src/assets/pieces/black/king.png',
    knight: 'src/assets/pieces/black/knight.png',
    queen:  'src/assets/pieces/black/queen.png',
    pawn:   'src/assets/pieces/black/pawn.png',
    rook:   'src/assets/pieces/black/rook.png',
  },
  white: {
    bishop: 'src/assets/pieces/white/bishop.png',
    king:   'src/assets/pieces/white/king.png',
    knight: 'src/assets/pieces/white/knight.png',
    queen:  'src/assets/pieces/white/queen.png',
    pawn:   'src/assets/pieces/white/pawn.png',
    rook:   'src/assets/pieces/white/rook.png',
  }
}

const {black, white} = pieces
const newBoard = {}
const starting_position = {
  1: [
    {position: [1,1], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [1,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [1,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [1,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [1,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [1,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}} ],
  2: [
    {position: [2,1], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [2,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [2,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [2,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [2,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [2,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [2,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}} ],
  3: [
    {position: [3,1], piece: {pieceType: 'rook', pieceImgPath: black.rook, pieceColor: 'black'}},
    {position: [3,2], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [3,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [3,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [3,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [3,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [3,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [3,8], piece: {pieceType: 'rook', pieceImgPath: white.rook, pieceColor: 'white'}} ],
  4: [
    {position: [4,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight, pieceColor: 'black'}},
    {position: [4,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [4,3], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [4,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [4,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [4,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [4,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [4,8], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [4,9], piece: {pieceType: 'knight', pieceImgPath: white.pawn, pieceColor: 'white'}} ],
  5: [
    {position: [5,1], piece: {pieceType: 'king', pieceImgPath: black.king, pieceColor: 'black'}},
    {position: [5,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [5,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [5,8], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,9], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [5,10], piece: {pieceType: 'king', pieceImgPath: white.king, pieceColor: 'white'}} ],
  6: [
    {position: [6,1], piece: {pieceType: 'queen', pieceImgPath: black.bishop, pieceColor: 'black'}},
    {position: [6,2], piece: {pieceType: 'queen', pieceImgPath: black.bishop, pieceColor: 'black'}},
    {position: [6,3], piece: {pieceType: 'queen', pieceImgPath: black.bishop, pieceColor: 'black'}},
    {position: [6,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [6,5], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [6,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [6,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [6,8], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [6,9], piece: {pieceType: 'bishop', pieceImgPath: white.bishop, pieceColor: 'white'}},
    {position: [6,10], piece: {pieceType: 'bishop', pieceImgPath: white.bishop, pieceColor: 'white'}},
    {position: [6,11], piece: {pieceType: 'bishop', pieceImgPath: white.bishop, pieceColor: 'white'}} ],
  7: [
    {position: [7,1], piece: {pieceType: 'queen', pieceImgPath: black.queen, pieceColor: 'black'}},
    {position: [7,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [7,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,7], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,8], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [7,9], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [7,10], piece: {pieceType: 'queen', pieceImgPath: white.queen, pieceColor: 'white'}} ],
  8: [
    {position: [8,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight, pieceColor: 'black'}},
    {position: [8,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [8,3], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [8,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [8,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [8,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [8,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [8,8], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [8,9], piece: {pieceType: 'knight', pieceImgPath: white.knight, pieceColor: 'white'}} ],
  9: [
    {position: [9,1], piece: {pieceType: 'rook', pieceImgPath: black.rook, pieceColor: 'black'}},
    {position: [9,2], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [9,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [9,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [9,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [9,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [9,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}},
    {position: [9,8], piece: {pieceType: 'rook', pieceImgPath: white.rook, pieceColor: 'white'}} ],
  10: [
    {position: [10,1], piece: {pieceType: 'pawn', pieceImgPath: black.pawn, pieceColor: 'black'}},
    {position: [10,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [10,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [10,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [10,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [10,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [10,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn, pieceColor: 'white'}} ],
  11: [
    {position: [11,1], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [11,2], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [11,3], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [11,4], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [11,5], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}},
    {position: [11,6], piece: {pieceType: null, pieceImgPath: null, pieceColor: null}} ],
};

const pawn_move = (activeCells, board) => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[b_column][b_cell].piece.pieceType === null &&
    board[b_column][b_cell].position[0]     === board[a_column][a_cell].position[0] &&
    board[b_column][b_cell].position[1]       - board[a_column][a_cell].position[1] <= 2 ) {

    board[b_column][b_cell].piece.pieceType    = board[a_column][a_cell].piece.pieceType;
    board[b_column][b_cell].piece.pieceImgPath = board[a_column][a_cell].piece.pieceImgPath;
    board[b_column][b_cell].piece.pieceColor   = board[a_column][a_cell].piece.pieceColor;

  } else return;
}

pawn_move([[6,5],[6,6]], starting_position)

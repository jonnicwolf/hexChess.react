export const pawn_move = (activeCells, board) => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[a_column][a_cell].piece.pieceType === 'pawn' &&
    board[b_column][b_cell].piece.pieceType === null && 
    board[b_column][b_cell].position[0]     === board[a_column][a_cell].position[0] &&
    board[b_column][b_cell].position[1]       - board[a_column][a_cell].position[1] <= 2 ) {

    board[b_column][b_cell].piece.pieceType    = board[a_column][a_cell].piece.pieceType;
    board[b_column][b_cell].piece.pieceImgPath = board[a_column][a_cell].piece.pieceImgPath;
    board[b_column][b_cell].piece.pieceColor   = board[a_column][a_cell].piece.pieceColor;

  } else return;
};

export const bishop_move = (activeCells, board) => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

   if (
    board[a_column][a_cell].piece.pieceType === 'bishop' &&
    board[b_column][b_cell].piece.pieceType === null ) {
      
  }
}

export const king_move = (activeCells, board) => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[a_column][a_cell].piece.pieceType === 'king' &&
    board[b_column][b_cell].piece.pieceType === null
  ) {

  }
}

export const knight_move = () => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[a_column][a_cell].piece.pieceType === 'knight' &&
    board[b_column][b_cell].piece.pieceType === null
  ) {

  }
}

export const rook_move = () => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[a_column][a_cell].piece.pieceType === 'rook' &&
    board[b_column][b_cell].piece.pieceType === null
  ) {

  }
}

export const queen_move = () => {
  const a_coordinates = activeCells[0]
  const a_cell        = a_coordinates[1]-1
  const a_column      = a_coordinates[0]

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1]-1;
  const b_column      = b_coordinates[0];

  if (
    board[a_column][a_cell].piece.pieceType === 'queen' &&
    board[b_column][b_cell].piece.pieceType === null
  ) {

  }
}

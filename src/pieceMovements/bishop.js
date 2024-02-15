const pieces = {
  black: {
    bishop: 'src/assets/pieces/black/bishop.png',
    king: 'src/assets/pieces/black/king.png',
    knight: 'src/assets/pieces/black/knight.png',
    queen: 'src/assets/pieces/black/queen.png',
    pawn: 'src/assets/pieces/black/pawn.png',
    rook: 'src/assets/pieces/black/rook.png',
  },
  white: {
    bishop: 'src/assets/pieces/white/bishop.png',
    king:   'src/assets/pieces/white/king.png',
    knight: 'src/assets/pieces/white/knight.png',
    queen:  'src/assets/pieces/white/queen.png',
    pawn:   'src/assets/pieces/white/pawn.png',
    rook:   'src/assets/pieces/white/rook.png',
  },
};
const {black, white} = pieces;
const starting_position = {
    1: [
      {position: [1,1], piece: {pieceType: null, pieceImgPath: null}},
      {position: [1,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [1,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [1,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [1,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [1,5], piece: {pieceType: null, pieceImgPath: null}} ],
    2: [
      {position: [2,1], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [2,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}} ],
    3: [
      {position: [3,1], piece: {pieceType: 'rook', pieceImgPath: black.rook}},
      {position: [3,2], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [3,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [3,8], piece: {pieceType: 'rook', pieceImgPath: white.rook}} ],
    4: [
      {position: [4,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight}},
      {position: [4,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,3], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [4,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [4,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,9], piece: {pieceType: 'knight', pieceImgPath: white.pawn}} ],
    5: [
      {position: [5,1], piece: {pieceType: 'queen', pieceImgPath: black.queen}},
      {position: [5,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [5,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [5,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,10], piece: {pieceType: 'queen', pieceImgPath: white.queen}} ],
    6: [
      {position: [6,1], piece: {pieceType: 'bishop', pieceImgPath: black.bishop}},
      {position: [6,2], piece: {pieceType: 'bishop', pieceImgPath: black.bishop}},
      {position: [6,3], piece: {pieceType: 'bishop', pieceImgPath: black.bishop}},
      {position: [6,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,5], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [6,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [6,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,9], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}},
      {position: [6,10], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}},
      {position: [6,11], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}} ],
    7: [
      {position: [7,1], piece: {pieceType: 'king', pieceImgPath: black.king}},
      {position: [7,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [7,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,7], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,8], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [7,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,10], piece: {pieceType: 'king', pieceImgPath: white.king}} ],
    8: [
      {position: [8,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight}},
      {position: [8,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,3], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [8,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [8,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,9], piece: {pieceType: 'knight', pieceImgPath: white.knight}} ],
    9: [
      {position: [9,1], piece: {pieceType: 'rook', pieceImgPath: black.rook}},
      {position: [9,2], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [9,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [9,8], piece: {pieceType: 'rook', pieceImgPath: white.rook}} ],
    10: [
      {position: [10,1], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [10,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}} ],
    11: [
      {position: [11,1], piece: {pieceType: null, pieceImgPath: null}},
      {position: [11,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [11,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [11,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [11,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [11,6], piece: {pieceType: null, pieceImgPath: null}} ],
};

export const bishop_move = (activeCells, board) => {
  const a_coordinates = activeCells[0];
  const a_cell        = a_coordinates[1];
  const a_column      = a_coordinates[0];

  const b_coordinates = activeCells[1];
  const b_cell        = b_coordinates[1];
  const b_column      = b_coordinates[0];

  function totalCountInArrays(obj) {
    let total = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            total += obj[key].length;
        }
    }
    return total;
  }

  let all_positions = {}
  for (let column in starting_position) {
    console.log(starting_position[column])
    for (let row in starting_position[column]) {
      let current_position = starting_position[column][row].position
      if (!all_positions[current_position]) all_positions[current_position] = starting_position[column][row].position;
    };
  };

  // F-LINE 1
  let [a_column_clone_1, a_cell_clone_1, leftmost_cell_1] = [a_column, a_cell, []];
  do {
    if (a_column_clone_1 <= 1 || a_cell_clone_1 <= 1) {
      leftmost_cell_1 = leftmost_cell_1[leftmost_cell_1.length-1];
      break;
    };
    if (a_column_clone_1 <= 6) a_cell_clone_1 -= 2;
    else a_cell_clone_1--;

    a_column_clone_1--;
    leftmost_cell_1.push([a_column_clone_1, a_cell_clone_1]);
  } while (board[a_column_clone_1][a_cell_clone_1]);

  let rightmost_cell_1 = [];
  do {
    if (board[a_column_clone_1][a_cell_clone_1] === false) {
      rightmost_cell_1 = rightmost_cell_1[rightmost_cell_1.length - 1];
      break;
    }
    if (a_column_clone_1 < 6) a_cell_clone_1 += 2;
    else a_cell_clone_1++;
    
    a_column_clone_1++;
    rightmost_cell_1.push([a_column_clone_1, a_cell_clone_1]);
  } while (board[a_column_clone_1][a_cell_clone_1]);

  // F-LINE 2
  // Cells must be counted as -/1 to account for how cells are stored in the ledger
  let [a_column_clone_2,a_cell_clone_2,leftmost_cell_2] = [a_column, a_cell, null];
  do {
    if (board[a_column_clone_2][a_cell_clone_2]) {
      leftmost_cell_2 = [a_column_clone_2, a_cell_clone_2];
      console.log(leftmost_cell_2)
      console.log(board[a_column_clone_2][a_cell_clone_2])
    };
    a_column_clone_2--;
    if (a_column_clone_2 < 6) a_cell_clone_2++
    else a_cell_clone_2 += 2;
  } while (board[a_column_clone_2][a_cell_clone_2]);
  let rightmost_cell_2 = [];

  console.log(leftmost_cell_2)
  let leftmost_cell_2_clone = leftmost_cell_2
  do {
    if (leftmost_cell_2_clone[0] >= 11 || leftmost_cell_2_clone[1] <= 1) {
      break;
    };
    if ( board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]] ) {
      if (leftmost_cell_2_clone[0] < 6) {
        leftmost_cell_2_clone[0]++
        leftmost_cell_2_clone[1]--
      } else {
        leftmost_cell_2_clone[0]++
        leftmost_cell_2_clone[1]-=2
      };
      console.log(leftmost_cell_2_clone)
      rightmost_cell_2.push( leftmost_cell_2_clone );
      console.log(rightmost_cell_2)
    }
  } while (board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]]);

  // F-LINE 3
  // let [a_column_clone_3, a_cell_clone_3, leftmost_cell_3] = [a_column, a_cell, []];
  // do {
  //   if (a_column_clone_3 <= 1 || a_cell_clone_3 <= 1) {
  //     leftmost_cell_3 = leftmost_cell_3[leftmost_cell_3.length-1];
  //     break;
  //   };
  //   if (a_column_clone_3 <= 6) a_cell_clone_3 -= 2;
  //   else a_cell_clone_3--;
  //   a_column_clone_3--;
  //   leftmost_cell_3.push([a_column_clone_3, a_cell_clone_3]);
  // } while (board[a_column_clone_3][a_cell_clone_3]);
  // let rightmost_cell_3 = []
  // do {
  //   if (board[a_column_clone_3][a_cell_clone_3] === false) {
  //     rightmost_cell_3 = rightmost_cell_3[rightmost_cell_3.length - 1];
  //     break;
  //   } else a_cell_clone_3++;
  //   a_column_clone_3++;
  //   rightmost_cell_3.push([a_column_clone_3, a_cell_clone_3]);
  // } while (board[a_column_clone_3][a_cell_clone_3]);
  
  const f_line_1 = [leftmost_cell_1, ...rightmost_cell_1];
  const f_line_2 = [leftmost_cell_2, ...rightmost_cell_2];
  // const f_line_3 = [leftmost_cell_3, ...rightmost_cell_3];

  console.log(f_line_1)
  console.log(f_line_2)
  // console.log(f_line_3)
};

console.log(bishop_move([[7,6],[5,2]],starting_position)); 
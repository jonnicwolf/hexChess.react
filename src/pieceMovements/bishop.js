/**
 * This function calculates the legal moves for a bishop piece on a hex chess board.
 * It modifies the 'board' object by setting the 'highlight' property of the cells
 * that are legal moves to 'true'.
 * @param {Array} activeCells - The current position of the bishop piece.
 * @param {Object} board - A 2D array representing the chess board.
 */
export const bishop_move = (activeCells, boardSetter, board) => {
  // Extract the current position of the bishop piece
  const a_coordinates = activeCells[0];
  const a_cell        = a_coordinates[1];
  const a_column      = a_coordinates[0];

  // F-LINE 1
  // Initialize variables for the first diagonal line of cells
  let [a_column_clone_1, a_cell_clone_1, leftmost_cell_1] = [a_column, a_cell, []];
  // Loop until the leftmost cell is out of the board or is empty
  do {
    if (a_column_clone_1 <= 1 || a_cell_clone_1 <= 1) {
      leftmost_cell_1 = leftmost_cell_1[leftmost_cell_1.length-1];
      break;
    };
    // Calculate the new cell coordinates based on the current cell and direction
    if (a_column_clone_1 <= 6) a_cell_clone_1 -= 2;
    else a_cell_clone_1--;

    a_column_clone_1--;
    // Add the new cell coordinates to the leftmost_cell_1 array
    leftmost_cell_1.push([a_column_clone_1, a_cell_clone_1]);
  } while (board[a_column_clone_1][a_cell_clone_1]);

  // Initialize variables for the rightmost cell on the first diagonal line
  let rightmost_cell_1 = [];
  do {
    if (board[a_column_clone_1][a_cell_clone_1] === false) {
      rightmost_cell_1 = rightmost_cell_1[rightmost_cell_1.length - 1];
      break;
    };
    // Calculate the new cell coordinates based on the current cell and direction
    if (a_column_clone_1 < 6) a_cell_clone_1 += 2;
    else a_cell_clone_1++;

    a_column_clone_1++;
    // Add the new cell coordinates to the rightmost_cell_1 array
    rightmost_cell_1.push([a_column_clone_1, a_cell_clone_1]);
  } while (board[a_column_clone_1][a_cell_clone_1]);

  // F-LINE 2
  // Initialize variables for the second diagonal line of cells
  let [a_column_clone_2,a_cell_clone_2,leftmost_cell_2] = [a_column, a_cell, null];
  do {
    if (board[a_column_clone_2][a_cell_clone_2]) {leftmost_cell_2 = [a_column_clone_2, a_cell_clone_2] };
    // Calculate the new cell coordinates based on the current cell and direction
    a_column_clone_2--;

    if (a_column_clone_2 < 6) a_cell_clone_2++;
    else a_cell_clone_2 += 2;
  } while (board[a_column_clone_2][a_cell_clone_2]);

  // Initialize variables for the rightmost cell on the second diagonal line
  let rightmost_cell_2 = [];
  let leftmost_cell_2_clone = [...leftmost_cell_2];
  do {
    if ( board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]] ) {
      if ( leftmost_cell_2_clone[0] < 6 ) {
        leftmost_cell_2_clone[0] ++;
        leftmost_cell_2_clone[1] --;
      } else {
        leftmost_cell_2_clone[0] ++;
        leftmost_cell_2_clone[1] -= 2;
      };
      // Add the new cell coordinates to the rightmost_cell_2 array
      rightmost_cell_2.push( [leftmost_cell_2_clone[0],leftmost_cell_2_clone[1]] );
    };
    if ( leftmost_cell_2_clone[0] >= 11 || leftmost_cell_2_clone[1] <= 2 ) break;
  } while ( board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]] );

  // F-LINE 3
  // Initialize variables for the third diagonal line of cells
  let [a_column_clone_3, a_cell_clone_3, leftmost_cell_3] = [a_column, a_cell, null];

  do {
    if ( board[a_column_clone_3][a_cell_clone_3] !== undefined ) leftmost_cell_3 = [a_column_clone_3, a_cell_clone_3];
    // Calculate the new cell coordinates based on the current cell and direction
    if(a_column_clone_3 === 7) a_column_clone_3-=2;
    else {
      a_column_clone_3 -= 2;
      a_cell_clone_3 --;
    };
    if (a_column_clone_3 < 1) break;
  } while ( board[a_column_clone_3][a_cell_clone_3] !== true );

  // Initialize variables for the rightmost cell on the third diagonal line
  let rightmost_cell_3 = [];
  let leftmost_cell_3_clone = [...leftmost_cell_3];
  do {
    if ( board[leftmost_cell_3_clone[0]][leftmost_cell_3_clone[1]] ) {
      if ( leftmost_cell_3_clone[0] === 5 ) leftmost_cell_3_clone[0] += 2;
      else if ( leftmost_cell_3_clone[0] > 5 ) {
          leftmost_cell_3_clone[0] += 2;
          leftmost_cell_3_clone[1] --;
      } else {
          leftmost_cell_3_clone[0] += 2;
          leftmost_cell_3_clone[1] ++;
      };
    };
    // Add the new cell coordinates to the rightmost_cell_3 array
    rightmost_cell_3.push( [...leftmost_cell_3_clone] );
    if ( leftmost_cell_3_clone[0] > 11 ) break;
  } while ( board[leftmost_cell_3_clone[0]][leftmost_cell_3_clone[1]] );

  // Combine the leftmost and rightmost cells of each diagonal line
  const f_line_1 = [leftmost_cell_1, ...rightmost_cell_1];
  const f_line_2 = [leftmost_cell_2, ...rightmost_cell_2];
  const f_line_3 = [leftmost_cell_3, ...rightmost_cell_3];

  // Create an array of all legal cells
  const legal_cells = [...f_line_1, ...f_line_2, ...f_line_3];
  console.log(legal_cells);
  // Highlight the legal cells
  legal_cells.forEach( ([column, cell]) => {
    if ( board[column] && board[column][cell-1] ) {
      board[column][cell-1].highlight = true;
      boardSetter(board);
      // console.log(board[column][cell-1],'highlight changed')
    };
  });
};

export const bishop_move = (activeCells, board) => {
  const a_coordinates = activeCells[0];
  const a_cell        = a_coordinates[1];
  const a_column      = a_coordinates[0];

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
    };
    if (a_column_clone_1 < 6) a_cell_clone_1 += 2;
    else a_cell_clone_1++;

    a_column_clone_1++;
    rightmost_cell_1.push([a_column_clone_1, a_cell_clone_1]);
  } while (board[a_column_clone_1][a_cell_clone_1]);

  // F-LINE 2
  // Cells must be counted as -/1 to account for how cells are stored in the ledger
  let [a_column_clone_2,a_cell_clone_2,leftmost_cell_2] = [a_column, a_cell, null];
  do {
    if (board[a_column_clone_2][a_cell_clone_2]) {leftmost_cell_2 = [a_column_clone_2, a_cell_clone_2] };
    a_column_clone_2--;

    if (a_column_clone_2 < 6) a_cell_clone_2++;
    else a_cell_clone_2 += 2;
  } while (board[a_column_clone_2][a_cell_clone_2]);

  let rightmost_cell_2 = [];
  let leftmost_cell_2_clone = [...leftmost_cell_2];

  do {
    if ( board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]] ) {
      if (leftmost_cell_2_clone[0] < 6) {
        leftmost_cell_2_clone[0]++;
        leftmost_cell_2_clone[1]--;
      } else {
        leftmost_cell_2_clone[0]++;
        leftmost_cell_2_clone[1]-=2;
      };
      rightmost_cell_2.push( [leftmost_cell_2_clone[0],leftmost_cell_2_clone[1]] );
    };
    if (leftmost_cell_2_clone[0] >= 11 || leftmost_cell_2_clone[1] <= 2) break;
  } while (board[leftmost_cell_2_clone[0]][leftmost_cell_2_clone[1]]);

  // F-LINE 3
  let [a_column_clone_3, a_cell_clone_3, leftmost_cell_3] = [a_column, a_cell, null];
  do {
    if (board[a_column_clone_3][a_cell_clone_3] !== undefined) leftmost_cell_3 = [a_column_clone_3, a_cell_clone_3];
    if (a_column_clone_3 === 7) a_column_clone_3-=2;
    else {
      a_column_clone_3-=2;
      a_cell_clone_3--;
    };
    if (a_column_clone_3 < 1) break;
  } while (board[a_column_clone_3][a_cell_clone_3] !== true);

  let rightmost_cell_3 = [];
  let leftmost_cell_3_clone = [...leftmost_cell_3];
  do {
    if ( board[leftmost_cell_3_clone[0]][leftmost_cell_3_clone[1]] ) {
      if (leftmost_cell_3_clone[0] === 5) {
        leftmost_cell_3_clone[0]+=2;
      } else if (leftmost_cell_3_clone[0] > 5) {
          leftmost_cell_3_clone[0]+=2;
          leftmost_cell_3_clone[1]--;
      } else {
          leftmost_cell_3_clone[0]+=2;
          leftmost_cell_3_clone[1]++;
      };
    };
    if (leftmost_cell_3_clone[0] > 11) break;
    rightmost_cell_3.push([...leftmost_cell_3_clone]);
  } while (board[leftmost_cell_3_clone[0]][leftmost_cell_3_clone[1]]);

  const f_line_1 = [leftmost_cell_1, ...rightmost_cell_1];
  const f_line_2 = [leftmost_cell_2, ...rightmost_cell_2];
  const f_line_3 = [leftmost_cell_3, ...rightmost_cell_3];

  const legal_cells = [...f_line_1, ...f_line_2, ...f_line_3];
  legal_cells.forEach(([column, cell]) => {
    if (board[column] && board[column][cell-1]) {
      board[column][cell].highlight = true;
    }
  });
};

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

  function find_line_90() {
    let [column, cell, legal_cells, leftmost_cell] = [a_column, a_cell, [], []];

    do {
      const is_valid_cell = board[column] && board[column][cell];
      if (!is_valid_cell) {
        leftmost_cell.pop();
        leftmost_cell = leftmost_cell[leftmost_cell.length-1];
        break
      }; // Exit the loop if cell is invalid
  
      if (column === 7) {
        column -= 2;
        leftmost_cell.push([column, cell]);
      } else {
        column -= 2;
        cell--;
        leftmost_cell.push([column, cell]);
      }
    } while (true); // Run the loop until break

    legal_cells.push(leftmost_cell);
    column = leftmost_cell[0];
    cell = leftmost_cell[1];

    do {
      const is_valid_cell = board[column] && board[column][cell];
      if (!is_valid_cell || column === 11) break;

      column += 2;
      if (column % 2 === 0) {
        if (column >= 6) {
          cell--;
          legal_cells.push([column, cell]);
        } else {
          cell++;
          legal_cells.push([column, cell]);
        };
      } else {
        if (column === 7) legal_cells.push([column,cell])
        else if (column > 5) {
          cell--;
          legal_cells.push([column, cell]);
        } else {
          cell++
          legal_cells.push([column,cell]);
        };
      };
    } while (true);
    return legal_cells;
  };

  console.log(find_line_90());


  // function find_line_90 () {
  //   let [column, cell, legal_cells, leftmost_cell] = [a_column, a_cell, [], null];
  //   const is_valid_cell = board[column][cell];
  //   console.log(is_valid_cell);
    
  //   do {
  //     if ( column === 5 || column === 7) {
  //       console.log('first if ran')
  //       column -= 2;
  //       leftmost_cell = [column, cell];
  //       console.log(leftmost_cell)
  //       console.log(is_valid_cell)
  //       continue
  //     } else {
  //       column -= 2;
  //       cell--;
  //       leftmost_cell = [column, cell];
  //     }
  //     console.log(is_valid_cell);
  //   } while (is_valid_cell);

    // legal_cells.push(leftmost_cell);

    // do {
    //   column+=2;
    //   cell++;
    //   legal_cells.push( [column, cell] );
    // } while (is_valid_cell);    
    // return legal_cells;
  }

  // function find_line_330 () {
  //   let [column, cell, legal_cells, leftmost_cell] = [a_column, a_cell, [], null];
  //   const is_valid_cell = board[column][cell];
  //   do {
  //     column--;
  //     if ( column < 6 ) cell-=2;
  //     else cell--;
  //     leftmost_cell = [column, cell];
  //   } while (is_valid_cell);

  //   legal_cells.push(leftmost_cell);

  //   do {
  //     column++;
  //     if ( column < 6 ) cell += 2;
  //     else cell++;
  //     legal_cells.push( [column, cell] );
  //   } while (is_valid_cell);
  //   console.log(legal_cells);
  //   return legal_cells;
  // };

  // function find_line_30 () {
  //   let [column, cell, legal_cells, leftmost_cell] = [a_column, a_cell, [], null];
  //   const is_valid_cell = board[column][cell];
  //   do {
  //     column--;
  //     if ( column > 6 ) cell += 2;
  //     else cell++;
  //     leftmost_cell = [column, cell];
  //   } while (is_valid_cell);

  //   legal_cells.push(leftmost_cell);

  //   do {
  //     column++;
  //     if ( column > 6 ) cell -= 2;
  //     else cell--;
  //     legal_cells.push([column, cell]);
  //   } while (is_valid_cell);
  //   return legal_cells;
  // };

  // const line_330 = find_line_330();
  // const line_30 = find_line_30();

  // const valid_cells = [...line_30, ...line_330, ...line_90];
  // valid_cells.forEach( ([column, cell]) => {
  //   console.log(`column, ${column}, cell, ${cell}`)
  //   if ( board[column] && board[column][cell-1] ) {
  //     board[column][cell-1].highlight = !board[column][cell-1].highlight;
  //     boardSetter(board);
  //   };
  // });
//};




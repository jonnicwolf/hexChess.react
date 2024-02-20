import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { starting_position } from './Board_obj.jsx';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

// import { pawn_move } from './pieceMovements';
import { bishop_move } from '../pieceMovements/bishop.js'

const Board = () => {
  const earthTones = ['#FFA177','#E0BC6E','#949C73'];
  const funkyMoss = ['#44634D','#EC5082','#1e4d3b'];
  const kungFu = ['red', 'dimgrey', '#d1b488'];
  const leanne = ['#fc03be', '#fc8c03', 'purple'];
  const classic = ['lightGrey', 'darkGrey', 'slateGrey'];
  const smileOrange = ['#fc8e08','#9fa19f','#8a5413'];
  const currentPalette = classic;

  const [board, setBoard] = useState(starting_position);
  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    if (activeCells.length === 1) {
      bishop_move(activeCells, setBoard, board)
      // console.log(board)
    }
    if (activeCells.length > 2) setActiveCells([]);
    if (activeCells.length === 2) {
      //fire out which cells are being touched ✅
      const a_coordinates = activeCells[0]
      const a_cell        = a_coordinates[1]-1
      const a_column      = a_coordinates[0]

      const b_coordinates = activeCells[1];
      const b_cell        = b_coordinates[1]-1;
      const b_column      = b_coordinates[0];
      //figure out what piece if any is present ✅
      let a_piece = board[a_column][a_cell].piece.pieceType
      //once we have a piece/s we can determine if its a move or an attack
      switch (board[b_column][b_cell].pieceType !== null) {
        case 'bishop':
          console.log('move finder ran')
          bishop_move(activeCells, setBoard, board);
          break;
        case 'king':
          // Statements executed when the result of expression matches value2
          break;
        case 'knight':
          // Statements executed when the result of expression matches value2
          break;
        case 'pawn':
          // pawn_move(activeCells,board);
          break;
        case 'rook':
          // Statements executed when the result of expression matches value2
          break;
        case 'queen':
          // Statements executed when the result of expression matches value2
          break;
        // You can have any number of case statements
        default:
          // Statements executed if none of the cases match the expression
      };
    };
  },[activeCells, board]);
  console.log(board['1'], `board['1']`)

  return (
    <Container>
      <Row1
        translatex={130}
        translatey={220}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['1']}/>
      <Row2
        translatex={104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['2']}/>
      <Row3
        translatex={78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['3']}/>
      <Row4 
        translatex={52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['4']}/>
      <Row5 
        translatex={26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['5']}/>
      <Row6
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['6']}/>
      <Row5
        translatex={-26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['7']}/>
      <Row4
        translatex={-52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['8']}/>
      <Row3
        translatex={-78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['9']}/>
      <Row2
        translatex={-104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['10']}/>
      <Row1
        translatex={-130}
        translatey={220}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['11']}/>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default Board;

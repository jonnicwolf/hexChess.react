import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Row from './BoardRows/Row';
import MiddleRow from './BoardRows/MiddleRow';

// import { pawn_move } from './pieceMovements';
import { starting_position } from './Board_obj.jsx';
import { bishop_move } from '../pieceMovements/bishop.js'

const Board = () => {
  const earthTones = ['#FFA177','#E0BC6E','#949C73'];
  const funkyMoss = ['#44634D','#EC5082','#1e4d3b'];
  const kungFu = ['red', 'dimgrey', '#d1b488'];
  const leanne = ['#fc03be', '#fc8c03', 'purple'];
  const classic = ['lightGrey', 'darkGrey', 'slateGrey'];
  const smileOrange = ['#fc8e08','#9fa19f','#8a5413'];
  const currentPalette = earthTones;

  const [board, setBoard] = useState(starting_position);
  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    if (activeCells.length === 1) {
      bishop_move(activeCells, setBoard, board)
    }
    if (activeCells.length > 2) setActiveCells([]);
    else if (activeCells.length > 0 && activeCells[0] === activeCells[1]) setActiveCells([]);

    if (activeCells.length === 2) {
      // Find out which cells are being touched
      const a_coordinates = activeCells[0]
      const a_cell        = a_coordinates[1]-1
      const a_column      = a_coordinates[0]

      const b_coordinates = activeCells[1];
      const b_cell        = b_coordinates[1]-1;
      const b_column      = b_coordinates[0];
      // Find out what piece if any is present
      let a_piece = board[a_column][a_cell].piece.pieceType
    };
  },[activeCells, board]);

  console.log(activeCells, 'board')

  return (
    <Container>
      <Row
        translatex={130}
        translatey={220}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['1']}/>
      <Row
        translatex={104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['2']}/>
      <Row
        translatex={78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['3']}/>
      <Row 
        translatex={52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['4']}/>
      <Row 
        translatex={26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['5']}/>
      <MiddleRow
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['6']}/>
      <Row
        translatex={-26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['7']}/>
      <Row
        translatex={-52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['8']}/>
      <Row
        translatex={-78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['9']}/>
      <Row
        translatex={-104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={board['10']}/>
      <Row
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

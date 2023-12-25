import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

import { pawn_move } from './pieceMovements';

const Board = () => {
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
      {position: [5,1], piece: {pieceType: 'king', pieceImgPath: black.king}},
      {position: [5,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [5,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [5,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,10], piece: {pieceType: 'king', pieceImgPath: white.king}} ],
    6: [
      {position: [6,1], piece: {pieceType: 'queen', pieceImgPath: black.bishop}},
      {position: [6,2], piece: {pieceType: 'queen', pieceImgPath: black.bishop}},
      {position: [6,3], piece: {pieceType: 'queen', pieceImgPath: black.bishop}},
      {position: [6,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,5], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [6,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,7], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [6,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,9], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}},
      {position: [6,10], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}},
      {position: [6,11], piece: {pieceType: 'bishop', pieceImgPath: white.bishop}} ],
    7: [
      {position: [7,1], piece: {pieceType: 'queen', pieceImgPath: black.queen}},
      {position: [7,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,4], piece: {pieceType: 'pawn', pieceImgPath: black.pawn}},
      {position: [7,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,7], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,8], piece: {pieceType: 'pawn', pieceImgPath: white.pawn}},
      {position: [7,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,10], piece: {pieceType: 'queen', pieceImgPath: white.queen}} ],
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
          // Statements executed when the result of expression matches value1
          break;
        case 'king':
          // Statements executed when the result of expression matches value2
          break;
        case 'knight':
          // Statements executed when the result of expression matches value2
          break;
        case 'pawn':
          pawn_move(activeCells,board);
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
      }
      //run a case for move:
        //figure out what the piece is on a_cell
        //figure out if the move is legal
        //run correct function to move it
      //run a case for atk: 
        //figure out if there's a blocking piece in the path
        //if yes, alert player that atk is illegal
    };
  },[activeCells]);

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

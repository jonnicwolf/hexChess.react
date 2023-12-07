import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

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
      {position: [2,1], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [2,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [2,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}} ],
    3: [
      {position: [3,1], piece: {pieceType: 'b_rook', pieceImgPath: black.rook}},
      {position: [3,2], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [3,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [3,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [3,8], piece: {pieceType: 'w_rook', pieceImgPath: white.rook}} ],
    4: [
      {position: [4,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight}},
      {position: [4,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,3], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [4,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [4,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [4,9], piece: {pieceType: 'w_knight', pieceImgPath: white.pawn}} ],
    5: [
      {position: [5,1], piece: {pieceType: 'b_king', pieceImgPath: black.king}},
      {position: [5,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,4], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [5,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [5,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [5,10], piece: {pieceType: 'w_king', pieceImgPath: white.king}} ],
    6: [
      {position: [6,1], piece: {pieceType: 'b_bishop', pieceImgPath: black.bishop}},
      {position: [6,2], piece: {pieceType: 'b_bishop', pieceImgPath: black.bishop}},
      {position: [6,3], piece: {pieceType: 'b_bishop', pieceImgPath: black.bishop}},
      {position: [6,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,5], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [6,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [6,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [6,9], piece: {pieceType: 'w_bishop', pieceImgPath: white.bishop}},
      {position: [6,10], piece: {pieceType: 'w_bishop', pieceImgPath: white.bishop}},
      {position: [6,11], piece: {pieceType: 'w_bishop', pieceImgPath: white.bishop}} ],
    7: [
      {position: [7,1], piece: {pieceType: 'b_queen', pieceImgPath: black.queen}},
      {position: [7,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,4], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [7,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,7], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,8], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [7,9], piece: {pieceType: null, pieceImgPath: null}},
      {position: [7,10], piece: {pieceType: 'w_queen', pieceImgPath: white.queen}} ],
    8: [
      {position: [8,1], piece: {pieceType: 'b_knight', pieceImgPath: black.knight}},
      {position: [8,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,3], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [8,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [8,8], piece: {pieceType: null, pieceImgPath: null}},
      {position: [8,9], piece: {pieceType: 'w_knight', pieceImgPath: white.knight}} ],
    9: [
      {position: [9,1], piece: {pieceType: 'b_rook', pieceImgPath: black.rook}},
      {position: [9,2], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [9,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [9,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}},
      {position: [9,8], piece: {pieceType: 'w_rook', pieceImgPath: white.rook}} ],
    10: [
      {position: [10,1], piece: {pieceType: 'b_pawn', pieceImgPath: black.pawn}},
      {position: [10,2], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,3], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,4], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,5], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,6], piece: {pieceType: null, pieceImgPath: null}},
      {position: [10,7], piece: {pieceType: 'w_pawn', pieceImgPath: white.pawn}} ],
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
      if (board[activeCells[1]] === '') {
        
      };
    }
  },[activeCells]);

  return (
    <Container>
      <Row1
        translatex={130}
        translatey={220}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.a}/>
      <Row2
        translatex={104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.b}/>
      <Row3
        translatex={78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.c}/>
      <Row4 
        translatex={52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.d}/>
      <Row5 
        translatex={26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.e}/>
      <Row6
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.f}/>
      <Row5
        translatex={-26}
        translatey={44}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.g}/>
      <Row4
        translatex={-52}
        translatey={88}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.h}/>
      <Row3
        translatex={-78}
        translatey={132}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.i}/>
      <Row2
        translatex={-104}
        translatey={176}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.k}/>
      <Row1
        translatex={-130}
        translatey={220}
        colorPalette={currentPalette}
        activeCellsSet={setActiveCells}
        activeCellsGet={activeCells}
        pieces={starting_position.l}/>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default Board;

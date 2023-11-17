import React, { useState } from 'react';

import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

const Board = () => {
  const [board, setBoard] = useState({});
  const [activeCells, setActiveCells] = useState([]);

  const starting_position = {
    a: ['','','','','',''],
    b: ['src/assets/pieces/black/pawn.png','','','','','','src/assets/pieces/white/pawn.png'],
    c: ['src/assets/pieces/black/rook.png','src/assets/pieces/black/pawn.png', '','','','','src/assets/pieces/white/pawn.png','src/assets/pieces/white/rook.png'],
    d: ['src/assets/pieces/black/knight.png','','src/assets/pieces/black/pawn.png','','','','src/assets/pieces/white/pawn.png','','src/assets/pieces/white/knight.png'],
    e: ['src/assets/pieces/black/king.png','','','src/assets/pieces/black/pawn.png','','','src/assets/pieces/white/pawn.png','','','src/assets/pieces/white/king.png'],
    f: ['src/assets/pieces/black/bishop.png','src/assets/pieces/black/bishop.png','src/assets/pieces/black/bishop.png','','src/assets/pieces/black/pawn.png','','src/assets/pieces/white/pawn.png','','src/assets/pieces/white/bishop.png','src/assets/pieces/white/bishop.png','src/assets/pieces/white/bishop.png'],
    g: ['src/assets/pieces/black/queen.png','','','src/assets/pieces/black/pawn.png','','','src/assets/pieces/white/pawn.png','','','src/assets/pieces/white/queen.png'],
    h: ['src/assets/pieces/black/knight.png','','src/assets/pieces/black/pawn.png','','','','src/assets/pieces/white/pawn.png','','src/assets/pieces/white/knight.png'],
    i: ['src/assets/pieces/black/rook.png','src/assets/pieces/black/pawn.png','','','','','src/assets/pieces/white/pawn.png','src/assets/pieces/white/rook.png'],
    k: ['src/assets/pieces/black/pawn.png','','','','','','src/assets/pieces/white/pawn.png'],
    l: ['','','','','',''],
  }

  const earthTones = ['#FFA177','#E0BC6E','#949C73'];
  const funkyMoss = ['#44634D','#EC5082','#1B3E31'];
  const kungFu = ['red', 'dimgrey', 'navajowhite'];
  const leanne = ['#fc03be', '#fc8c03', 'purple'];
  const classic = ['white', 'grey', 'black'];
  const smileOrange = ['#fc8e08','#9fa19f','#8a5413'];

  const currentPalette = kungFu;

  return (
    <Container>
      <Row1
        translatex={124}
        translatey={219}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.a}/>
      <Row2
        translatex={99}
        translatey={175}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.b}/>
      <Row3
        translatex={75}
        translatey={131}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.c}/>
      <Row4 
        translatex={50}
        translatey={87}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.d}/>
      <Row5 
        translatex={25}
        translatey={43}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.e}/>
      <Row6 colorPalette={currentPalette} pieces={starting_position.f}/>
      <Row5
        translatex={-25}
        translatey={43}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.g}/>
      <Row4
        translatex={-50}
        translatey={87}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.h}/>
      <Row3
        translatex={-75}
        translatey={131}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.i}/>
      <Row2
        translatex={-99}
        translatey={175}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.k}/>
      <Row1
        translatex={-124}
        translatey={219}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}
        pieces={starting_position.l}/>
    </Container>
  );
};

const Container = styled.div`
border: 1px solid red;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default Board;

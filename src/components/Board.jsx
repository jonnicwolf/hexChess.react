import React, { useState } from 'react';

import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

import bishop from '../assets/pieces/bishop';



const Board = () => {
  const [board, setBoard] = useState({});
  const [activeCells, setActiveCells] = useState([]);
  const starting_position = {
    a1: bishop,
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    d7: '',
    d8: '',
    d9: '',
    e1: '',
    e2: '',
    e3: '',
    e4: '',
    e5: '',
    e6: '',
    e7: '',
    e8: '',
    e9: '',
    e10: '',
    f1: '',
    f2: '',
    f3: '',
    f4: '',
    f5: '',
    f6: '',
    f7: '',
    f8: '',
    f9: '',
    f10: '',
    f11: '',
    g1: '',
    g2: '',
    g3: '',
    g4: '',
    g5: '',
    g6: '',
    g7: '',
    g8: '',
    g9: '',
    g10: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    h7: '',
    h8: '',
    h9: '',
    i1: '',
    i2: '',
    i3: '',
    i4: '',
    i5: '',
    i6: '',
    i7: '',
    i8: '',
    j1: '',
    j2: '',
    j3: '',
    j4: '',
    j5: '',
    j6: '',
    j7: '',
    k1: '',
    k2: '',
    k3: '',
    k4: '',
    k5: '',
    k6: '',
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
        activeCellsSetter={setActiveCells}/>
      <Row2
        translatex={99}
        translatey={175}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row3
        translatex={75}
        translatey={131}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row4 
        translatex={50}
        translatey={87}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row5 
        translatex={25}
        translatey={43}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row6 colorPalette={currentPalette} activeCellsSetter={setActiveCells}/>
      <Row5
        translatex={-25}
        translatey={43}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row4
        translatex={-50}
        translatey={87}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row3
        translatex={-75}
        translatey={131}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row2
        translatex={-99}
        translatey={175}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
      <Row1
        translatex={-124}
        translatey={219}
        colorPalette={currentPalette}
        activeCellsSetter={setActiveCells}/>
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

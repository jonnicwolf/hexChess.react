import React from 'react';
import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

const Board = () => {
  const earthTones = ['#949C73', '#E0BC6E', '#FFA177'];
  const funkyMoss = ['#44634D', '#EC5082', '#1B3E31'];
  const kungFu = ['navajowhite', 'dimgrey', 'red'];

  const currentPalette = funkyMoss;
  return (
    <Container>
      <Row1 translatex={131}  colorPalette={currentPalette}/>
      <Row2 translatex={105}  colorPalette={currentPalette}/>
      <Row3 translatex={79}   colorPalette={currentPalette}/>
      <Row4 translatex={53}   colorPalette={currentPalette}/>
      <Row5 translatex={26.3} colorPalette={currentPalette}/>
      <Row6 colorPalette={currentPalette}/>
      <Row5 translatex={-26.3} colorPalette={currentPalette}/>
      <Row4 translatex={-53}   colorPalette={currentPalette}/>
      <Row3 translatex={-79}   colorPalette={currentPalette}/>
      <Row2 translatex={-105}  colorPalette={currentPalette}/>
      <Row1 translatex={-131}  colorPalette={currentPalette}/>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 900px;
`;

export default Board;

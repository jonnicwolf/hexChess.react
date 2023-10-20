import React from 'react';
import styled from 'styled-components';
import Row1 from './BoardRows/Row1';
import Row2 from './BoardRows/Row2';
import Row3 from './BoardRows/Row3';
import Row4 from './BoardRows/Row4';
import Row5 from './BoardRows/Row5';
import Row6 from './BoardRows/Row6';

const Board = () => {
  return (
    <Container>
      <Row1 translatex={131}/>
      <Row2 translatex={105}/>
      <Row3 translatex={79}/>
      <Row4 translatex={53}/>
      <Row5 translatex={26.3}/>
      <Row6 />
      <Row5 translatex={-26.3}/>
      <Row4 translatex={-53}/>
      <Row3 translatex={-79}/>
      <Row2 translatex={-105}/>
      <Row1 translatex={-131}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  
  padding: 10px;
  border: 1px solid red;
`;

export default Board;
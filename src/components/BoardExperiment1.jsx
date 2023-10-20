import React from 'react';
import styled from 'styled-components';
import Row1Exp from './BoardRowsExperiment1.jsx/Row1Exp';
import Row2 from './BoardRowsExperiment1.jsx/Row2';
import Row3 from './BoardRowsExperiment1.jsx/Row3';
import Row4 from './BoardRowsExperiment1.jsx/Row4';
import Row5 from './BoardRowsExperiment1.jsx/Row5';
import Row6 from './BoardRowsExperiment1.jsx/Row6';

const BoardExperiment1 = () => {
  return (
    <Container>
      <Row1Exp translatex={131}/>
      {/* <Row2 translatex={105}/>
      <Row3 translatex={79}/>
      <Row4 translatex={53}/>
      <Row5 translatex={26.3}/>
      <Row6 />
      <Row5 translatex={-26.3}/>
      <Row4 translatex={-53}/>
      <Row3 translatex={-79}/>
      <Row2 translatex={-105}/>
      <Row1 translatex={-131}/> */}
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

export default BoardExperiment1;
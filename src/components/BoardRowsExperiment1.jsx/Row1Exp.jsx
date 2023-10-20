import React from 'react';
import styled from 'styled-components';
import HexagonExperiment1 from '../HexagonExperiment1';

const Row1Exp = ({translatex}) => {
  return (
    <Container translatex={translatex}>
      <HexagonExperiment1/>
      <HexagonExperiment1/>
      <HexagonExperiment1/>
      <HexagonExperiment1/>
      <HexagonExperiment1/>
      <HexagonExperiment1/>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, 214.5px);
`;

export default Row1Exp;

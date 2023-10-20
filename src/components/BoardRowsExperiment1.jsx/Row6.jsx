import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row6 = () => {
  return (
    <Container>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>

      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
      <Hexagon/>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export default Row6;

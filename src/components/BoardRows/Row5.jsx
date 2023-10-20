import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row5 = ({ translatex }) => {
  return (
    <Container translatex={translatex}>
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
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, 42px);
`;

export default Row5;

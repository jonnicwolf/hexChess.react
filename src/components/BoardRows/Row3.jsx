import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row3 = ({ translatex, colorPalette }) => {
  function renderElements(count) {
    let color
    const elements = [];
    for (let i = 0; i < count; i++) {
      const colorIndex = (i + 2) % colorPalette.length;
      color = colorPalette[colorIndex];
      elements.push(<Hexagon key={`${i}`} color={color} />)}
    return elements;
  };

  return (
    <Container translatex={translatex}>
      {renderElements(8)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, 128px);
`;

export default Row3;

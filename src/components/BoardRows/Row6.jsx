import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row6 = ({ colorPalette }) => {
  function renderElements(count) {
    let color;
    const elements = [];
    for (let i = 0; i < count; i++) {
      const colorIndex = (i + 2) % colorPalette.length;
      color = colorPalette[colorIndex];
      elements.push(<Hexagon key={`${i}`} color={color} />)
    };
    return elements;
  };

  return (
    <Container>
      {renderElements(11)}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export default Row6;

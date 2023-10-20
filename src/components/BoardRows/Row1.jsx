import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row1 = ({translatex, colorPalette}) => {
  function renderElements(count) {
    let color
    const elements = [];
    for (let i = 0; i < count; i++) {
      color = colorPalette[i % colorPalette.length];
      elements.push(<Hexagon key={`${i}`} color={color} />);
    }
    return elements;
  };

  return (
    <Container translatex={translatex}>
      {renderElements(6)}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, 214.5px);
`;

export default Row1;

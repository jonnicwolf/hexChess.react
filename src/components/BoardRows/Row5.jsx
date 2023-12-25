import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row5 = ({
  translatex,
  translatey,
  colorPalette,
  activeCellsSet,
  activeCellsGet,
  pieces }) => {
  function renderElements(count) {
    let color
    const elements = [];
    for (let i = 0; i < count; i++) {
      const colorIndex = (i + 1) % colorPalette.length;
      color = colorPalette[colorIndex];
      elements.push(
        <Hexagon
          key={`${i}`}
          color={color}
          cellID={pieces[i].position}
          piece={pieces[i].piece.pieceImgPath}
          activeCellsSet={activeCellsSet}
          activeCellsGet={activeCellsGet} />
      );
    };
    return elements;
  };

  return (
    <Container translatex={translatex} translatey={translatey}>
      {renderElements(10)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, ${props => props.translatey}px);
`;

export default Row5;

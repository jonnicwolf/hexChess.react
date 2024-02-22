import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const MiddleRow = React.memo(({
  colorPalette,
  activeCellsSet,
  activeCellsGet,
  pieces }) => {

  function renderElements(count) {
    let color;
    const elements = [];
    for (let i = 0; i < count; i++) {
      const colorIndex = (i + 2) % colorPalette.length;
      color = colorPalette[colorIndex];
      elements.push(
        <Hexagon
          key={`${i}`}
          color={color}
          cellId={pieces[i].position}
          piece={pieces[i].piece.pieceImgPath}
          highlight={pieces[i].highlight}
          activeCellsSet={activeCellsSet}
          activeCellsGet={activeCellsGet} />
      );
    };
    return elements;
  };

  return (
    <Container>
      {renderElements(11)}
    </Container>
  )
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export default MiddleRow;

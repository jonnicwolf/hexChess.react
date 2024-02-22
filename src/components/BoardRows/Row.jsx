import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row1 = React.memo(({
  translatex,
  translatey,
  colorPalette,
  activeCellsSet,
  activeCellsGet,
  pieces }) => {

  function render_elements(count) {
    let color
    const elements = [];

    function calc_count (count) {
      let counter = count;
      if (counter > 8) {
        counter = counter % 3;
        return counter;
      } else return (counter % 6);
    };

    const counter = calc_count(count);
    for (let i = 0; i < count; i++) {
      color = colorPalette[(i + counter) % colorPalette.length];
      elements.push(
        <Hexagon
          key={`${i}`}
          color={color}
          cellID={pieces[i].position}
          piece={pieces[i].piece.pieceImgPath}
          highlight={pieces[i].highlight}
          hex_activeCellSetter={activeCellsSet}
          hex_activeCells={activeCellsGet} />
      );
    };
    return elements;
  };

  return (
    <Container translatex={translatex} translatey={translatey}>
      {render_elements(pieces.length)}
    </Container>
  )
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, ${props => props.translatey}px);
`;

export default Row1;

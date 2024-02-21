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

  function renderElements(count) {
    let color
    const elements = [];
    // console.log('1',pieces[3].highlight, 'pieces 3 highlight', pieces[3])
    // console.log('2','yo')
    // if (activeCellsGet.length ===1) console.log('3',activeCellsGet, pieces[activeCellsGet[1]],'activecells')
    for (let i = 0; i < count; i++) {
      color = colorPalette[i % colorPalette.length];
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
      {renderElements(6)}
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

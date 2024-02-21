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
    // console.log('1',pieces[3].highlight, 'pieces 3 highlight', pieces[3])
    // console.log('2','yo')
    console.log(activeCellsGet, 'activeCells get')
    console.log(activeCellsGet.length, 'length', typeof activeCellsGet)
    if (activeCellsGet.length === 1) {
      // console.log(activeCellsGet[0],'activeCellsget @1')
      console.log(pieces[activeCellsGet[0][1]-1].highlight, 'bor')
    }
    console.log(pieces)

    // if (activeCellsGet.length ===1) console.log('3',activeCellsGet, pieces[activeCellsGet[1]],'activecells')

    for (let i = 0; i < count; i++) {
      const colorIndex = (i + 1) % colorPalette.length;
      color = colorPalette[colorIndex];
      elements.push(
        <Hexagon
          key={`${i}`}
          color={color}
          cellID={pieces[i].position}
          piece={pieces[i].piece.pieceImgPath}
          highlight={pieces[i].highlight}
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

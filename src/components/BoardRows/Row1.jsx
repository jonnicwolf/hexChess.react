import React, { useEffect } from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon';

const Row1 = ({ 
  $translatex,
  $translatey,
  colorPalette,
  activeCellsSet,
  activeCellsGet,
  pieces }) => {

  useEffect(()=> {
    console.log('row1 get',activeCellsGet)
    console.log('row1 set',activeCellsSet)
  },[])
  function renderElements(count) {
    let color
    const elements = [];
    for (let i = 0; i < count; i++) {
      color = colorPalette[i % colorPalette.length];
      elements.push(
        <Hexagon 
          key={`${i}`}
          color={color}
          cellID={`a${i}`}
          piece={pieces[i]}
          hex_activeCellSetter={activeCellsSet}
          hex_activeCells={activeCellsGet} />
      );
    };
    return elements;
  };

  return (
    <Container translatex={$translatex} translatey={$translatey}>
      {renderElements(6)}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  transform: translate(${props => props.translatex}px, ${props => props.translatey}px);
`;

export default Row1;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Hexagon = ({ 
  color,
  cellID,
  piece,
  highlight,
  activeCellsSet,
  activeCellsGet }) => {

  const [isTouched, setTouch] = useState(false);
  const canvasRef = useRef(null);
  // console.log(highlight, 'line 14')

  // drawing the hexagon
  function draw_hexagon (highlight, color) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the center and radius of the hexagon
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    // Calculate the coordinates of the six points of the hexagon
    const xPoints = [];
    const yPoints = [];
    for (let i = 0; i < 6; i++) {
      xPoints.push(centerX + radius * Math.cos((2 * Math.PI * i) / 6));
      yPoints.push(centerY + radius * Math.sin((2 * Math.PI * i) / 6));
    };

    // Run drawing logic
    const hex_color = highlight ? 'red' : 'black';
    const hex_fillStyle = 
      isTouched && activeCellsGet.length <= 2
        ? '#fae57f'
        : highlight ? 'red' : color;
    const hex_lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(xPoints[0], yPoints[0]);
    for (let i = 1; i < 6; i++) ctx.lineTo(xPoints[i], yPoints[i]);
    ctx.closePath();
    ctx.strokeStyle = hex_color;
    ctx.lineWidth = hex_lineWidth;
    ctx.fillStyle = hex_fillStyle;
    ctx.stroke();
    ctx.fill();
  }

  useEffect(() => {
    draw_hexagon(highlight, color);
  }, [isTouched, activeCellsGet, color, highlight]);

  function handleClick () {
    if (activeCellsGet.length <= 2) setTouch(!isTouched);
    activeCellsSet([...activeCellsGet, cellID]);
  };

  return (
    <Container onClick={handleClick}>
      <HexagonCanvas
        ref={canvasRef}
        id="hexagon"
        width={100}
        height={88} />
      <Img src={piece} />
    </Container>
  );
};

const Container = styled.div`
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  height: 50px;
  position: absolute;
  z-index: 1;
`;
const HexagonCanvas = styled.canvas`
  border: none;
  z-index: 0;
  clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0% 50%
  );
`;

export default Hexagon;

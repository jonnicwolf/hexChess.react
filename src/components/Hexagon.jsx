import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import bishop from "../assets/pieces/bishop";

const Hexagon = ({color, cellID, pieceImg}) => {
  const [isTouched, setTouch] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the center and radius of the hexagon
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // const radius = 97.5;
    const radius = 50;

    // Calculate the coordinates of the six points of the hexagon
    const xPoints = [];
    const yPoints = [];
    for (let i = 0; i < 6; i++) {
      xPoints.push(centerX + radius * Math.cos((2 * Math.PI * i) / 6));
      yPoints.push(centerY + radius * Math.sin((2 * Math.PI * i) / 6));
    };

    // drawing the hexagon
    ctx.beginPath();
    ctx.moveTo(xPoints[0], yPoints[0]);
    for (let i = 1; i < 6; i++) { ctx.lineTo(xPoints[i], yPoints[i]) };
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.fillStyle = isTouched ? '#fae57f' : color;
    ctx.stroke();
    ctx.fill();
  }, [isTouched]);

  return (
    <Container>
      <HexagonCanvas
        ref={canvasRef}
        id="hexagon"
        width={100}
        height={88}
        onClick={()=> setTouch(!isTouched)}>
      </HexagonCanvas>
      <Img src="src/assets/pieces/icons8-bishop-solid-glyph-32.png" alt="foo" />

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
  z-index: 1;
  position: absolute;
`;
const HexagonCanvas = styled.canvas`
  border: none;
  z-index: 0;
`;

export default Hexagon;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Hexagon = ({color, cellID}) => {
  const [isTouched, setTouch] = useState(false);
  console.log('isTouched', isTouched);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the center and radius of the hexagon
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 97.5;

    // Calculate the coordinates of the six points of the hexagon
    const xPoints = [];
    const yPoints = [];
    for (let i = 0; i < 6; i++) {
      xPoints.push(centerX + radius * Math.cos((2 * Math.PI * i) / 6));
      yPoints.push(centerY + radius * Math.sin((2 * Math.PI * i) / 6));
    }

    // Start drawing the hexagon
    ctx.beginPath();
    ctx.moveTo(xPoints[0], yPoints[0]);
    for (let i = 1; i < 6; i++) { ctx.lineTo(xPoints[i], yPoints[i]) };
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.fillStyle = isTouched ? '#fae57f' : color;
    ctx.stroke();
    ctx.fill();
  }, [isTouched]);

  return (
    <HexagonCanvas
      ref={canvasRef}
      id="hexagon"
      width={200}
      height={172}
      onClick={()=> setTouch(!isTouched)} />
  );
};

const HexagonCanvas = styled.canvas`
  border: none;
`;

export default Hexagon;

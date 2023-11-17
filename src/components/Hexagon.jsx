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

    // load and draw the image
    const img = new Image();
    img.src = bishop;
    img.onload = () => {
      // adjust these values to position your image correctly
      const imgX = centerX - img.width / 2;
      const imgY = centerY - img.height / 2;
      ctx.drawImage(img, imgX, imgY);
    };
  }, [isTouched]);

  return (
    <HexagonCanvas
      ref={canvasRef}
      id="hexagon"
      width={100}
      height={88}
      onClick={()=> setTouch(!isTouched)}>
    </HexagonCanvas>
  );
};

const HexagonCanvas = styled.canvas`
  border: none;
  // border: 1px solid red;
  // opacity: 0.1;
`;

export default Hexagon;

import { Ref, RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { container } from "webpack";
//start of styled-components
interface CanvasStyledProps {
  h: number;
  w: number;
}
const CanvasStyled = styled.canvas<CanvasStyledProps>`
  height: ${(props) => props.h}px;
  width: ${(props) => props.w}px;
`;
//end of styled-components
// types------------
type SaleArray = number[];
interface ChartDataType {
  sales: SaleArray;
}
type coordinates = [number, number];
// end of types-----

// canvas utility functions---------
function createPointsFromData(
  canvas: HTMLCanvasElement,
  data: ChartDataType,
  maxSale: number
) {
  const height = canvas.clientHeight;
  const width = canvas.clientWidth;
  const salesData = data.sales;
  const XaxisUnits = width / (salesData.length - 1);
  const points: coordinates[] = [];
  for (let i = 0; i < salesData.length; i++) {
    const x = XaxisUnits * i;
    const y = (salesData[i] / maxSale) * height;
    const invertedY = height - y;
    points.push([x, invertedY]);
  }
  return points;
}
function DrawAView(
  context: CanvasRenderingContext2D,
  data: coordinates[],
  color: string
) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.imageSmoothingEnabled = true;
  context.lineJoin = "round";
  context.lineCap = "round";
  //   context.scale(5, 5);
  for (let i = 0; i < data.length - 1; i++) {
    context.moveTo(data[i][0], data[i][1]);
    context.lineTo(data[i + 1][0], data[i + 1][1]);
    context.stroke();
  }
}
// end of canvas utility functions--
function Canvas({
  parentRef,
  data,
}: {
  parentRef: RefObject<HTMLDivElement | null>;
  data: ChartDataType[];
}) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    setHeight(parentRef.current ? parentRef.current.clientHeight : 0);
    setWidth(parentRef.current ? parentRef.current.clientWidth : 0);
  }, [parentRef.current]);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const maxSale = Math.max(...data[0].sales, ...data[1].sales);
      const pointsArrayForCurrentPeriod = createPointsFromData(
        canvas,
        data[0],
        maxSale
      );
      const pointsArraForPastPeriod = createPointsFromData(
        canvas,
        data[1],
        maxSale
      );
      if (context) {
        DrawAView(context, pointsArraForPastPeriod, theme.colors.gray[500]);
        DrawAView(context, pointsArrayForCurrentPeriod, theme.colors.blue[700]);
      }
    }
  }, [canvasRef.current, data]);
  return (
    <CanvasStyled
      ref={canvasRef}
      height={height}
      width={width}
      h={height}
      w={width}
    ></CanvasStyled>
  );
}

export default Canvas;

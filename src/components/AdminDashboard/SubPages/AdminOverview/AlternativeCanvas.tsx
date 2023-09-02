import { Ref, RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { container } from "webpack";
import Two from "two.js";
import { createSearchParams } from "react-router-dom";
import { Anchor } from "two.js/src/anchor";
//start of styled-components

const CanvasStyled = styled.div`
  height: 100%;
  width: 100%;
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
  canvas: HTMLDivElement,
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
function DrawAView(two: Two, data: coordinates[], color: string) {
  const listOfVertices: Anchor[] = [];
  for (let i = 0; i < data.length; i++) {
    const Vertices = new Two.Anchor(data[i][0], data[i][1]);
    listOfVertices.push(Vertices);
  }
  const Path = new Two.Path(listOfVertices);
  Path.stroke = color;
  Path.linewidth = 3;
  Path.cap = "round";
  Path.fill = "transparent";
  two.add(Path);
  two.update();
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
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(setup, [canvasRef.current, height, width]);
  useEffect(() => {
    setHeight(parentRef.current ? parentRef.current.clientHeight : 0);
    setWidth(parentRef.current ? parentRef.current.clientWidth : 0);
  }, [parentRef.current]);
  function setup() {
    if (!canvasRef.current) {
      return;
    }
    var two = new Two({
      autostart: true,
      type: Two.Types.svg,
      width: width,
      height: height,
    }).appendTo(canvasRef.current);
    const maxSale = Math.max(...data[0].sales, ...data[1].sales);
    const firstDataArray = createPointsFromData(
      canvasRef.current,
      data[0],
      maxSale
    );
    const secondDataArray = createPointsFromData(
      canvasRef.current,
      data[1],
      maxSale
    );
    DrawAView(two, firstDataArray, theme.colors.gray[500]);
    DrawAView(two, secondDataArray, theme.colors.blue[700]);

    return unmount;

    function unmount() {
      if (!canvasRef.current) return;
      two.unbind("update");
      two.pause();
      canvasRef.current.removeChild(two.renderer.domElement);
    }
  }
  return <CanvasStyled ref={canvasRef}></CanvasStyled>;
}

export default Canvas;

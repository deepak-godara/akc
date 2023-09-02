import styled from "styled-components";
// import Canvas from "./Canvas";
import Canvas from "./AlternativeCanvas";
import { useRef } from "react";
import { ChartData } from "./main";
// start of styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const VerticalAxisContainer = styled.div`
  height: 100%;
  padding-bottom: 2.0938rem;
  display: flex;
  flex-direction: column;
`;
const VerticalAxisInnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;
const HighestDaySale = styled.div`
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const LowestPossibleSale = styled(HighestDaySale)`
  margin-bottom: 0.5938rem;
`;
const HorizontalAxisDivider = styled.div`
  height: 0.0313rem;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const ChartAndHorizontalAxisContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const ChartCanvasContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 1.125rem;
  margin-left: 1.9688rem;
  margin-top: 0.625rem;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;
const XAxisPointsContainer = styled.div`
  display: flex;
`;
const StartDayPoint = styled.div`
  width: 1.9375rem;
  height: 0.625rem;
  border-right: 0.0313rem solid ${(props) => props.theme.colors.gray[500]};
`;
const EndDayPoint = styled.div`
  flex-grow: 1;
  height: 0.625rem;
  border-right: 0.0313rem solid ${(props) => props.theme.colors.gray[500]};
`;
const XAxisPointValueContainer = styled.div`
  display: flex;
  margin-top: 0.2188rem;
`;
const Placeholder = styled.div`
  width: 1.9375rem;
`;
const StartAndEndDayPointValues = styled.div`
  flex-grow: 1;
  height: 0.625rem;
  line-height: 1.25rem;
  height: 1.25rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.gray[600]};
`;
// end of styled components
function Chart({ data }: { data: ChartData }) {
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container>
      <VerticalAxisContainer>
        <VerticalAxisInnerContainer>
          <HighestDaySale>€2.247,31</HighestDaySale>
          <LowestPossibleSale>€0,00</LowestPossibleSale>
        </VerticalAxisInnerContainer>
        <HorizontalAxisDivider />
      </VerticalAxisContainer>
      <ChartAndHorizontalAxisContainer>
        <ChartCanvasContainer ref={canvasContainerRef}>
          <Canvas parentRef={canvasContainerRef} data={data} />
        </ChartCanvasContainer>
        <HorizontalAxisDivider />
        <XAxisPointsContainer>
          <StartDayPoint />
          <EndDayPoint />
        </XAxisPointsContainer>
        <XAxisPointValueContainer>
          <Placeholder />
          <StartAndEndDayPointValues>
            <div>2 jun</div>
            <div>Today</div>
          </StartAndEndDayPointValues>
        </XAxisPointValueContainer>
      </ChartAndHorizontalAxisContainer>
    </Container>
  );
}

export default Chart;

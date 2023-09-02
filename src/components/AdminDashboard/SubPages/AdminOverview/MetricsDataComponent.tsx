import styled from "styled-components";

// start of styled-components
const Container = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 10px;
  padding: 1.875rem 1.9063rem;
  background: #ffffff;
`;
const MetricsHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MetricHeading = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const MetricPercentageChange = styled.div`
  width: 3.25rem;
  height: 1.3125rem;
  background: ${(props) => props.theme.colors.green[600]}26;
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.green[600]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 0.75rem;
`;
const MetricsData = styled.div`
  font-size: 1.75rem;
  line-height: 2.4375rem;
  font-weight: 700;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const MetricPastPeriodData = styled.div`
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[600]};
`;
// end of styled components
function MetricsDataComponent({
  heading,
  percentIncrease,
  value,
  pastPeriodValue,
}: {
  heading: string;
  percentIncrease: number;
  value: number;
  pastPeriodValue: number;
}) {
  return (
    <Container>
      <MetricsHeadingContainer>
        <MetricHeading>{heading}</MetricHeading>
        <MetricPercentageChange>{percentIncrease}%</MetricPercentageChange>
      </MetricsHeadingContainer>
      <MetricsData>{value}</MetricsData>
      <MetricPastPeriodData>{pastPeriodValue} past period</MetricPastPeriodData>
    </Container>
  );
}

export default MetricsDataComponent;

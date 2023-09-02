import styled from "styled-components";
import MetricsDataComponent from "./MetricsDataComponent";
import mockSalesData from "@lib/testData/mockSalesData";
import Chart from "./Chart";
import { util } from "@lib/util";
import { OverviewDataType } from "./main";
// start of styled-components
const Container = styled.div`
  height: 29.3125rem;
  margin-top: 1.875rem;
  padding: 3.375rem 4.0625rem 3.6875rem 3.125rem;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;
const ChartComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChartHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ChartHeading = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
interface SalesPercentageChangePropType {
  $positive: boolean;
}
const SalesPercentageChange = styled.div<SalesPercentageChangePropType>`
  width: 3.25rem;
  height: 1.3125rem;
  background: ${(props) =>
    props.$positive
      ? props.theme.colors.green[600]
      : props.theme.colors.red[500]}26;
  font-size: 0.625rem;
  color: ${(props) =>
    props.$positive
      ? props.theme.colors.green[600]
      : props.theme.colors.red[500]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 0.75rem;
`;
const TotalSales = styled.div`
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.4375rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const LastPeriodTotalSales = styled.div`
  line-height: 1.25rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const ChartContainer = styled.div`
  width: 602px;
  flex-grow: 1;
  display: flex;
  margin-top: 1.6875rem;
`;
const MetricsComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 10.125rem;
  width: 100%;
  gap: 30px;
  margin-left: 2rem;
  padding: 0 2rem;
`;

// end of styled components
function DataComponent({ data }: { data: OverviewDataType }) {
  return (
    <Container>
      <ChartComponent>
        <ChartHeadingContainer>
          <ChartHeading>Sales</ChartHeading>
          <SalesPercentageChange $positive={data.sales.percentageChange >= 0}>
            {`${data.sales.percentageChange >= 0 ? "+" : ""}${
              data.sales.percentageChange
            }%`}
          </SalesPercentageChange>
        </ChartHeadingContainer>
        <TotalSales>{util.convertCurrency(data.sales.thisPeriod)}</TotalSales>
        <LastPeriodTotalSales>
          {util.convertCurrency(data.sales.lastPeriod)}
        </LastPeriodTotalSales>
        <ChartContainer>
          <Chart data={data.chartData} />
        </ChartContainer>
      </ChartComponent>
      <MetricsComponent>
        {data.metricsData.map((item, index) => {
          return <MetricsDataComponent {...item} key={index} />;
        })}
      </MetricsComponent>
    </Container>
  );
}

export default DataComponent;

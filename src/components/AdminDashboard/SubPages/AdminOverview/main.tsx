import styled from "styled-components";
import DataComponent from "./DataComponent";
import { FaAngleDown, FaCalendar } from "react-icons/fa6";
import UniversitiesMetrics from "./UniversitiesMetrics";
import GreetingComponent from "@components/CommonComponents/GreetingComponent";
import { useSelector } from "react-redux";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
import { useEffect, useState } from "react";
import { getAdminOverview } from "@API/services/Data/getAdminOverview";
import { ReactToast } from "@lib/toast";
import { mapAdminOverviewData } from "@lib/mapperFunctions/mapAdminOverviewData";
import LoadingScreen from "@components/LoadingScreen";
import sampleUniversity from "@images/sample-university.png";
import { OverviewtableData } from "./Table/main";
// start of styled-components
const Container = styled.div``;

const HeadingAndFilterContainer = styled.div`
  margin-top: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const SubHeading = styled.h2`
  font-size: 1.375rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const FileterContainer = styled.div`
  display: flex;
`;
const DaysFilter = styled.div`
  height: 2.875rem;
  background: #ffffff;
  color: ${(props) => props.theme.colors.gray[800]};
  padding: 0rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11.625rem;
  font-size: 1.125rem;
  border-radius: 10px 0px 0px 10px;
`;
const DateFilter = styled(DaysFilter)`
  margin-left: 2px;
  border-radius: 0px 10px 10px 0px;
`;

// end of styled-components
export interface OverviewDataType {
  sales: {
    thisPeriod: number;
    lastPeriod: number;
    percentageChange: number;
  };
  metricsData: UnitData[];
  chartData: ChartData;
  tableData: OverviewtableData[];
}
interface UnitData {
  heading: string;
  percentIncrease: number;
  value: number;
  pastPeriodValue: number;
}
export type ChartData = { sales: number[] }[];
const data: OverviewDataType = {
  sales: {
    thisPeriod: 1293.03,
    lastPeriod: 10692.69,
    percentageChange: -23,
  },
  metricsData: [
    { heading: "Orders", percentIncrease: 21, value: 109, pastPeriodValue: 83 },
    {
      heading: "Promo Clicks",
      percentIncrease: 21,
      value: 731,
      pastPeriodValue: 420,
    },
    { heading: "Courses", percentIncrease: 21, value: 12, pastPeriodValue: 8 },
    {
      heading: "Students",
      percentIncrease: 21,
      value: 6301,
      pastPeriodValue: 6245,
    },
  ],
  chartData: [
    { sales: [0, 0, 0, 800, 0, 0] },
    { sales: [200, 300, 600, 500, 900, 1000] },
  ],
  tableData: [
    {
      id: "0",
      UniversityName: "ABC University",
      Orders: 50,
      PromoClicks: 200,
      Courses: 30,
      Students: 500,
      Sales: 1500,
      image: sampleUniversity,
    },
    {
      id: "1",
      UniversityName: "XYZ University",
      Orders: 25,
      PromoClicks: 100,
      Courses: 20,
      Students: 300,
      Sales: 800,
      image: sampleUniversity,
    },
    {
      id: "3",
      UniversityName: "123 University",
      Orders: 80,
      PromoClicks: 300,
      Courses: 40,
      Students: 1000,
      Sales: 2500,
      image: sampleUniversity,
    },
    {
      id: "4",
      UniversityName: "123 University",
      Orders: 80,
      PromoClicks: 300,
      Courses: 40,
      Students: 1000,
      Sales: 2500,
      image: sampleUniversity,
    },
    {
      id: "5",
      UniversityName: "123 University",
      Orders: 80,
      PromoClicks: 300,
      Courses: 40,
      Students: 1000,
      Sales: 2500,
      image: sampleUniversity,
    },
    {
      id: "6",
      UniversityName: "123 University",
      Orders: 80,
      PromoClicks: 300,
      Courses: 40,
      Students: 1000,
      Sales: 2500,
      image: sampleUniversity,
    },
  ],
};
function AdminOverview() {
  const userInfo = useSelector(selectUser);
  const [adminData, setAdminData] = useState<OverviewDataType>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setOverviewData();
  }, []);
  async function setOverviewData() {
    const res = await getAdminOverview(7);
    if (res.success) {
      try {
        const formattedData = mapAdminOverviewData(res.data);
        setAdminData(formattedData);
        setLoading(false);
      } catch (e) {
        ReactToast("There was an error in formatting data");
      }
    } else {
      ReactToast("Error in getting overview data");
    }
  }
  return !loading ? (
    <Container>
      <GreetingComponent
        username={userInfo.name ? userInfo.name : "there"}
        message="Here is a report from the past period."
      />
      <HeadingAndFilterContainer>
        <SubHeading>
          <span style={{ fontWeight: 700 }}>Overview&nbsp;</span>all
          universities
        </SubHeading>
        <FileterContainer>
          <DaysFilter>
            Last 7 days <FaAngleDown />
          </DaysFilter>
          <DateFilter>
            <FaCalendar style={{ height: "1.125rem", width: "1.125rem" }} />2
            Jul&nbsp;-&nbsp;8 Jul
          </DateFilter>
        </FileterContainer>
      </HeadingAndFilterContainer>
      {/* @ts-ignore */}
      <DataComponent data={adminData} />
      {/* @ts-ignore */}
      <UniversitiesMetrics data={adminData} />
    </Container>
  ) : (
    <LoadingScreen />
  );
}

export default AdminOverview;

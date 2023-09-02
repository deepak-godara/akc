import { OverviewDataType } from "@components/AdminDashboard/SubPages/AdminOverview/main";
import { AdminOverviewDataType } from "@lib/Types/AdminData/AdminOverviewData";
import SampleImage from "@images/sample-university-2.png";
export const mapAdminOverviewData = (
  data: AdminOverviewDataType
): OverviewDataType => {
  const byUniversity = data.aggregatedByUniversity;
  const byGroup = data.groupByUniversity;
  return {
    sales: {
      thisPeriod: byUniversity.sales.thisPeriodValue,
      lastPeriod: byUniversity.sales.lastPeriodValue,
      percentageChange: byUniversity.sales.changeSinceLastPeriodPercentage,
    },
    metricsData: [
      {
        heading: "Orders",
        percentIncrease: byUniversity.orders.changeSinceLastPeriodPercentage,
        value: byUniversity.orders.thisPeriodValue,
        pastPeriodValue: byUniversity.orders.lastPeriodValue,
      },
      //   {
      //     heading: "Promo Clicks",
      //     percentIncrease: byUniversity.promoClicks.changeSinceLastPeriod,
      //     value: byUniversity.orders.thisPeriodValue,
      //     pastPeriodValue: byUniversity.promoClicks.lastPeriodValue,
      //   },
      {
        heading: "Courses",
        percentIncrease: byUniversity.courses.changeSinceLastPeriod,
        value: byUniversity.courses.thisPeriodValue,
        pastPeriodValue: byUniversity.courses.lastPeriodValue,
      },
      //   {
      //     heading: "Students",
      //     percentIncrease: byUniversity.students.changeSinceLastPeriod,
      //     value: byUniversity.students.thisPeriodValue,
      //     pastPeriodValue: byUniversity.students.lastPeriodValue,
      //   },
    ],
    chartData: [
      { sales: [0, 0, 0, 800, 0, 0] },
      { sales: [200, 300, 600, 500, 900, 1000] },
    ],
    tableData: byGroup.map((item) => ({
      id: item.university.id.toString(),
      UniversityName: item.university.universityName,
      Sales: item.sales.thisPeriodValue,
      Orders: item.orders.thisPeriodValue,
      PromoClicks: item.promoClicks ? item.promoClicks : 0,
      Courses: item.courses.thisPeriodValue,
      Students: item.students ? item.students : 0,
      image: SampleImage,
    })),
  };
};

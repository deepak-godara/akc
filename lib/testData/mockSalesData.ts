const SalesData: UnitData[] = [
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
];
export default SalesData;

interface UnitData {
  heading: string;
  percentIncrease: number;
  value: number;
  pastPeriodValue: number;
}
interface TimeSeriesData {
  [key: string]: string;
}

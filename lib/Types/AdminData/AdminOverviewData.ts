export interface AdminOverviewDataType {
  groupByUniversity: GroupByUniversity[];
  aggregatedByUniversity: AggregatedByUniversity;
}

export interface AggregatedByUniversity {
  sales: Courses;
  orders: Orders;
  promoClicks: PromoClicks;
  courses: Courses;
  students: Students;
}

export interface Courses {
  thisPeriodValue: number;
  lastPeriodValue: number;
  changeSinceLastPeriod: number;
  changeSinceLastPeriodPercentage: number;
  timeUnitValue: null | string;
  thisPeriodTimeSeriesData: PeriodTimeSeriesData | null;
  lastPeriodTimeSeriesData: PeriodTimeSeriesData | null;
}
export interface Students {
  thisPeriodValue: number;
  lastPeriodValue: number;
  changeSinceLastPeriod: number;
  changeSinceLastPeriodPercentage: number;
  timeUnitValue: null | string;
  thisPeriodTimeSeriesData: PeriodTimeSeriesData | null;
  lastPeriodTimeSeriesData: PeriodTimeSeriesData | null;
}
export interface PromoClicks {
  thisPeriodValue: number;
  lastPeriodValue: number;
  changeSinceLastPeriod: number;
  changeSinceLastPeriodPercentage: number;
  timeUnitValue: null | string;
  thisPeriodTimeSeriesData: PeriodTimeSeriesData | null;
  lastPeriodTimeSeriesData: PeriodTimeSeriesData | null;
}
export interface PeriodTimeSeriesData {}

export interface Orders {
  thisPeriodValue: number;
  lastPeriodValue: number;
  changeSinceLastPeriod: number;
  changeSinceLastPeriodPercentage: number;
  timeUnitValue: null;
  thisPeriodTimeSeriesData: PeriodTimeSeriesData | null;
  lastPeriodTimeSeriesData: PeriodTimeSeriesData | null;
}

export interface GroupByUniversity {
  university: University;
  orders: Orders;
  promoClicks: null;
  courses: Orders;
  students: null;
  sales: Orders;
}

export interface University {
  id: number;
  universityName: string;
  universityLogoUrl: string;
}

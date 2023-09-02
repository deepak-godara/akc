import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { OverviewDataType } from "@components/AdminDashboard/SubPages/AdminOverview/main";
import { AdminOverviewDataType } from "@lib/Types/AdminData/AdminOverviewData";
import { mapAdminOverviewData } from "@lib/mapperFunctions/mapAdminOverviewData";

type AdminCourseOverviewType =
  | {
      success: true;
      data: AdminOverviewDataType;
    }
  | {
      success: false;
      data: string;
    };

export const getAdminOverview = async function (
  days: number
): Promise<AdminCourseOverviewType> {
  const url = urlFunctions.getAdminOverView(days);
  const res = await API.sendGetRequest(url, true);
  if (res.success) {
    const data: AdminOverviewDataType = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting course list",
    };
  }
};

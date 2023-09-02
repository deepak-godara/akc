import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { APIAdminCourseView } from "@lib/Types/API/APIAdminCourseView";

type AdminCourseViewType =
  | {
      success: true;
      data: APIAdminCourseView[];
    }
  | {
      success: false;
      data: string;
    };

export const getAdminCourseList =
  async function (): Promise<AdminCourseViewType> {
    const url = urlFunctions.getAdminCourseList();
    const res = await API.sendGetRequest(url, true);
    if (res.success) {
      const data: APIAdminCourseView[] = res.data;
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

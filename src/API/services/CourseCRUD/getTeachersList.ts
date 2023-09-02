import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { TeacherList } from "@lib/Types/API/FormData/FormData";

type TeacherListType =
  | {
      success: true;
      data: TeacherList;
    }
  | {
      success: false;
      data: string;
    };

export const getTeachersList = async function (): Promise<TeacherListType> {
  const url = urlFunctions.getTeachersList();
  const res = await API.sendGetRequest(url, true);
  if (res.success) {
    const data: TeacherList = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting study list",
    };
  }
};

import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { StudyList } from "@lib/Types/API/FormData/FormData";

type StudyListType =
  | {
      success: true;
      data: StudyList;
    }
  | {
      success: false;
      data: string;
    };

export const getStudyList = async function (): Promise<StudyListType> {
  const url = urlFunctions.getStudyList();
  const res = await API.sendGetRequest(url);
  if (res.success) {
    const data: StudyList = res.data;
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

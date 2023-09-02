import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { CourseSearchList } from "@lib/Types/API/APICourseSearchList";

type CourseSearchListType =
  | {
      success: true;
      data: CourseSearchList;
    }
  | {
      success: false;
      data: string;
    };

export const getCourseSearchList = async function (
  universityId: string | undefined,
  studyId: string | undefined,
  groupId: string | undefined
): Promise<CourseSearchListType> {
  const url = urlFunctions.getSearchResult(universityId, studyId, groupId);
  const res = await API.sendGetRequest(url);
  if (res.success) {
    const data: CourseSearchList = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting search list",
    };
  }
};

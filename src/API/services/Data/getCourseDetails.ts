import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { APICourseResponse } from "@lib/Types/API/APICourseResponse";

type CourseDetailsType =
  | {
      success: true;
      data: APICourseResponse;
    }
  | {
      success: false;
      data: string;
    };

export const getCourseDetails = async function (
  id: string
): Promise<CourseDetailsType> {
  const url = urlFunctions.getCourseDetails(id);
  const res = await API.sendGetRequest(url);
  if (res.success) {
    const data: APICourseResponse = res.data;
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

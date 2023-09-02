import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { AddCourseFormSubmitDataType } from "@lib/Types/AddCourseFormSubmitType";
import { mapFormToAPI } from "@lib/mapperFunctions/mapFormToAPI";
import { ReactToast } from "@lib/toast";

type createCourseResponseType =
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      data: string;
    };

export const createCourse = async function (
  data: AddCourseFormSubmitDataType
): Promise<createCourseResponseType> {
  const formattedData = mapFormToAPI(data);
  const url = urlFunctions.createCourse();
  const res = await API.sendPostRequest(url, formattedData, true);
  if (res.success) {
    return {
      success: true,
      data: null,
    };
  } else {
    return {
      success: false,
      data: "Could not create course try again",
    };
  }
};

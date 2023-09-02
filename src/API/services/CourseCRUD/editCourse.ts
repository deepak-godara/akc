import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { AddCourseFormSubmitDataType } from "@lib/Types/AddCourseFormSubmitType";
import { mapFormToAPI } from "@lib/mapperFunctions/mapFormToAPI";

type editCourseResponseType =
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      data: string;
    };

export const editCourse = async function (
  data: AddCourseFormSubmitDataType,
  id: string
): Promise<editCourseResponseType> {
  const formattedData = mapFormToAPI(data);
  console.log("edited data", formattedData);
  const url = urlFunctions.editCourse(id);
  const res = await API.sendPutRequest(url, formattedData, true);
  if (res.success) {
    return {
      success: true,
      data: null,
    };
  } else {
    return {
      success: false,
      data: "Could not edit course try again",
    };
  }
};

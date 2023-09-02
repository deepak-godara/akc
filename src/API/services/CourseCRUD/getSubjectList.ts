import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { subjectList } from "@lib/Types/API/FormData/FormData";

type SubjectListType =
  | {
      success: true;
      data: subjectList;
    }
  | {
      success: false;
      data: string;
    };

export const getSubjectList = async function (): Promise<SubjectListType> {
  const url = urlFunctions.getSubjectList();
  const res = await API.sendGetRequest(url);
  if (res.success) {
    const data: subjectList = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting subject list",
    };
  }
};

import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { UniversityList } from "@lib/Types/API/FormData/FormData";

type UniversityListType =
  | {
      success: true;
      data: UniversityList;
    }
  | {
      success: false;
      data: string;
    };

export const getUniversityList =
  async function (): Promise<UniversityListType> {
    const url = urlFunctions.getUniversityList();
    const res = await API.sendGetRequest(url);
    if (res.success) {
      const data: UniversityList = res.data;
      return {
        success: true,
        data: data,
      };
    } else {
      return {
        success: false,
        data: "There was an error in getting university list",
      };
    }
  };

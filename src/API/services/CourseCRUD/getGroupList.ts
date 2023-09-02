import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { GroupList } from "@lib/Types/API/FormData/FormData";

type GroupListType =
  | {
      success: true;
      data: GroupList;
    }
  | {
      success: false;
      data: string;
    };

export const getGroupList = async function (): Promise<GroupListType> {
  const url = urlFunctions.getGroupList();
  const res = await API.sendGetRequest(url);
  if (res.success) {
    const data: GroupList = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting group list",
    };
  }
};

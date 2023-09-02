import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { eventTypeList } from "@lib/Types/API/FormData/FormData";

type eventListType =
  | {
      success: true;
      data: eventTypeList;
    }
  | {
      success: false;
      data: string;
    };

export const getEventTypeList = async function (): Promise<eventListType> {
  const url = urlFunctions.getEventType();
  const res = await API.sendGetRequest(url, true);
  if (res.success) {
    const data: eventTypeList = res.data;
    return {
      success: true,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "There was an error in getting event list",
    };
  }
};

import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { APIUserInfo } from "@lib/Types/API/APIuserinfo";

type UserInfoType =
  | {
      success: true;
      data: APIUserInfo;
    }
  | {
      success: false;
      data: string;
    };

export const getUserProfile = async function (): Promise<UserInfoType> {
  const url = urlFunctions.getUserInfo();

  const res = await API.sendGetRequest(url, true);
  if (res.success) {
    const data: APIUserInfo = res.data;
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

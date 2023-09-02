import { UserRole, userInfo } from "@app/redux/slices/userSlice";
import { APIUserInfo } from "@lib/Types/API/APIuserinfo";
import SampleUserImage from "@images/demo-teacher-image.png";
export const mapAPidatatoUserInfo = function (data: APIUserInfo): userInfo {
  return {
    loggedIn: true,
    role: data.role,
    userId: data.id.toString(),
    name: data.name,
    profileUrl: data.profilePicUrl ? data.profilePicUrl : SampleUserImage,
  };
};

import { verifyToken } from "@API/services/Auth/main";
import { getUserProfile } from "@API/services/Data/getUserProfile";
import { userSlice } from "@app/redux/slices/userSlice";
import { mapAPidatatoUserInfo } from "@lib/mapperFunctions/mapAPidatatoUserInfo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function useLogin() {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    tryToLogin();
  }, []);
  async function tryToLogin() {
    const tokenValidity = await verifyToken();
    if (tokenValidity) {
      const userInfo = await getUserProfile();
      if (userInfo.success) {
        const formattedData = mapAPidatatoUserInfo(userInfo.data);
        dispatch(userSlice.actions.setUserInfo(formattedData));
        setLogin(true);
      }
    }
    setLoading(false);
  }
  return [loading, login];
}

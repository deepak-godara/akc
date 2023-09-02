import { API } from "@API/API";
import { urlFunctions } from "@API/functions/createUrl";
import { LoignSuccessful } from "@lib/Types/API/Auth";
import Cookies from "js-cookie";

export async function signupWithPassword(
  name: string,
  email: string,
  password: string
): Promise<boolean> {
  const url = urlFunctions.signupUrl();
  const res = await API.sendPostRequest(url, {
    name,
    email,
    password,
  });
  if (res.success) {
    const login = await loginWithPassword(email, password);
    return login;
  }
  return false;
}

export async function loginWithPassword(
  email: string,
  password: string
): Promise<boolean> {
  const url = urlFunctions.loginUrl();
  const res = await API.sendPostRequest(url, {
    email,
    password,
  });
  if (res.success) {
    const data: LoignSuccessful = res.data;
    Cookies.set("token", data.accessToken);
    return true;
  }
  return false;
}
export async function verifyToken(): Promise<boolean> {
  const token = Cookies.get("token");
  if (!token) {
    return false;
  } else {
    const url = urlFunctions.verifyToken(token);
    const res = await API.sendGetRequest(url);
    if (res.success) {
      const success: boolean = await res.data;
      return success;
    }
    return false;
  }
}

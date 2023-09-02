import Cookies from "js-cookie";

type APIResponse =
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      data: string;
    };

export const API = {
  async sendPostRequest(
    url: string,
    data: any,
    auth?: true
  ): Promise<APIResponse> {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not post" };
    }
  },
  async sendGetRequest(url: string, auth?: true) {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    const res = await fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not Get" };
    }
  },
  async sendPutRequest(
    url: string,
    data: any,
    auth?: true
  ): Promise<APIResponse> {
    if (auth) {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Not Authorised");
      }
    }
    const token = Cookies.get("token");
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, data: data };
    } else {
      return { success: false, data: "Could not put" };
    }
  },
};

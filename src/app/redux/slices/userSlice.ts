import { createAction, createSlice } from "@reduxjs/toolkit";
import { getActionCreatorName } from "../util/getActionCreatorName";

export enum UserRole {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEAHCER = "TEACHER",
}
export interface userInfo {
  loggedIn: boolean;
  role: UserRole | undefined;
  userId: string | undefined;
  name: string | undefined;
  profileUrl: string | undefined;
}

const initialState: userInfo = {
  loggedIn: false,
  role: undefined,
  userId: undefined,
  name: undefined,
  profileUrl: undefined,
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.profileUrl = action.payload.profileUrl;
    },
  },
});

const actionNames = getActionCreatorName(userSlice);

// Custom action creators

function setUserInfoActionCreatorCallback(loggedIn: false): {
  payload: userInfo;
};
function setUserInfoActionCreatorCallback(
  loggedIn: boolean,
  role?: UserRole,
  userId?: string,
  name?: string,
  profileUrl?: string
): { payload: userInfo } {
  if (loggedIn === true) {
    return {
      payload: {
        loggedIn,
        role,
        userId,
        name,
        profileUrl,
      },
    };
  } else {
    return {
      payload: {
        loggedIn,
        role: undefined,
        userId: undefined,
        name: undefined,
        profileUrl: undefined,
      },
    };
  }
}
export const setUserInfoActionCreator = createAction(
  actionNames.setUserInfo,
  setUserInfoActionCreatorCallback
);

// ------------------------------

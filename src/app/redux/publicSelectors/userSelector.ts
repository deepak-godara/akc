import { RootState } from "@app/redux/store";

export const selectUser = (state: RootState) => state.userInfo;

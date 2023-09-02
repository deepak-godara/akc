import { UserRole } from "@app/redux/slices/userSlice";

export const redirectUri = {
  [UserRole.ADMIN]: "/admin-dashboard",
  [UserRole.STUDENT]: "/dashboard",
  [UserRole.TEAHCER]: "/dashboard",
};

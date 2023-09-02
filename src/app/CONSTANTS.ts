import { UserRole } from "@app/redux/slices/userSlice";

export const dashboardUri: Record<UserRole, string> = {
  [UserRole.STUDENT]: "/dashboard",
  [UserRole.ADMIN]: "/admin-dashboard",
  [UserRole.TEAHCER]: "/teacher-dashboard",
};

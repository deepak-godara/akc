import { UserRole } from "@app/redux/slices/userSlice";
export interface APIUserInfo {
  id: number;
  email: string;
  name: string;
  profilePicUrl: null | string;
  authenticationProvider: string;
  userProfile: UserProfile;
  role: UserRole;
  providerId: null;
}

export interface UserProfile {
  id: number;
  language: null;
  university: null;
  courseStudy: null;
  courseSubject: null;
  currentGrade: null;
  stageOfProfile: null;
  smartPoints: number;
  referredBy: null;
  referredDate: null;
}

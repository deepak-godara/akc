interface University {
  id: number;
  universityName: string;
  universityLogoUrl: string;
}
export type UniversityList = University[];

interface Study {
  id: number;
  name: string;
}
export type StudyList = Study[];

interface Group {
  id: number;
  name: string;
}

export type GroupList = Group[];

export type TeacherList = Teacher[];
interface Teacher {
  id: number;
  email: string;
  name: string;
  profilePicUrl: null;
  authenticationProvider: string;
  userProfile: UserProfile;
  role: string;
  providerId: null;
}

interface UserProfile {
  id: number;
  feature1: string;
  feature2: string;
}

interface Subject {
  id: number;
  name: string;
}

export type subjectList = Subject[];

export type eventTypeList = string[];

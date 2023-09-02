export interface APICourseResponse {
  id: string;
  name: string;
  type: string;
  createDate: string;
  updateDate: string;
  enrollmentStartDate: string;
  enrollmentEndDate: string;
  language: string;
  availableSpots: number;
  totalSpots: number;
  editStage: string;
  editSteps: null;
  status: string;
  pricing: Pricing;
  teacher: Teacher;
  smartPoints: number;
  courseDescription: CourseDescription;
  courseSchedules: CourseSchedule[];
  courseEnrolments: any[];
  courseStudyMaterials: CourseStudyMaterials;
  courseReviews: any[];
  courseRatings: null;
  courseNotifications: any[];
  university: University;
  courseStudy: CourseStudy;
  courseSubject: CourseSubject;
  courseGroup: CourseGroup;
}

export interface CourseDescription {
  id: number;
  features: { [key: string]: string };
  highlights: Highlights;
  questionnaires: Questionnaires;
}

export interface Highlights {
  [key: string]: string;
}

export interface Questionnaires {
  [key: string]: string;
}

export interface CourseSchedule {
  id: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  zoomMeetingLink: string;
}

export interface CourseStudy {
  id: number;
  name: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}

export interface HibernateLazyInitializer {}

export interface CourseStudyMaterials {
  id: number;
  available: boolean;
  price: number;
  courseStudyMaterialFiles: any[];
  availableFrom: string;
  availableTill: string;
  sellIndividually: boolean;
}

export interface Pricing {
  id: number;
  originalPrice: number;
  salePrice: number | null;
}

export interface Teacher {
  id: number;
  email: string;
  name: string;
  profilePicUrl: null;
  authenticationProvider: string;
  userProfile: UserProfile;
  role: string;
  providerId: null;
  hibernateLazyInitializer: HibernateLazyInitializer;
}

export interface UserProfile {
  id: number;
  feature1: string;
  feature2: string;
}

export interface University {
  id: number;
  universityName: string;
  universityLogoUrl: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}
export interface CourseSubject {
  id: number;
  name: string;
}
export interface CourseGroup {
  id: number;
  name: string;
}

export interface CourseSearch {
  courseId: string;
  university: University;
  courseType: string;
  courseStudy: CourseStudy;
  courseSubject: CourseSubject;
  courseGroup: CourseGroup;
  language: string;
  courseStatus: string;
}

export interface CourseStudy {
  id: number;
  name: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}
export interface CourseSubject {
  id: number;
  name: string;
  hibernateLazyInitializer: {};
}
export interface CourseGroup {
  id: number;
  name: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}
export interface HibernateLazyInitializer {}

export interface University {
  id: number;
  universityName: string;
  universityLogoUrl: string;
  hibernateLazyInitializer: HibernateLazyInitializer;
}
export type CourseSearchList = CourseSearch[];

export interface ScheduleItem {
  id: number;
  course: string | null;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  zoomMeetingLink: string;
}
export interface CourseDetailsType {
  id: string;
  universityImage: string;
  university: string;
  type: string;
  major: string;
  subject: string;
  language: string;
  available: boolean;
  price: string;
  salePrice: string | null;
  courseDuration: string;
  courseFormat: string;
  knowledgeGuideAvailable: boolean;
  features: {
    [key: string]: string;
  };
  questionnaires: {
    [key: string]: string;
  };
  highlights: {
    [key: string]: string;
  };
  teacher: {
    name: string;
    image: string;
    profile: {
      [key: string]: string;
    };
  };
  courseSchedules: ScheduleItem[];
  rating: number;
}

export interface AddNewCourseApi {
  name: string;
  universityId: number;
  studyId: number;
  type: string;
  subjectId: number;
  language: string;
  "available-spot": number;
  groupId: number;
  pricing: Pricing;
  "enrollment-start-date": string;
  "enrollment-end-date": string;
  status: string;
  schedule: Schedule[];
  "teacher-id": number;
  "study-material": StudyMaterial;
  "smart-points": number;
  description: Description;
}

export interface Description {
  features: Feature[];
  highlights: Highlight[];
  questionnaires: Questionnaire[];
}

export interface Feature {
  priority: number;
  content: string;
}

export interface Highlight {
  label: string;
  content: string;
}

export interface Questionnaire {
  question: string;
  answer: string;
}

export interface Pricing {
  original: number;
  sale: number;
}

export interface Schedule {
  name: string;
  date: string;
  "start-time": string;
  "end-time": string;
}

export interface StudyMaterial {
  available: boolean;
  price: number | undefined;
  file: File[] | undefined;
  "available-from": string | undefined;
  "available-until": string | undefined;
  "sell-individually": boolean | undefined;
}

export interface File {
  type: string;
  name: string;
  link: string;
}

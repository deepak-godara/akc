export interface AddCourseFormSubmitDataType {
  name: string;
  subject: string;
  university: string;
  study: string;
  event: string;
  spots: number;
  groups: string;
  originalPrice: number;
  salePrice: number;
  questions: Question[];
  features: Feature[];
  schedule: Schedule[];
  highlights: Highlight[];
  studyGuideAvailable: boolean;
  guidePrice: number;
  "available-from": string;
  "available-upto": string;
  "sell-individually": boolean;
  teacher: Teacher;
}

export interface Feature {
  id: string;
  content: string;
}

export interface Highlight {
  id: string;
  label: string;
  content: string;
}

export interface Question {
  question: string;
  answer: string;
  id: string;
}

export interface Schedule {
  name: string;
  date: Date;
  startTime: string;
  endTime: string;
  id: string;
}

export interface Teacher {
  name: string;
  image: string;
  description: string;
  id: string;
}

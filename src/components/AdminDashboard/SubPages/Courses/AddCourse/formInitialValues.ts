import { TeacherOptionType } from "./Components/Teacher/TeacherSelect";
import {
  QUESTIONS,
  SCHEDULE,
  STUDY_GUIDE_AVAILABLE,
  GUIDE_PRICE,
  SELL_INDIVIDUALLY,
  formSchemaType,
  TEACHER,
  FEATURES,
  HIGHLIGHTS,
  AVAILABLE_FROM,
  AVAILABLE_UPTO,
} from "./validationSchema";
import { v4 as uuid } from "uuid";

export interface ScheduleItemType {
  name: string | undefined;
  date: Date | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  id: string;
}
export interface QuestionItemType {
  question: string;
  answer: string;
  id: string;
}
export interface FeaturesItemType {
  id: string;
  content: string;
}
export interface HighlightItemType {
  id: string;
  label: string;
  content: string;
}
export interface formikConfig {
  initialValues: {
    name: string;
    subject: string;
    university: undefined | string;
    study: undefined | string;
    event: undefined | string;
    spots: undefined | number;
    groups: undefined | string;
    originalPrice: undefined | number;
    salePrice: undefined | number;
    [QUESTIONS]: QuestionItemType[];
    [SCHEDULE]: ScheduleItemType[];
    [STUDY_GUIDE_AVAILABLE]: boolean;
    [GUIDE_PRICE]: undefined | number;
    [AVAILABLE_FROM]: undefined | Date;
    [AVAILABLE_UPTO]: undefined | Date;
    [SELL_INDIVIDUALLY]: boolean;
    [FEATURES]: FeaturesItemType[];
    [HIGHLIGHTS]: HighlightItemType[];
    [TEACHER]: TeacherOptionType | null;
  };
  onSubmit: Function;
  validationSchema: formSchemaType;
}
export const initialValues: formikConfig["initialValues"] = {
  name: "",
  subject: "",
  university: undefined,
  study: undefined,
  event: undefined,
  spots: 1,
  groups: undefined,
  originalPrice: 0,
  salePrice: undefined,
  [QUESTIONS]: [
    {
      question: "",
      answer: "",
      id: uuid(),
    },
  ],
  [FEATURES]: [
    {
      id: uuid(),
      content: "",
    },
  ],
  [SCHEDULE]: [
    {
      name: "",
      date: undefined,
      startTime: undefined,
      endTime: undefined,
      id: uuid(),
    },
  ],
  [HIGHLIGHTS]: [
    {
      id: uuid(),
      label: "",
      content: "",
    },
  ],
  [STUDY_GUIDE_AVAILABLE]: true,
  [GUIDE_PRICE]: undefined,
  [AVAILABLE_FROM]: undefined,
  [AVAILABLE_UPTO]: undefined,
  [SELL_INDIVIDUALLY]: false,
  [TEACHER]: null,
};

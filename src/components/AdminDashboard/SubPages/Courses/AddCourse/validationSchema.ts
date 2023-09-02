import { object, string, number, date, boolean, array } from "yup";
import dateFns from "date-fns";
export const minimumNumberOfSpots = 1;
export const maximumNumberOfSpots = 50;
export const minimumOriginalPrice = 0;
export const minimumSalePrice = 0;
export const NAME = "name";
export const STUDY_GUIDE_AVAILABLE = "studyGuideAvailable";
export const SELL_INDIVIDUALLY = "sell-individually";
export const SCHEDULE = "schedule";
export const AVAILABLE_FROM = "available-from";
export const AVAILABLE_UPTO = "available-upto";
export const GUIDE_PRICE = "guidePrice";
export const QUESTIONS = "questions";
export const FEATURES = "features";
export const HIGHLIGHTS = "highlights";
export const TEACHER = "teacher";

const formSchema = object({
  [NAME]: string()
    .required("Name can not be empty")
    .min(5, "Name should be atleast 5 characters long")
    .max(50, "Name can not be more than 50 characters long"),
  subject: string().required("Subject can not be empty"),
  university: string().required(),
  study: string().required(),
  event: string().required(),
  spots: number()
    .integer()
    .required()
    .min(minimumNumberOfSpots)
    .max(maximumNumberOfSpots)
    .strict(),
  groups: string().required(),
  originalPrice: number()
    .integer()
    .required("Original Price is a required field")
    .min(
      minimumOriginalPrice,
      "Orignial price should be greater than or equal to €0"
    ),
  salePrice: number()
    .integer()
    .optional()
    .min(minimumSalePrice, "Sale price should be greater than or equal to €0"),
  [SCHEDULE]: array()
    .of(
      object().shape({
        name: string()
          .required("Schedule name is required ")
          .min(5, "Schedule name must be at least 5 characters long")
          .max(50, "Schedule name must be at most 50 characters long"),
        date: date().required("Schedule date is required"),
        startTime: string().required("Start time is required"),
        endTime: string().required("End time is required"),
        id: string().required(),
      })
    )
    .min(1),
  [STUDY_GUIDE_AVAILABLE]: boolean().required(),
  [AVAILABLE_FROM]: date().when(STUDY_GUIDE_AVAILABLE, {
    is: true,
    then: () => date().required("Required"),
    otherwise: () => date().notRequired(),
  }),
  [AVAILABLE_UPTO]: date().when(STUDY_GUIDE_AVAILABLE, {
    is: true,
    then: () => date().required("Required"),
    otherwise: () => date().notRequired(),
  }),
  [GUIDE_PRICE]: number().when(STUDY_GUIDE_AVAILABLE, {
    is: true,
    then: () => number().required("Required"),
    otherwise: () => number().notRequired(),
  }),
  [SELL_INDIVIDUALLY]: boolean().when(STUDY_GUIDE_AVAILABLE, {
    is: true,
    then: () => boolean().required(),
    otherwise: () => boolean().notRequired(),
  }),
  [QUESTIONS]: array()
    .of(
      object().shape({
        question: string()
          .required("question is a required field")
          .min(10, "question should be atleast 10 character long"),
        answer: string()
          .required("answer is a reqired field")
          .min(20, "answer should be at least 20 characters long"),
        id: string().required(),
      })
    )
    .min(1),
  [FEATURES]: array()
    .optional()
    .of(
      object().shape({
        id: string().required(),
        content: string().required("featues field is required").min(10),
      })
    ),
  [HIGHLIGHTS]: array()
    .of(
      object().shape({
        id: string().required(),
        label: string().required(),
        content: string().required().min(50),
      })
    )
    .min(1),
  [TEACHER]: object().shape({
    id: string().required(),
    name: string().required(),
    description: string().required(),
    image: string().required(),
  }),
});
export default formSchema;
export type formSchemaType = typeof formSchema;

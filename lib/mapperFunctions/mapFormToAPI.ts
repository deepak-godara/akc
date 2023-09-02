import { AddNewCourseApi } from "@lib/Types/API/APINewCoursePost";
import { AddCourseFormSubmitDataType } from "@lib/Types/AddCourseFormSubmitType";
import { format } from "date-fns";

export function mapFormToAPI(
  formData: AddCourseFormSubmitDataType
): AddNewCourseApi {
  const studyGuide = formData.studyGuideAvailable;
  return {
    name: formData.name,
    universityId: Number(formData.university),
    studyId: Number(formData.study),
    type: "MASTERCLASS",
    subjectId: Number(formData.subject),
    language: "eng-us",
    "available-spot": formData.spots,
    groupId: Number(formData.groups),
    pricing: {
      original: formData.originalPrice,
      sale: formData.salePrice,
    },
    "enrollment-start-date": "2023-07-29T10:00:00",
    "enrollment-end-date": "2023-07-29T10:00:00",
    status: "ACTIVE",
    schedule: formData.schedule.map((item) => ({
      name: item.name,
      date: format(item.date, "yyyy-MM-dd"),
      "start-time": `${item.startTime}:00`,
      "end-time": `${item.endTime}:00`,
    })),
    "teacher-id": Number(formData.teacher.id),
    "study-material": {
      available: formData.studyGuideAvailable,
      price: studyGuide ? formData.guidePrice : undefined,
      file: studyGuide ? [] : undefined,
      "available-from": studyGuide ? formData["available-from"] : undefined,
      "available-until": studyGuide ? formData["available-upto"] : undefined,
      "sell-individually": studyGuide
        ? formData["sell-individually"]
        : undefined,
    },
    "smart-points": 2,
    description: {
      features: formData.features.map((item, index) => ({
        priority: index + 1,
        content: item.content,
      })),
      highlights: formData.highlights.map((item) => ({
        label: item.label,
        content: item.content,
      })),
      questionnaires: formData.questions.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
    },
  };
}

import { formikConfig } from "@components/AdminDashboard/SubPages/Courses/AddCourse/formInitialValues";
import { APICourseResponse } from "@lib/Types/API/APICourseResponse";
import SampleTeacherImage from "@images/demo-teacher-image.png";
import { v4 as uuid } from "uuid";
import { parseISO } from "date-fns";
import { format, parse } from "date-fns";

const parseTime = (time: string): string => {
  console.log(time);
  const parsedTime = parse(time, "HH:mm:ss", new Date());
  const formattedTime = format(parsedTime, "HH:mm");
  return formattedTime;
};
export const mapCourseResopnseToEditForm = function (
  data: APICourseResponse
): formikConfig["initialValues"] {
  return {
    name: data.name,
    subject: data.courseSubject.id.toString(),
    university: data.university.id.toString(),
    study: data.courseStudy.id.toString(),
    event: undefined,
    spots: data.availableSpots,
    groups: data.courseGroup.id.toString(),
    originalPrice: data.pricing.originalPrice,
    salePrice: data.pricing.salePrice ? data.pricing.salePrice : undefined,
    teacher: {
      id: data.teacher.id.toString(),
      name: data.teacher.name,
      image: SampleTeacherImage,
      description:
        "some description that is not important now so i am writing this in wain",
    },
    questions: Object.keys(data.courseDescription.questionnaires).map(
      (item) => ({
        question: item,
        answer: data.courseDescription.questionnaires[item],
        id: uuid(),
      })
    ),
    features: Object.values(data.courseDescription.features).map((item) => ({
      id: uuid(),
      content: item,
    })),
    schedule: data.courseSchedules.map((item) => ({
      id: uuid(),
      name: item.name,
      date: parseISO(item.date),
      startTime: parseTime(item.startTime),
      endTime: parseTime(item.endTime),
    })),
    studyGuideAvailable: data.courseStudyMaterials.available,
    guidePrice: data.courseStudyMaterials.price,
    "available-from": parseISO(data.courseStudyMaterials.availableFrom),
    "available-upto": parseISO(data.courseStudyMaterials.availableTill),
    "sell-individually": data.courseStudyMaterials.sellIndividually,
    highlights: Object.keys(data.courseDescription.highlights).map((item) => ({
      id: uuid(),
      label: item,
      content: data.courseDescription.highlights[item],
    })),
  };
};

import { CourseDetailsType } from "@components/View/CourseView/CourseDetailsType";
import { APICourseResponse } from "@lib/Types/API/APICourseResponse";
import SampleUniversityImage from "@images/sample-university-2.png";
import SampleTeacherImage from "@images/demo-teacher-image.png";
export const mapAPICourseDetailsToComponent = function (
  item: APICourseResponse
): CourseDetailsType {
  return {
    id: item.id,
    universityImage: SampleUniversityImage,
    university: item.university.universityName,
    type: item.type,
    major: item.courseSubject.name,
    subject: item.courseStudy.name,
    language: item.language,
    available: item.status === "ACTIVE",
    price: item.pricing.originalPrice.toString(),
    salePrice: item.pricing.salePrice
      ? item.pricing.salePrice.toString()
      : null,
    courseDuration: "12 hours",
    courseFormat: "Digital Course via Zoom",
    knowledgeGuideAvailable: item.courseStudyMaterials.available,
    features: item.courseDescription.features,
    questionnaires: item.courseDescription.questionnaires,
    highlights: item.courseDescription.highlights,
    teacher: {
      name: item.teacher.name,
      image: SampleTeacherImage,
      profile: {
        "1": item.teacher.userProfile.feature1,
        "2": item.teacher.userProfile.feature2,
      },
    },
    courseSchedules: item.courseSchedules.map((schedule) => ({
      id: schedule.id,
      course: null,
      name: schedule.name,
      date: schedule.date,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      zoomMeetingLink: schedule.zoomMeetingLink,
    })),
    rating: 4.1,
  };
};

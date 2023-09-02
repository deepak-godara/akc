import { NonEnrolledCourseDataType } from "@components/CommonComponents/CourseComponent/NonEnrolledCourse";
import { CourseSearch } from "@lib/Types/API/APICourseSearchList";
import SampleUniversityImage from "@images/sample-university-2.png";
export const mapCourseToUnenrolled = (
  item: CourseSearch
): NonEnrolledCourseDataType => ({
  //   image: item.university.universityLogoUrl,
  id: item.courseId,
  image: SampleUniversityImage,
  university: item.university.universityName,
  study: item.courseStudy.name,
  major: item.courseSubject.name,
  subject: item.courseStudy.name,
  language: item.language,
  type: item.courseType,
});

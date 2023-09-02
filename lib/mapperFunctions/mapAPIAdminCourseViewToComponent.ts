import { AdminCourseView } from "@components/AdminDashboard/SubPages/Courses/CourseRenderer";
import { APIAdminCourseView } from "@lib/Types/API/APIAdminCourseView";
import SampleUniversityImage from "@images/sample-university-2.png";
export const mapAPIAdminCourseViewToComponent = (
  data: APIAdminCourseView
): AdminCourseView => {
  return {
    id: data.id,
    University: data.university,
    universityId: "to be replaced",
    type: data.type,
    image: SampleUniversityImage,
    major: data.study,
    subject: data.name,
    language: data.language,
    tags: {
      publish: true,
      teacher: true,
      date: true,
    },
    applications: data.statics.applications,
    promoClicks: data.statics["promo-clicks"],
    Sales: data.statics.sales,
    Payments: data.statics.payments,
  };
};

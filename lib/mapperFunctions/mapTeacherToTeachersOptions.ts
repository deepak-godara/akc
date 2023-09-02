import { TeacherOptionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/Teacher/TeacherSelect";
import { TeacherList } from "@lib/Types/API/FormData/FormData";
import SampleTeacherImage from "@images/demo-teacher-image.png";
export const mapTeacherToTeachersOptions = function (
  items: TeacherList
): TeacherOptionType[] {
  return items.map((item) => ({
    id: item.id.toString(),
    name: item.name,
    description:
      "Experienced mathematics teacher with a passion for helping students excel in their studies.",
    image: SampleTeacherImage,
  }));
};

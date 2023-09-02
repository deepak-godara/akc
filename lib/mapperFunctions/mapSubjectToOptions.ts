import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { subjectList } from "@lib/Types/API/FormData/FormData";
export const mapSubjectListToOptions = function (
  items: subjectList
): optionType[] {
  return items.map((item) => ({
    id: item.id.toString(),
    value: item.name,
  }));
};

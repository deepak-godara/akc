import { StudyList } from "@lib/Types/API/FormData/FormData";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";

export const mapStudyListToOptions = (data: StudyList): optionType[] => {
  return data.map((item) => ({
    id: item.id.toString(),
    value: item.name,
  }));
};

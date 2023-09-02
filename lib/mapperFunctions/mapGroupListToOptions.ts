import { GroupList } from "@lib/Types/API/FormData/FormData";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";

export const mapGroupListToOptions = (data: GroupList): optionType[] => {
  return data.map((item) => ({
    id: item.id.toString(),
    value: item.name,
  }));
};

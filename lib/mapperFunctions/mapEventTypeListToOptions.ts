import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { eventTypeList } from "@lib/Types/API/FormData/FormData";
import { v4 as uuid } from "uuid";
export const mapEventTypeListToOptions = (data: eventTypeList): optionType[] =>
  data.map((item) => ({
    id: uuid(),
    value: item,
  }));

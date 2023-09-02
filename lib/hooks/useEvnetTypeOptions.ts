import { getEventTypeList } from "@API/services/CourseCRUD/getEventType";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { mapEventTypeListToOptions } from "@lib/mapperFunctions/mapEventTypeListToOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useEventTypeOptions = function () {
  const [eventTypeOptions, setEventTypeOptions] = useState<optionType[]>([]);
  useEffect(() => {
    getEventTypeOptions();
  }, []);
  async function getEventTypeOptions() {
    const data = await getEventTypeList();
    if (data.success) {
      const mappedList = mapEventTypeListToOptions(data.data);
      setEventTypeOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }
  return eventTypeOptions;
};

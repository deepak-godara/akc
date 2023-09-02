import { getGroupList } from "@API/services/CourseCRUD/getGroupList";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { mapGroupListToOptions } from "@lib/mapperFunctions/mapGroupListToOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useGroupOptions = function () {
  const [groupOptoins, setGroupOptions] = useState<optionType[]>([]);
  useEffect(() => {
    getGroupOptions();
  }, []);
  async function getGroupOptions() {
    const data = await getGroupList();

    if (data.success) {
      const mappedList = mapGroupListToOptions(data.data);
      setGroupOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }
  return groupOptoins;
};

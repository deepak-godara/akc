import { getUniversityList } from "@API/services/CourseCRUD/getUniversityList";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { mapUniversityListToOptions } from "@lib/mapperFunctions/mapUniversityListToOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useUniversityOptions = function () {
  const [universityOptons, setUniversityOptions] = useState<optionType[]>([]);
  useEffect(() => {
    getUniversityOptions();
  }, []);
  async function getUniversityOptions() {
    const data = await getUniversityList();
    if (data.success) {
      const mappedList = mapUniversityListToOptions(data.data);
      setUniversityOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }

  return universityOptons;
};

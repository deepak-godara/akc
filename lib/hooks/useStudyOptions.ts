import { getStudyList } from "@API/services/CourseCRUD/getStudyList";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { mapStudyListToOptions } from "@lib/mapperFunctions/mapStudyListToOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useStudyOption = function () {
  const [studyOptions, setStudyOptions] = useState<optionType[]>([]);
  useEffect(() => {
    getStudyOptions();
  }, []);
  async function getStudyOptions() {
    const data = await getStudyList();
    if (data.success) {
      const mappedList = mapStudyListToOptions(data.data);
      setStudyOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }
  return studyOptions;
};

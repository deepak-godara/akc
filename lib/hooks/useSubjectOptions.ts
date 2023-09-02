import { getSubjectList } from "@API/services/CourseCRUD/getSubjectList";
import { optionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/FormSelect";
import { mapSubjectListToOptions } from "@lib/mapperFunctions/mapSubjectToOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useSubjectOptions = function () {
  const [subjectOptions, setSubjectOptions] = useState<optionType[]>([]);
  useEffect(() => {
    getSubjectOptions();
  }, []);
  async function getSubjectOptions() {
    const data = await getSubjectList();
    if (data.success) {
      const mappedList = mapSubjectListToOptions(data.data);
      setSubjectOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }
  return subjectOptions;
};

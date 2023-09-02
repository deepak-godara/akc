import { getTeachersList } from "@API/services/CourseCRUD/getTeachersList";
import { TeacherOptionType } from "@components/AdminDashboard/SubPages/Courses/AddCourse/Components/Teacher/TeacherSelect";
import { mapTeacherToTeachersOptions } from "@lib/mapperFunctions/mapTeacherToTeachersOptions";
import { ReactToast } from "@lib/toast";
import { useEffect, useState } from "react";

export const useTeacherOptions = function (): TeacherOptionType[] {
  const [teacherOptions, setTeacherOptions] = useState<TeacherOptionType[]>([]);
  useEffect(() => {
    getTeachersOptions();
  }, []);
  async function getTeachersOptions() {
    const data = await getTeachersList();
    if (data.success) {
      const mappedList = mapTeacherToTeachersOptions(data.data);
      setTeacherOptions(mappedList);
    } else {
      ReactToast(data.data);
    }
  }
  return teacherOptions;
};

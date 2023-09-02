import { Formik } from "../../main";

export default function getScheduleError(index: number, formik: Formik) {
  const errors = formik.errors.schedule;
  if (!errors || !errors[index]) return null;
  if (typeof errors === "string") {
    return null;
  }
  const error = errors[index];
  if (typeof error === "string") {
    return null;
  }
  if (!error) {
    return null;
  }
  const touched = formik.touched.schedule;
  if (touched && touched[index])
    return {
      name: touched[index].name ? error.name : "",
      date: touched[index].date ? error.date : null,
      startTime: touched[index].startTime ? error.startTime : "",
      endTime: touched[index].endTime ? error.endTime : "",
    };
}

import { Formik } from "../../main";

export default function getFeaturesError(index: number, formik: Formik) {
  const errors = formik.errors.features;
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
  const touched = formik.touched.features;
  if (touched && touched[index]) {
    return touched[index] ? error.content : "";
  }
}

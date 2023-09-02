import { Formik } from "../../main";

export default function getHighlightsError(index: number, formik: Formik) {
  const errors = formik.errors.highlights;
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
  const touched = formik.touched.highlights;
  if (touched && touched[index])
    return {
      label: touched[index].label ? error.label : "",
      content: touched[index].content ? error.content : "",
    };
}

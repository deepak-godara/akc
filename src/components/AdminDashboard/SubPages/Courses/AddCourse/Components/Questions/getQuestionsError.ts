import { Formik } from "../../main";

export default function getQuestionsError(index: number, formik: Formik) {
  const errors = formik.errors.questions;
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
  const touched = formik.touched.questions;
  if (touched && touched[index])
    return {
      question: touched[index].question ? error.question : "",
      answer: touched[index].answer ? error.answer : "",
    };
}

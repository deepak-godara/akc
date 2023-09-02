import { getCourseDetails } from "@API/services/Data/getCourseDetails";
import { mapCourseResopnseToEditForm } from "@lib/mapperFunctions/mapCourseResopnseToEditForm";
import { ReactToast } from "@lib/toast";
import { FormikConfig, FormikProps, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { initialValues } from "./formInitialValues";
import { formikConfig } from "./formInitialValues";
import validationSchema from "./validationSchema";

export type Formik = FormikProps<formikConfig["initialValues"]>;

import { useEffect, useState } from "react";
import { editCourse } from "@API/services/CourseCRUD/editCourse";
import { createCourse } from "@API/services/CourseCRUD/createCourse";

export function useFormikInstance(courseId: string | undefined): Formik {
  const navigate = useNavigate();
  const formik = useFormik(getFormikConfig(initialValues));
  useEffect(() => {
    setInitialValues();
  }, []);
  function getFormikConfig(initialValue: formikConfig["initialValues"]) {
    const formikConfig: FormikConfig<formikConfig["initialValues"]> = {
      initialValues: initialValue,
      onSubmit: async (data) => {
        if (!courseId) {
          //@ts-ignore
          const res = await createCourse(data);
          if (res.success) {
            ReactToast("Course created Successfully");
            navigate("/admin-dashboard/courses");
          } else {
            ReactToast(res.data);
          }
        } else {
          //@ts-ignore
          const res = await editCourse(data, courseId);
          if (res.success) {
            ReactToast("Course Updated Successfully");
            navigate("/admin-dashboard/courses");
          } else {
            ReactToast(res.data);
          }
        }
      },
      validationSchema,
    };
    return formikConfig;
  }
  async function setInitialValues() {
    if (courseId) {
      const res = await getCourseDetails(courseId);
      if (res.success) {
        const formattedData = mapCourseResopnseToEditForm(res.data);
        formik.setValues(formattedData);
      } else {
        ReactToast("Could not get course data");
      }
    } else {
    }
  }

  return formik;
}

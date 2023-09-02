import React, { useCallback, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "@lib/microComponents/Heading";
import FormHeadings from "./Components/FormHeadings";
import { Formik, FormikConfig, FormikProps, useFormik } from "formik";
import validationSchema, {
  minimumOriginalPrice,
  minimumSalePrice,
} from "./validationSchema";
import FormInputWithEuroIcon from "./Components/FormInputWithEuroIcon";
import Schedule from "./Components/Schedule";
import KnowledgeGuide from "./Components/KnowledgeGuide";
import Questionnaire from "./Components/Questions";
import { formikConfig, initialValues } from "./formInitialValues";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights";
import Teacher from "./Components/Teacher";
import { createCourse } from "@API/services/CourseCRUD/createCourse";
import GeneralDetails from "./Components/GeneralDetails";
import { ReactToast } from "@lib/toast";
import { getCourseDetails } from "@API/services/Data/getCourseDetails";
import { mapCourseResopnseToEditForm } from "@lib/mapperFunctions/mapCourseResopnseToEditForm";
import { useFormikInstance } from "./useFormikInstance";
//----styled-components--------
const Container = styled.div`
  padding-bottom: 3.125rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormHeadingsWithMargin = styled(FormHeadings)`
  margin-top: 3.125rem;
`;
const HeadingAndBackButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const BackLink = styled(Link)`
  height: 2.6875rem;
  width: 2.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gray[600]};
  border-radius: 10px;
  color: #ffffff;
`;
const PageHeading = styled(Heading)`
  margin-left: 1.875rem;
`;

const FormButton = styled.button`
  height: 2.875rem;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  padding: 0.6563rem 2.25rem;
  color: #ffffff;
  border-radius: 10px;
  font-weight: 700;
`;
const SavedState = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[600]};
  margin-right: 3.125rem;
`;
const FormButtonsAndStateContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FormButtonPublishAndSaveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-end;
`;
const SaveButton = styled(FormButton)`
  background: ${(props) => props.theme.colors.gray[600]};
`;
const PublishButton = styled(FormButton)`
  background: ${(props) => props.theme.colors.green[600]};
`;
const CourseForm = styled.form``;
const FormContainer = styled.div`
  margin-top: 1.875rem;
  background: #ffffff;
  padding: 3.125rem;
  border-radius: 1.25rem;
`;
const FormInputsContainer = styled.div`
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-column-gap: 1.875rem;
  grid-row-gap: 2.5rem;
  margin-top: 1.1875rem;
`;
const BottomPublishButtonContainer = styled.div`
  margin-top: 1.875rem;
  display: flex;
  justify-content: flex-end;
`;
//----------------------------

export enum FormType {
  ADD = "ADD",
  EDIT = "EDIT",
}

function AddCourseForm() {
  const { id: courseId } = useParams();
  const formik = useFormikInstance(courseId);

  const handlePublishClick = useCallback(() => {
    formik.submitForm();
  }, [formik]);
  return (
    <Container>
      <Header>
        <HeadingAndBackButtonContainer>
          <BackLink to="/admin-dashboard/courses">
            <FaAngleLeft />
          </BackLink>
          <PageHeading> Add a new course</PageHeading>
        </HeadingAndBackButtonContainer>
        <FormButtonsAndStateContainer>
          <SavedState>Saved Just now!</SavedState>
          <FormButtonPublishAndSaveContainer>
            <SaveButton>Save Concept</SaveButton>
            <PublishButton
              style={{ marginLeft: " 1.25rem" }}
              onClick={handlePublishClick}
            >
              Publish
            </PublishButton>
          </FormButtonPublishAndSaveContainer>
        </FormButtonsAndStateContainer>
      </Header>
      <FormContainer>
        <CourseForm onSubmit={formik.handleSubmit}>
          <GeneralDetails formik={formik}></GeneralDetails>
          <FormHeadingsWithMargin>Pricing</FormHeadingsWithMargin>
          <FormInputsContainer>
            <FormInputWithEuroIcon
              formik={formik}
              id="originalPrice"
              name="originalPrice"
              label="Original price"
              placeholder="Type here"
              min={minimumOriginalPrice}
            />
            <FormInputWithEuroIcon
              formik={formik}
              id="salePrice"
              name="salePrice"
              label="Sale price (optional)"
              placeholder="Type here"
              min={minimumSalePrice}
            />
          </FormInputsContainer>
          <Schedule formik={formik} />
          <Questionnaire formik={formik} />
          <Teacher formik={formik} />
          <Features formik={formik} />
          <Highlights formik={formik} />
          <KnowledgeGuide formik={formik} />
          {/* <TestComponent formik={formikik} /> */}
        </CourseForm>
      </FormContainer>
      <BottomPublishButtonContainer>
        <FormButtonsAndStateContainer>
          <SavedState>Saved Just now!</SavedState>
          <FormButtonPublishAndSaveContainer>
            <SaveButton>Save Concept</SaveButton>
            <PublishButton
              style={{ marginLeft: " 1.25rem" }}
              onClick={handlePublishClick}
            >
              Publish
            </PublishButton>
          </FormButtonPublishAndSaveContainer>
        </FormButtonsAndStateContainer>
      </BottomPublishButtonContainer>
    </Container>
  );
}
export type Formik = FormikProps<formikConfig["initialValues"]>;
export default AddCourseForm;

import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { Formik } from "../../main";
import FormTextInput from "../FormTextInput";
import FormHeadings from "../FormHeadings";
import Select, { optionType } from "../FormSelect";
import FormNumberInput from "../FormNumberInput";
import {
  maximumNumberOfSpots,
  minimumNumberOfSpots,
} from "../../validationSchema";
import { useUniversityOptions } from "@lib/hooks/useUniversityOptions";
import { useStudyOption } from "@lib/hooks/useStudyOptions";
import { useGroupOptions } from "@lib/hooks/useGroupOptions";
import FormSelect from "../FormSelect";
import { useSubjectOptions } from "@lib/hooks/useSubjectOptions";
import { useEventTypeOptions } from "@lib/hooks/useEvnetTypeOptions";

// styled-components -----
const Container = styled.div``;
const FormInputsContainer = styled.div`
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-column-gap: 1.875rem;
  grid-row-gap: 2.5rem;
  margin-top: 1.1875rem;
`;
// -----------------------

function GeneralDetails({ formik }: { formik: Formik }) {
  const universityOptions = useUniversityOptions();
  const studyOptions = useStudyOption();
  const groupOptions = useGroupOptions();
  const eventTypeOptions = useEventTypeOptions();
  const subjectOptions = useSubjectOptions();
  return (
    <Container>
      <FormHeadings>General details</FormHeadings>
      <FormInputsContainer>
        <FormTextInput
          formik={formik}
          id="name"
          name="name"
          label="Name"
          placeholder="Type here.."
        ></FormTextInput>
        <Select
          id="university"
          label="University"
          name="university"
          formik={formik}
          text="Select a university"
          options={universityOptions}
        />
        <Select
          id="study"
          label="Study"
          name="study"
          formik={formik}
          text="Select a study"
          options={studyOptions}
        />
        <Select
          id="event"
          label="Type of Event"
          name="event"
          formik={formik}
          text="Select a type"
          options={eventTypeOptions}
        />
        {/* <FormTextInput
          formik={formik}
          id="subject"
          name="subject"
          label="Subject"
          placeholder="Type here.."
        ></FormTextInput> */}
        <FormSelect
          formik={formik}
          id="subject"
          name="subject"
          label="Subject"
          text="Select A Subject"
          options={subjectOptions}
        ></FormSelect>
        <FormNumberInput
          formik={formik}
          id="spots"
          name="spots"
          label="Available Spots"
          placeholder=""
          min={minimumNumberOfSpots}
          max={maximumNumberOfSpots}
        ></FormNumberInput>
        <Select
          id="groups"
          label="Group"
          name="groups"
          formik={formik}
          text="Select a group"
          options={groupOptions}
        ></Select>
      </FormInputsContainer>
    </Container>
  );
}

export default GeneralDetails;

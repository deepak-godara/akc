import styled from "styled-components";
import FormSelect, { optionType } from "./FormSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUniversityOptions } from "@lib/hooks/useUniversityOptions";
import { useStudyOption } from "@lib/hooks/useStudyOptions";
import { useDispatch, useSelector } from "react-redux";
import { searchSlice } from "@app/redux/slices/searchSlice";
import { selectStudy, selectUniversity } from "./searchSelectors";
// styled-components----
const Form = styled.form`
  width: 100%;
  height: 100%;
`;
const FormHeading = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;

const SearchButton = styled.button`
  height: 3.8rem;
  border-radius: 10px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  background: ${(props) => props.theme.colors.green[600]};
  color: #ffffff;
  font-weight: 700;
`;
// ---------------------
const testOptions = [
  { id: "0", value: "okay" },
  { id: "1", value: "notokay" },
];

function LadingPageForm() {
  const dispatch = useDispatch();
  const university = useSelector(selectUniversity);
  const universityOptions = useUniversityOptions();
  const study = useSelector(selectStudy);
  const studyOptions = useStudyOption();
  const [grade, setGrade] = useState<optionType | null>();
  const navigate = useNavigate();
  return (
    <Form
      onSubmit={() => {
        navigate("/view/search");
      }}
    >
      <FormHeading>Find your study course</FormHeading>
      <FormSelect
        onChange={(e) => {
          dispatch(searchSlice.actions.setUniversity(e));
        }}
        value={university}
        options={universityOptions}
        text="Select a university"
      ></FormSelect>
      <FormSelect
        onChange={(e) => {
          dispatch(searchSlice.actions.setStudy(e));
        }}
        text="Select a study"
        value={study}
        options={studyOptions}
      ></FormSelect>
      <FormSelect
        onChange={() => {}}
        text="Select a grade"
        value={grade}
        options={testOptions}
      ></FormSelect>
      <SearchButton style={{ marginTop: "1.2rem" }}>Search</SearchButton>
    </Form>
  );
}

export default LadingPageForm;

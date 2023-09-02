import styled from "styled-components";
import FormHeadings from "../FormHeadings";
import Text from "@lib/microComponents/Text";
import ComboBox from "./TeacherSelect";
import { Formik } from "../../main";
import { TEACHER } from "../../validationSchema";
import { TeacherOptionType } from "./TeacherSelect";
// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const InnerContainer = styled.div`
  margin-top: 1.5625rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1.9375rem;
`;
const InputContainer = styled.div``;

const SubHeading = styled.h2``;
const ComboBoxContainer = styled.div`
  margin-top: 0.625rem;
`;
const TeacherProfileContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.gray[400]};
  padding: 1.875rem 2.375rem 1.875rem 1.875rem;
  border-radius: 10px;
`;
const TeacherImageContainer = styled.div`
  height: 7.0625rem;
  width: 7.0625rem;
`;
const TeacherImage = styled.img`
  height: 7.0625rem;
  width: 7.0625rem;
  border-radius: 50%;
`;
const TeacherProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;

const TeacherName = styled.div`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
`;
const TeacherBio = styled.div`
  margin-top: 0.6875rem;
`;
//----------------------

function Teacher({ formik }: { formik: Formik }) {
  const changeHandler = (e: TeacherOptionType | undefined | null) => {
    if (!e) return;
    formik.setFieldValue(TEACHER, e);
  };
  const teacher: TeacherOptionType = formik.getFieldProps(TEACHER).value;
  return (
    <Container>
      <FormHeadings>Teacher</FormHeadings>
      <InnerContainer>
        <InputContainer>
          <SubHeading>
            <Text>Select teacher</Text>
          </SubHeading>
          <ComboBoxContainer>
            <ComboBox formik={formik} onChange={changeHandler}></ComboBox>
          </ComboBoxContainer>
        </InputContainer>
        {teacher && (
          <TeacherProfileContainer>
            <TeacherImageContainer>
              <TeacherImage src={teacher.image} />
            </TeacherImageContainer>
            <TeacherProfile>
              <TeacherName>{teacher.name}</TeacherName>
              <TeacherBio>{teacher.description}</TeacherBio>
            </TeacherProfile>
          </TeacherProfileContainer>
        )}
      </InnerContainer>
    </Container>
  );
}

export default Teacher;

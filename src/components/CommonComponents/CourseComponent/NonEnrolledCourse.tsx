import styled from "styled-components";
import CourseComponent from "./main";
import data from "./SampleCourseData";
import { useNavigate } from "react-router-dom";
// styled-components----
const Container = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 20px;
`;
const CompletelyFullButton = styled.div`
  padding: 0.5625rem 0;
  width: 244px;
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 10px;
  line-height: 25px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray[800]};
  text-align: center;
`;
const SignUpButton = styled.button`
  padding: 0.5625rem 0;
  width: 244px;
  background: ${(props) => props.theme.colors.green[600]};
  border-radius: 10px;
  line-height: 25px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;
// ---------------------
export interface NonEnrolledCourseDataType {
  id: string;
  image: string;
  university: string;
  study: string;
  major: string;
  subject: string;
  language: string;
  type: string;
}
function NonEnrolledCourse({ item }: { item: NonEnrolledCourseDataType }) {
  const navigate = useNavigate();
  return (
    <Container>
      <CourseComponent data={item}>
        {data.available ? (
          <SignUpButton
            onClick={() => {
              navigate(`/view/${item.id}/course`);
            }}
          >
            Sign up
          </SignUpButton>
        ) : (
          <CompletelyFullButton>Completely full</CompletelyFullButton>
        )}
      </CourseComponent>
    </Container>
  );
}

export default NonEnrolledCourse;

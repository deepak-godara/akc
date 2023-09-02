import GreetingComponent from "@components/CommonComponents/GreetingComponent";

import styled from "styled-components";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import CourseInfo from "./CoursesInfo.tsx/main";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
import { useSelector } from "react-redux";
// styled-components----
const Container = styled.div``;
const InnerContainer = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: minmax(62.5rem, 17fr) minmax(0, 656px);
  column-gap: 1.875rem;
`;
const CoursesContainer = styled.div``;

// ---------------------
function Overview() {
  const userInfo = useSelector(selectUser);
  return (
    <Container>
      <GreetingComponent
        username={userInfo.name ? userInfo.name : "there"}
        message="Good to have you back."
      />
      <InnerContainer>
        <CoursesContainer>
          <CourseInfo />
        </CoursesContainer>
        <ExtraInfo />
      </InnerContainer>
    </Container>
  );
}

export default Overview;

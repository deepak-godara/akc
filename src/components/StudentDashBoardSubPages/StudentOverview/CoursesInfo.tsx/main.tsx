import CourseComponent from "@components/CommonComponents/CourseComponent";
import EnrolledCourse from "@components/CommonComponents/CourseComponent/EnrolledCourse";
import { useState } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.div``;
const EnrolledCoursesContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.25rem;
`;
// ---------------------
function CourseInfo() {
  const [activeCourse, setActiveCourse] = useState<number>();
  const changeActive = (key: number) => {
    setActiveCourse(key);
  };
  return (
    <Container>
      <EnrolledCoursesContainer>
        {Array.from({ length: 5 }).map((e, index) => (
          <EnrolledCourse
            setActive={changeActive}
            active={activeCourse === index}
            index={index}
          />
        ))}
      </EnrolledCoursesContainer>
    </Container>
  );
}

export default CourseInfo;

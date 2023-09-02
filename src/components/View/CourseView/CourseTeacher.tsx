import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import styled from "styled-components";
import { CourseDetailsType } from "./CourseDetailsType";

// styled-components----
const Container = styled.div`
  margin-top: 1.875rem;
  padding: 1.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2px minmax(0, 1fr);
  background: ${(props) => props.theme.colors.gray[400]};
  border-radius: 10px;
`;
const FacultyBioContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FacultyImageContainer = styled.div`
  height: 5.3125rem;
  width: 5.3125rem;
  border-radius: 2.6563rem;
  overflow: hidden;
`;
const FacultyImage = styled.img`
  height: 100%;
  width: 100%;
`;
const FacultyBio = styled.div`
  margin-left: 1.875rem;
`;
const FacultyBioHeading = styled.div`
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const FacultyBioName = styled.div`
  margin-top: 0.1875rem;
  color: ${(props) => props.theme.colors.gray[800]};
  font-size: 1.5rem;
  line-height: 2.0625rem;
  font-weight: 700;
`;
const VerticalDivier = styled.div`
  height: 100%;
  width: 2px;
  background: ${(props) => props.theme.colors.gray[600]};
  opacity: 0.25;
`;
const FacultyProfileContainer = styled.div`
  padding-left: 2.5313rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
interface FacultyProfileItemPropType {
  $top: boolean;
}
const FacultyProfileItem = styled.div<FacultyProfileItemPropType>`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-top: ${(props) => (!props.$top ? "14px" : "0px")};
`;
const FacultyProfileItemIcon = styled(FaCircleCheck)`
  font-size: 1.125rem;
  margin-right: 1.5625rem;
  color: ${(props) => props.theme.colors.blue[700]};
`;
// ---------------------

function CourseTeacher({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      <FacultyBioContainer>
        <FacultyImageContainer>
          <FacultyImage src={item.teacher.image} />
        </FacultyImageContainer>
        <FacultyBio>
          <FacultyBioHeading>This training is given by:</FacultyBioHeading>
          <FacultyBioName>{item.teacher.name}</FacultyBioName>
        </FacultyBio>
      </FacultyBioContainer>
      <VerticalDivier />
      <FacultyProfileContainer>
        {Object.values(item.teacher.profile).map((e, index) => (
          <FacultyProfileItem $top={index === 0}>
            <FacultyProfileItemIcon />
            {e}
          </FacultyProfileItem>
        ))}
      </FacultyProfileContainer>
    </Container>
  );
}

export default CourseTeacher;

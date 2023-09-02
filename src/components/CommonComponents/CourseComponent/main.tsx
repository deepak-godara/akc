import styled from "styled-components";
import data, { CourseType } from "./SampleCourseData";
import { FaAngleDown, FaBuildingColumns, FaLocationDot } from "react-icons/fa6";
import { ReactNode } from "react";
import { NonEnrolledCourseDataType } from "./NonEnrolledCourse";
// styled-components----
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 58px;
  width: 58px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const ImageAndCourseDetailsContainer = styled.div`
  display: flex;
`;
const CourseDetailsContainer = styled.div`
  margin-left: 2rem;
  margin-top: 0.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UniversityNameStudyContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const UniversityNameContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StudyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;
const LocationIcon = styled(FaLocationDot)``;
const UniversityIcon = styled(FaBuildingColumns)``;
const NormalText = styled.span`
  font-size: 1.125rem;
  line-height: 1.5625rem;
`;
const BoldText = styled.span`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  font-weight: 700;
`;
const CourseMetaContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.gray[800]};
  align-items: center;
`;
const CourseMajor = styled(BoldText)``;
const CourseSubject = styled(NormalText)``;
const CourseLanguage = styled(NormalText)``;
const Squrare = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 0 1.25rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

// ---------------------

function CourseComponent({
  children,
  data,
  ...props
}: {
  children: ReactNode;
  data: CourseType | NonEnrolledCourseDataType;
}) {
  return (
    <Container {...props}>
      <ImageAndCourseDetailsContainer>
        <ImageContainer>
          <Image src={data.image} />
        </ImageContainer>
        <CourseDetailsContainer>
          <UniversityNameStudyContainer>
            <UniversityNameContainer>
              <UniversityIcon />
              &nbsp;&nbsp;{data.university}
            </UniversityNameContainer>
            <StudyContainer>
              <LocationIcon />
              &nbsp;&nbsp;{data.type}
            </StudyContainer>
          </UniversityNameStudyContainer>
          <CourseMetaContainer>
            <CourseMajor>{data.major}</CourseMajor>
            <Squrare />
            <CourseSubject>{data.subject}</CourseSubject>
            <Squrare />
            <CourseLanguage>{data.language}</CourseLanguage>
          </CourseMetaContainer>
        </CourseDetailsContainer>
      </ImageAndCourseDetailsContainer>
      <ButtonsContainer>{children}</ButtonsContainer>
    </Container>
  );
}

export default CourseComponent;

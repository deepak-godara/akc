import React, { ReactNode } from "react";
import {
  FaC,
  FaClock,
  FaLocationDot,
  FaCircleCheck,
  FaBook,
} from "react-icons/fa6";
import styled from "styled-components";
import CourseFeatures from "./CourseFeatures";
import CourseQuestionnare from "./CourseQuestionnare";
import CourseHighlights from "./CourseHighlights";
import CourseTeacher from "./CourseTeacher";
import CourseSchedule from "./CourseSchedule";
import { IconType } from "react-icons/lib";
import { CourseDetailsType } from "./CourseDetailsType";
// styled-components----
const Container = styled.div``;
const CourseMeta = styled.div`
  line-height: 1.5625rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[600]};
  display: flex;
`;
const CourseMetaIcon = ({ Icon }: { Icon: IconType }) => {
  return (
    <Icon
      style={{
        height: "2.1875rem",
        width: "auto",
        opacity: 0.25,
        marginRight: "20px",
      }}
    />
  );
};
const CourseDurationContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CourseFormatContainer = styled.div`
  margin-left: 4.375rem;
  display: flex;
  align-items: center;
`;
const CourseKnowledgeGuidInfoContainer = styled.div`
  margin-left: 4.375rem;
  display: flex;
  align-items: center;
`;
const Divider = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.gray[600]};
  opacity: 0.25;
`;
const FeaturesContainer = styled.div``;
const QuestionnairesContainer = styled.div``;
const HightlightsContainer = styled.div``;
const TeachersContainer = styled.div``;
const CourseScheduleContainer = styled.div``;
// ---------------------

function CourseDetails({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      <CourseMeta>
        <CourseDurationContainer>
          <CourseMetaIcon Icon={FaClock} />
          Total time:&nbsp;{item.courseDuration}
        </CourseDurationContainer>
        <CourseFormatContainer>
          <CourseMetaIcon Icon={FaLocationDot} />
          {item.courseFormat}
        </CourseFormatContainer>
        {item.knowledgeGuideAvailable && (
          <CourseKnowledgeGuidInfoContainer>
            <CourseMetaIcon Icon={FaBook} />
            Knowledge guide available
          </CourseKnowledgeGuidInfoContainer>
        )}
      </CourseMeta>
      <Divider style={{ marginTop: "1.75rem" }} />
      <FeaturesContainer>
        <CourseFeatures item={item} />
      </FeaturesContainer>
      <QuestionnairesContainer>
        <CourseQuestionnare item={item} />
      </QuestionnairesContainer>
      <HightlightsContainer>
        <CourseHighlights item={item} />
      </HightlightsContainer>
      <TeachersContainer>
        <CourseTeacher item={item} />
      </TeachersContainer>
      <Divider style={{ marginTop: "3.125rem" }} />
      <CourseScheduleContainer>
        <CourseSchedule item={item} />
      </CourseScheduleContainer>
    </Container>
  );
}

export default CourseDetails;
